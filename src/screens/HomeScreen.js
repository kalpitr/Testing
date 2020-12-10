import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Heading from '../components/Heading.js'
// import AddProduct from './AddProducts'
import {Button} from '../components';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
 
RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
  .then(data => {
    // The user has accepted to enable the location services
    // data can be :
    //  - "already-enabled" if the location services has been already enabled
    //  - "enabled" if user has clicked on OK button in the popup
  }).catch(err => {
    // The user has not accepted to enable the location services or something went wrong during the process
    // "err" : { "code" : "ERR00|ERR01|ERR02", "message" : "message"}
    // codes : 
    //  - ERR00 : The user has clicked on Cancel button in the popup
    //  - ERR01 : If the Settings change are unavailable
    //  - ERR02 : If the popup has failed to open
  });
function HomeScreen({ navigation  }) {
    return (
      <View style={styles.container}>
        {/* <Button onPress={() => navigation.navigate("AddProduct")} title="Go back from ProfileScreen" /> */}
        <Heading>Home Screen</Heading>
      </View>
      
      
    );
  }

  const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent: 'center',
    }
})

  export default HomeScreen