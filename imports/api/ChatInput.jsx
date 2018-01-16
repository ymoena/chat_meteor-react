import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Session } from 'meteor/session'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Mongo } from 'meteor/mongo';

export const Mensajes_BD = new Mongo.Collection('mensajes_bd');

// App component - represents the whole app
class ChatInput extends Component {
    
    handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const mensaje = ReactDOM.findDOMNode(this.refs.texto).value.trim();
 
    Mensajes_BD.insert({
                mensaje,
                de: Meteor.userId(),
                para: this.props.usuario2,
                enviado: new Date(),
            });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.texto).value = '';
    console.log("Mensaje:", "insertado con exito ")
    //console.log(Mensajes_BD.find().fetch());
  }
    
    
    render() {
        return (
                <div class="enviar">
                     <div class="input-group">
                                   <input  ref="texto" type="text" class="form-control" placeholder="Escriba su mensaje"/>
                                  <span class="input-group-btn">
                                    <button class="btn btn-success" onClick={this.handleSubmit.bind(this)} type="button">Enviar</button>
                                  </span>
                    </div>
                </div>                    
              );
    } }

export default withTracker(() => {
  return {
   usuarios_: Meteor.users.find({_id: {$ne: Meteor.userId()}}).fetch(),
    mensaje_: Mensajes_BD.find({}).fetch(),
    currentUser: Meteor.user(),
    usuario2: Session.get('usuario2'),
      usuario:Meteor.userId(),
  };
})(ChatInput);