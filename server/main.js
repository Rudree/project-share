import { Meteor } from 'meteor/meteor';
import '../imports/collections/items.js';

Meteor.startup(() => {
  // code to run on server at startup
  process.env.MAIL_URL="smtp://postmaster@sandbox60ea7d6f8f844c7795521e2432ecbd6d.mailgun.org:fd369a3ccd980a42e268e373f0f14240@smtp.mailgun.org:587";
});

Meteor.methods({
  serverVerifyEmail: function(email, userId, callback) {
    console.log("Email to verify:" +email + " | userId: "+userId);
    // this needs to be done on the server.
    return Accounts.sendVerificationEmail(userId, email);
    if (typeof callback !== 'undefined') {
      callback();
    }
    console.log(callback);
  }
});

// Accounts.validateNewUser(function (user) {  
//   // Ensure user name is long enough
//   console.log(user);
//    if (user.firstname.length < 3) {
//     throw new Meteor.Error(403, 'Your firstname needs at least 3 characters');
//   }

//    if (user.lastname.length < 3) {
//     throw new Meteor.Error(403, 'Your lastname needs at least 3 characters');
//   }

//   if (user.username.length < 5) {
//     throw new Meteor.Error(403, 'Your username needs at least 5 characters');
//   }

//   var passwordTest = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//   if (passwordTest.test(user.password) == false) {
//     throw new Meteor.Error(403, 'Your password is too weak!');
//   }

//   return true;
// });