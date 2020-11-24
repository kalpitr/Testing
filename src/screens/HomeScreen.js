import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import Heading from '../components/Heading.js'
// import AddProduct from './AddProducts'
import {Button} from '../components';

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