import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
// import {btnSize,btnColor} from  '../../theme/ButtonTheme'
const Button = ({children,onPress,style,size,variant}) => {
    return (
        <TouchableOpacity style={[styles[variant,size],style]} onPress={onPress}>
            <Text style={[styles.text,style]}>{children}</Text>
        </TouchableOpacity>
    )
}

const baseContainer = {
    color:"white",
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"purple",
    borderRadius:5, 
}

const styles  = StyleSheet.create({
   
})

export default Button