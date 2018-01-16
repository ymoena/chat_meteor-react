import { Meteor } from 'meteor/meteor';
import '../imports/api/ChatInput.jsx';

Meteor.startup(() => {
  // code to run on server at startup
    
    Meteor.publish("allUsers", function () {
        return Meteor.users.find({});
        });
    
});
