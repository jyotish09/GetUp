const functions = require('firebase-functions');
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const utils = require("./utils");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://getupyoufool160218.firebaseio.com"
});
const db = admin.database();
exports.alertTimeCreate = functions.database.ref('/userDetails/expoDeviceIDs/')
    .onCreate((snapshot,context) => {
        console.log('snapshot.val() : ', snapshot.val());
        console.log('context : ', context);
        return snapshot.val();
    });

/*
 * For getting a random article from the collection for the day
*/
exports.getTodaysArticle = functions.https.onRequest((req, res) => {
    const randomNode = utils.randomCollectionNode();
    const ref = db.ref(randomNode);
    ref.once("value", (snapshot) => {
        res.send(utils.randomObject(snapshot.val(), randomNode));
    });
});