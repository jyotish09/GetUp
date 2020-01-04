const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((request, response) => {
 console.log('Test Run!!');
 response.send("Hello TEST RUN!");
});

exports.showUserDetails = functions.https.onRequest((request, response) => {
    console.log('showUserDetails() >> ');
    response.send(JSON.stringify(functions.database.ref('/userDetails')));
});
