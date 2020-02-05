import React from 'react';
import { Input, Button } from 'react-materialize';

const AddContact = props => {
    return(
        <form onSubmit={props._handleFormSubmit}>
            <h5>Add contact</h5>
            <Input name="name" onChange={props._handleInputChange} value={props.values.name} s={12} placeholder="Name"></Input>
            <Input name="nick" onChange={props._handleInputChange} value={props.values.nick} s={12} placeholder="Nickname"></Input>
            <Input name="tel" onChange={props._handleInputChange} value={props.values.tel} s={12} placeholder="Phone number"></Input>
            <Input name="mail" onChange={props._handleInputChange} value={props.values.mail} s={12} placeholder="Email address"></Input>
            <Button className='blue' waves='light' icon='add'>Add</Button>
            <hr/>
        </form>
    )
}

export default AddContact;