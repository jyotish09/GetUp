import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import moment from 'moment';

/**
 * For getting Expo Notification ID per device.
 */
export const getTokenForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    /**
    Only ask if permissions have not already been determined, because
    iOS won't necessarily prompt the user a second time.
    - From Expo Docs
    */

    if (existingStatus !== 'granted') {
    /**
    Android remote notification permissions are granted during the app
    install, so this will only ask on iOS
    - From Expo Docs
    */
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    /* Stop here if the user did not grant permissions for notification */
    if (finalStatus !== 'granted') {
        return;
    }

    /** Get the token that uniquely identifies this device */
    const token = await Notifications.getExpoPushTokenAsync();
    return token;
};

/**
 * This converts the {hour, minute} from input to a proper
 * timestamp format to be used by moment and storing it in the DB
 * @param {Object} obj
 */
export const alertTimeFn = (obj) => {
    const time = `${parseInt(obj.hour) > 9 ? `${obj.hour}` : `0${obj.hour}`
    }:${parseInt(obj.minute) > 9 ? `${obj.minute}` : `0${obj.minute}`
    }:00`;
    return (`${moment().format().split('T')[0]}T${time}`);
};

/**
 * To create a unique node in the FDB.
 * @param {Object} expoTokenID
 */
export const nodeId = (expoTokenID) => {
    for (i in expoTokenID) {
        if (typeof expoTokenID[i] === 'string' && expoTokenID[i].includes('ExponentPushToken')) {
            /* expoTokenID[i] : Should look like ExponentPushToken[XXXXXXXXXXXXXXXXXXXXXX] */
            return (expoTokenID[i].substring(18, 40));
        }
    }
};
