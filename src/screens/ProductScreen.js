import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
// import AddProduct from './AddProducts'
import {Button} from '../components';
import Heading from '../components/Heading.js'

function ProductScreen({ navigation  }) {
    return (
      <View style={styles.container}>
            {/* <Heading>Product Screen</Heading> */}
        {/* <Button onPress={() => navigation.navigate("AddProduct")} title="Go back from ProfileScreen" /> */}
        <Button size="medium" onPress={() => {
         //navigation.navigate('Home')    
         navigation.navigate("AddProduct")
      }} variant="danger">Add Product</Button>
      </View>
    );
  }
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent: 'center',
        bottom:0
    }
})
  export default ProductScreen