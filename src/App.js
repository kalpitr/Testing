/**
 * Sample React Native App
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LoginScreen from './screens/Login';
import Navigator from './Navigation/Navigator'

const App = () => {
    return (
        <Navigator/>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  }
});

export default  App;
