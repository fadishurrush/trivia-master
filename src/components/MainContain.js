import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const MainContain = (props) => {


    return (

        <View style={styles.background}>

            <View style={styles.children}>{props.children}</View>

        </View>




    );

};

const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: '#D424B4',
        paddingVertical: 60,
        paddingHorizontal: 20
    },
    children: {
        flex: 1,
        backgroundColor: '#ffff' , 
        borderRadius:20 , 
        justifyContent:'center',
        alignItems:'center'
    },






})

export default MainContain;