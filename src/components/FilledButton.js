import React from 'react';
import { View, StyleSheet , Text , TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FilledButton = ({title,onPress,style}) => {
    return (
        <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
    }

    const styles = StyleSheet.create({
        container:{
            color:"white",
            padding:14,
            width:wp(90),
            backgroundColor:"purple",
            alignItems:'center',
            justifyContent:'center',
            borderRadius:8,
        },
        text:{
            color:"white",
        }

    })

export default FilledButton;