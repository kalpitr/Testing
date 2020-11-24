import React from 'react';
import { View, StyleSheet , Text , TouchableOpacity} from 'react-native';

const TextButton = ({title,onPress,style}) => {
    return (
        <TouchableOpacity style={[styles.container,style]} onPress={onPress} >
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
    }

    const styles = StyleSheet.create({
        container:{
            padding:30,
            width:'100%',
            // backgroundColor:"purple",
            alignItems:'center',
            justifyContent:'center',
            borderRadius:8,
        },
        text:{
            color:"purple",
            fontWeight:'500'
        }

    })

export default TextButton;