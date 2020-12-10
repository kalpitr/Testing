/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
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
import Heading from '../components/Heading';
import Input from '../components/Input';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import FilledButton from '../components/FilledButton';
import TextButton from '../components/TextButton';
import {Button} from '../components';

  const SignUpScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Heading>Welcome To Sign Up Screen</Heading>
      <Input
        style={styles.text}
        placeholder={'First Name'}
      />
       <Input
        style={styles.text}
        placeholder={'Last Name'}
      />
      <Input
        style={styles.text}
        placeholder={'Email'}
        keyboardType={'email-address'}
      />
      <Input style={styles.text} placeholder={'Password'} secureTextEntry />
      <FilledButton
      style={styles.text}
        title={'Login'}
        onPress={() => {
          alert('test');
        }}
      />
      <TextButton  title="Already have an Account? Sign In" onPress={ () =>{
          navigation.navigate("LoginScreen")
      }}/>
      {/* <Button size="large" onPress={() => {
         //navigation.navigate('Home')
         navigation.navigate(ProfileScreen)
      }} variant="danger">Submit</Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 20,
    alignItems: 'center',
    // justifyContent:"center",
  },
  text: {
    marginVertical: 10,
    // backgroundColor:"red",
  },  
});

export default SignUpScreen;
