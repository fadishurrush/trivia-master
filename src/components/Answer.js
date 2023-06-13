import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import SIZES from '../res/sizes';

const Answer= (props) => {
    return (
        <TouchableOpacity style={styles.Button} onPress={()=>props.click?.()}>
                <Text style={styles.Text}>{props.name}</Text>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({

    Button: {
        // backgroundColor:"#D424B4",
        padding:15,
        alignItems:"center",
        width: SIZES.screenWidth * 0.7 ,
        // alignSelf:'',
        borderColor:"#D424B4",
        borderWidth:1 ,
        marginTop: 20 , 
        borderRadius: 20 
    },
    Text:{
        fontSize:20,
        color:"#D424B4",
        fontWeight:"bold"
    }

})

export default Answer;