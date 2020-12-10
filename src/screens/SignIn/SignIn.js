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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import {Heading} from '../../components';
import {Input} from '../../components';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {FilledButton} from '../../components';
import {TextButton} from '../../components';
import {Button} from '../../components';
import { useNavigation } from '@react-navigation/native';
import SignUpScreen from '../SignUp/SignUp';

  const LoginScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Heading>Welcome To Login Screen</Heading>
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
      <TextButton  title="Dont have an Account? Create One" onPress={()=>{
          navigation.navigate("SignUpScreen")
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
    // padding: 20,
    alignItems: 'center',
    // justifyContent:"center",
  },
  text: {
  //  fontSize:hp('2.5%'),
    marginVertical: 10,
    // backgroundColor:"red",
  },  
});

export default LoginScreen;
