import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
// import AddProduct from './AddProducts'
import {Button} from '../components';
import Heading from '../components/Heading.js'


function ProfileScreen({ navigation  }) {
    return (
      <View style={styles.container}>
         <Heading>Profile Screen</Heading>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }
  })

  export default ProfileScreen