import React from 'react';
import { Text,StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CustomText = ({children,style}) => {
    return (
        <Text style={[styles.container,style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:5,
        // alignItems:"center",
        fontSize:hp(2.5)
    }
})

export default CustomText;