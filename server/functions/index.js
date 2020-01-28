const functions = require('firebase-functions');
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const utils = require("./utils");
const Expo = require("expo-server-sdk");
const expo = Expo.Expo;
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


/*
 * For sending push notification of getTodaysArticle() link to all the expo tokens
 * [Link for that](https://us-central1-getupyoufool160218.cloudfunctions.net/sendPushNotifcation)
*/
exports.sendPushNotifcation = functions.https.onRequest((req, res) => {
    const expoDeviceIDList = db.ref('userDetails/expoDeviceIDs');
    let todaysArticle = {};
    db.ref('todaysArticle').once("value", (snapshot) => {
        todaysArticle = {link: snapshot.val().link, linkName: snapshot.val().linkName};
    });
    let expoTokens = [], messages = [];
    expoDeviceIDList.once("value", (snapshot) => {
        let list = snapshot.val(); /* list[i].expoTokenID */
        
        for(i in list) {
            if (expo.isExpoPushToken(`ExponentPushToken[${i}]`)) {
                expoTokens.push(`ExponentPushToken[${i}]`);
            } else {
                console.error('Wrong Token >> ', `ExponentPushToken[${i}]`);
            }
        }
        res.send({
            data: snapshot.val(),
            expoTokens: expoTokens,
            todaysArticle: todaysArticle
        });
    });
});