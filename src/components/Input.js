import React from 'react';
import { View, StyleSheet , Text , TextInput} from 'react-native';

const Input = ({children,style,...props}) => {
    return (
        <TextInput {...props} style={[styles.input,style]} />
    )
    }

    const styles = StyleSheet.create({
        input:{
            backgroundColor:"#ccc",
            width:'100%',
            padding:10,
            borderRadius:8,
        }
    })

export default Input;