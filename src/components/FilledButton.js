import React from 'react';
import { View, StyleSheet , Text , TouchableOpacity} from 'react-native';

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
            width:'100%',
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