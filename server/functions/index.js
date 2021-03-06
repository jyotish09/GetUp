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

/**
 * Everyday a new link to a comic or a video etc should be kept at
 * `todaysArticle` node in FDB
 * @param {obj} data 
 */
let createTodaysArticle = function (data) {
    const ref = db.ref('todaysArticle');
    ref.update(data);
};

/*
 * For getting a random article from the collection for the day
 * [Link for that](https://us-central1-getupyoufool160218.cloudfunctions.net/getTodaysArticle)
*/
exports.getTodaysArticle = functions.https.onRequest((req, res) => {
    const randomNode = utils.randomCollectionNode();
    const ref = db.ref(randomNode);
    ref.once("value", (snapshot) => {
        const todaysArticle = utils.randomObject(snapshot.val(), randomNode);
        createTodaysArticle(todaysArticle);
        res.send(todaysArticle);
    });
});