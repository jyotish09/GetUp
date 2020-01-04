/*
 * For picking a random topic for the day, be it :
 - A YouTube video from Absolute Motivation channel or HES Motivation Channel
 - Or from Zen Pencil artist
*/
exports.randomCollectionNode = () => {
    let choices = ["absoluteMotivation", "hesMotivation", "zenpencils"];
    return (choices[Math.floor(Math.random()*choices.length)]);
};

/* For random object within a JSON */
exports.randomObject = (obj, randomNode) => {
    let keys = Object.keys(obj)
    /* https://jsperf.com/random-object-property-selection */
    let randomObj = obj[keys[ keys.length * Math.random() << 0]]
    switch (randomNode) {
        case "zenpencils": response = ({
            linkName: randomObj.key,
            link: randomObj.value,
            nodeName: randomNode
        });
        break;
        case "absoluteMotivation":
        case "hesMotivation": response = ({
            linkName: randomObj.clipName,
            link: `https://youtu.be/${randomObj.id}`,
            nodeName: randomNode
        });
    }
    return response;
}