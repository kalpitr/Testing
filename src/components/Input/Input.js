import React from 'react';
import { View, StyleSheet , Text , TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Input = ({children,style,...props}) => {
    return (
        <TextInput {...props} style={[styles.input,style]} />
    )
    }

    const styles = StyleSheet.create({
        input:{
            backgroundColor:"#ccc",
            width:wp('90%'),
            padding:10,
            borderRadius:8,
        }
    })

export default Input;