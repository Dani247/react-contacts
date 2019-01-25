import React from 'react';
import { Card, Button, Icon, Chip} from 'react-materialize';

const ContactList = props => {
    if(props.contacts.length > 0){
        return(
            props.contacts.map((item,index)=>{
                return(
                    <Card key={index} s={12} className='teal lighten-5 animated pulse fast' title={<></>} reveal={
                            <>
                            Apodo: {item.nick} <br/>
                            Telefono: {item.tel} <br/>
                            Email: {item.mail}
                            </>
                        }>

                        <>
                        <Chip>
                        <img src='http://employees.azureedge.net/1.png'/>
                        {item.name}
                      </Chip>
                      <Button floating small className="red" value={index} onClick={props._handleDelete}><Icon>delete</Icon></Button></>
                    </Card>
                )
            })
        )
    }else{
        return(
            <Card s={12} className='teal lighten-5' title="No existen contactos">

            </Card>
        )
    }
}

export default ContactList;