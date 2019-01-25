import React from 'react';
import { Input, Button } from 'react-materialize';

const AddContact = props => {
    return(
        <form onSubmit={props._handleFormSubmit}>
            <h5>Agregar contacto</h5>
            <Input name="name" onChange={props._handleInputChange} value={props.values.name} s={12} placeholder="Nombre"></Input>
            <Input name="nick" onChange={props._handleInputChange} value={props.values.nick} s={12} placeholder="Apodo"></Input>
            <Input name="tel" onChange={props._handleInputChange} value={props.values.tel} s={12} placeholder="Telefono"></Input>
            <Input name="mail" onChange={props._handleInputChange} value={props.values.mail} s={12} placeholder="Correo electronico"></Input>
            <Button className='blue' waves='light' icon='add'> Agregar</Button>
            <hr/>
        </form>
    )
}

export default AddContact;