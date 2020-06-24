/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TouchableOpacity,
} from 'react-native';
import {
    Provider,
    useDispatch, useSelector,
    useStore,
} from 'react-redux';
// import {upCount} from '../actions/countAction';
import {UP_COUNT} from '../constants';

export default function Home() {
    const store = useStore();
    const dispatch = useDispatch();

    const number = useSelector(state => state.count.number);

   // console.log(number);
    //let {number} = store.getState().count;

    return (
        <View style={{flex: 1, marginTop: 40, justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', marginBottom: 20, fontSize: 26}}>{number}</Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={() => dispatch({type: UP_COUNT, val: 1})}
                    style={{
                        backgroundColor: 'green',
                        padding: 10,
                        width: '60%',
                        borderRadius: 5,
                    }}>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 26}}>+</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}



