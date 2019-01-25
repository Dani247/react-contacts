import React, { Component } from 'react';
import { Container, Col, Row } from 'react-materialize';

//Components
import AddContact from './AddContact.component';
import ContactList from './ContactList.component';

class Main extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'',
            nick:'',
            tel:'',
            mail:'',
            contacts:[]
        }
    }

    _handleInputChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    _handleFormSubmit = e => {
        e.preventDefault();
        let { name, nick, tel, mail } = this.state;

        if(name.length>0 && nick.length>0 && tel.length>0 && mail.length>0){
            this.setState({
                name:'',
                nick:'',
                tel:'',
                mail:'',
                contacts:[...this.state.contacts, { name, nick, tel, mail }]
            })
        }else{
            alert('Faltan campos')
        }
    }

    _handleDelete = e =>{
        let contactIndex = e.target.value;

        let newContacts = this.state.contacts;
        newContacts.splice(contactIndex,1)

        this.setState({
            contacts:newContacts
        })
    }

    render(){
        return(
        <Container>
            <Row>
                <Col s={12} m={6} className="z-depth-1">
                    <AddContact _handleInputChange={this._handleInputChange} _handleFormSubmit={this._handleFormSubmit} values={this.state}></AddContact>
                </Col>

                <Col s={12} m={6} className="z-depth-1">
                    <h5>Lista de contactos</h5>
                    <ContactList _handleDelete={this._handleDelete} contacts={this.state.contacts}></ContactList>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default Main;