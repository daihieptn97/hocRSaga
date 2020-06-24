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
import {Provider, useStore} from 'react-redux';
import store from './store';
import Home from './screen/Home';


export default function App() {

    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    );
}



