import React, { Component } from 'react';
import Usuarios from '../api/Usuarios';
import Mensajes from '../api/Mensajes';
import { Meteor } from 'meteor/meteor'
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Mensajes_BD } from '../api/ChatInput.jsx';
import { withTracker } from 'meteor/react-meteor-data'



class App extends Component {

      render() {
        
        if (!this.props.currentUser) {
                return (
                    <div class=" log-form">
                        <div class="log-sign">
                             <h1 class="text-center">Chat-App</h1> <hr/>
                             <h5 class="text-center">Escriba su mail y password para ingresar</h5>
                            <p class="log-in-2 text-center"><AccountsUIWrapper class="" /> </p>
                              
                        </div>
                     </div>
                )}

          
    return (
        <div class = "container" >
            <div class = "row" > 
                <div class = "col-md-12 ventana" >
                  <div class="col-md-4 banner"> Conversaciones</div>
                   <div class="col-md-8 banner"><img src="images/icono-usuario.png" height="25p" width="25" hspace="15" />Usuario Activo
                   <AccountsUIWrapper class="log-in" /> </div>
                        <Usuarios></Usuarios>
                        <Mensajes></Mensajes>
         </div>
        </div> 
    </div >  
     )
  }}


export default withTracker(() => {
  return {
    mensaje_: Mensajes_BD.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(App);