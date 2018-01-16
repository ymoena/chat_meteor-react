import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import ChatInput from '../api/ChatInput';
import { Mensajes_BD } from '../api/ChatInput.jsx';

// App component - represents the whole app
class Usuarios extends Component {

   method(){
    Session.set("usuario2", "null");
  }
    
    renderUsuarios() {
        return this.props.usuarios_.map((user) => (
        <button class="perfil" value={user._id} alt={user._id} key={user._id} onClick={this.retornarId.bind(this)}>
            <img src="images/icono-usuario-2.png" alt={user._id} height="45" width="45" hspace="8" class="imagen-perfil" />
            <p class="username">{user._id}</p>
            <p class="mail">{user.emails[0].address}</p>
        </button>
            
                                        ));
    }
    
    retornarId(event){
    const mensaje = event.currentTarget.value;
        
        console.log("Usuario: ", mensaje);
        Session.set("usuario2", mensaje);
    }
 
    
    render() {
        return (
            
        console.log(this.props.usuarios_),
        console.log(this.props.mensaje_),
        console.log(this.props.currentUser),
        console.log(this.props.usuario2),
            
            <div class="col-md-4 borde ventana-usuarios">
             { this.renderUsuarios() }
          </div>
            
              );
    }
}



export default withTracker(() => {
  return {
    usuarios_: Meteor.users.find({_id: {$ne: Meteor.userId()}}).fetch(),
    mensaje_: Mensajes_BD.find({}).fetch(),
    currentUser: Meteor.user(),
    usuario2: Session.get('usuario2'),
  };
})(Usuarios);