import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
// import AddProduct from './AddProducts'
import {Button} from '../components';
import Heading from '../components/Heading.js'


function OrderScreen({ navigation  }) {
    return (
      <View style={styles.container}>
        <Heading>Order Screen</Heading>
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

  export default OrderScreen