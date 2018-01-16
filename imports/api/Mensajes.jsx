import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session'
import ChatInput from '../api/ChatInput';
import { Meteor } from 'meteor/meteor'
import { Mensajes_BD } from '../api/ChatInput.jsx';
import { withTracker } from 'meteor/react-meteor-data'

// App component - represents the whole app
class Mensajes extends Component {
  
    
      renderMensajes() {
        return this.props.mensaje_.map((mensaje) => (
                                    
          <div key={mensaje.enviado} class="mensaje-1">{mensaje.mensaje}</div>));
    }
    

    render() {
        
        var props = this.props;

        
        var mensajes = this.props.mensaje_.map(function(mensaje, i){
            if(props.usuario == mensaje.de && props.usuario2 == mensaje.para){
                          return <div key={mensaje.enviado} class="mensaje-1">{mensaje.mensaje}</div>;
            }else if(props.usuario2 == mensaje.de && props.usuario == mensaje.para){
                          return <div key={mensaje.enviado} class="mensaje-2">{mensaje.mensaje}</div>;
            }else{
                          return null;
            }});
        
        
        
        if (this.props.usuario2 != undefined) {
          return (
                    <div class="col-md-8 borde ventana-mensajes">                
                         <div class="mensajes pre-scrollable">              
                           { mensajes }
                         </div>
                           <ChatInput></ChatInput>
                    </div>
                )  
        } else{
            
            return (
                <div class="col-md-8 borde ventana-mensajes">
                  <br/>
                           <div class="log-sign-2" >
                       <h4>Haga click en el usuario con el cual quiera conversar</h4>
                           </div>
                </div>)}
}}

export default withTracker(() => {
  return {
   usuarios_: Meteor.users.find({_id: {$ne: Meteor.userId()}}).fetch(),
    mensaje_: Mensajes_BD.find({}).fetch(),
    currentUser: Meteor.user(),
    usuario2: Session.get('usuario2'),
      usuario:Meteor.userId(),
  };
})(Mensajes);
