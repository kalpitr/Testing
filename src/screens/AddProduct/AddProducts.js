import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
// import {Heading} from '../../../../components';
import {FilledButton} from '../../components';

function AddProduct({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Add Product</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
alignItems:"center",
    justifyContent:"center"
  },
  text: {},
});
export default AddProduct;
