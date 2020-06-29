import {DOWN_COUNT, UP_COUNT} from '../../constants';
import {
    Provider,
    useDispatch, useSelector,
    useStore,
} from 'react-redux';
import {put} from 'redux-saga/effects';

export const upCount = (val = 1) => {
    //alert('Count Action Up Count ' + val);
    return {type: UP_COUNT, val};
};

export const apiFetchDemo = () => {
    try {
        return fetch('https://reactnative.dev/movies.json1')
            .then((response) => (response.status === 200) ? response.json() : response)
            .then((json) => {
                return json.data;
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (e) {
        console.log(e);
        return false;
    }
};

export function downCount(val = 1) {
    return {type: DOWN_COUNT, val};
}

import {Client, Message} from 'react-native-paho-mqtt';

export function CMD1(payload) {
    return {TYPE: 'CMD1', payload};
}

export function CMD2(payload) {
    return {TYPE: 'CMD2', payload};
}

export function CMD3(payload) {
    return {TYPE: 'CMD3', payload};
}

export function CMD4(payload) {
    return {TYPE: 'CMD4', payload};
}

export function connectSocket() {
    /* return async (dispatch, getState) => {

     };*/
    let clientID = '9d08d428c1964cf6921e4c59e5270fbc';
    let client = null;


    // console.log(uri, ip, domain)
    let myStorage = {
        setItem: (key, item) => {
            myStorage[key] = item;
        },
        getItem: key => myStorage[key],
        removeItem: key => {
            delete myStorage[key];
        },
    };

    client = new Client({
        uri: uri,
        clientId: clientID,
        storage: myStorage,
    });

    //

    client.connect().then(() => {
        console.log('OnConnect', client);
        client.subscribe('xinchaovietnam');

        client.on('messageReceived', message => {
            let a = Utf8ArrayToStr(message._payload);
            console.log(a);
            let res = JSON.parse(a);
            // const dispatch = useDispatch();
            if (res.Rsaga === 1) {
                // dispatch(CMD1(res));
            }


            let topic = message.destinationName;
        });

        client.on('connectionLost', responseObject => {
            console.log(responseObject);
        });
    });

}


// http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt

/* utf.js - UTF-8 <=> UTF-16 convertion
 *
 * Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
 * Version: 1.0
 * LastModified: Dec 25 1999
 * This library is free.  You can redistribute it and/or modify it.
 */

function Utf8ArrayToStr(array) {
    var out, i, len, c;
    var char2, char3;

    out = '';
    len = array.length;
    i = 0;
    while (i < len) {
        c = array[i++];
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c);
                break;
            case 12:
            case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break;
        }
    }

    return out;
}
