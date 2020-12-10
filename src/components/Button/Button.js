import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import {btnSize,btnColor} from  '../../theme/ButtonTheme'
const Button = ({children,onPress,style,size,variant}) => {
    return (
        <TouchableOpacity style={[styles[size,variant],style]} onPress={onPress}>
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
    // width:200
}

const styles  = StyleSheet.create({
    // container:{
        // color:"white",
        // padding:10,
        // alignItems:'center',
        // justifyContent:'center',
        // borderRadius:5, 
    // },
    text:{
        color:"white"
    },
    medium : {
        ...baseContainer,
        width:btnSize.md
    },
    small : {
        ...baseContainer,
        width:btnSize.sm
    },
    large : {
        ...baseContainer,
        width:btnSize.lg
    },
    danger: {
        ...baseContainer,
        backgroundColor:btnColor.danger
    },
    info : {
        ...baseContainer,
        backgroundColor:btnColor.info
    },
    warning : {
        ...baseContainer,
        backgroundColor:btnColor.warning
    },
})

export default Button