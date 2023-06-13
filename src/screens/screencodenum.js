import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';

import screenName from '../../route/screenName';

const Screen1 = (props) => {

    const navigation = useNavigation();

    const navigateToCreen2 = () => {
        props.navigation.navigate(screenName.screen2)
    }

    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.textSt}>welcome to EzoEaT</Text>

            </View>

            <View>
                <Text style={styles.textSt2}>{'Everything you want is here '}</Text>

            </View>
           

            <View>

                <TouchableOpacity style={styles.Buttons}
                    onPress={navigateToCreen2}>
                    <Text style={styles.start1}>{'start(بدا)'}</Text>

                </TouchableOpacity>
            </View >

        </View>
    );

};



const styles = StyleSheet.create({
    header: {
        flex:1,
         backgroundColor: '#D424B4',
        // height:'10%',

        // borderColor:'#454545',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textSt: {
        color: 'black',
        fontSize: 20,

    },
    textSt2: {
        color: 'gray',
        fontSize: 15,
        marginTop: 40,
    },
    Buttons: {
        backgroundColor: '#386BE8',
        fontSize: 141,
        marginTop: 70,
        width: 300,
        alignItems: 'center',

    },
    start1: {
        color: 'white',
        fontSize: 26,
        alignItems: 'center',

    },
    img:{
        height: 250,
         width: 250 ,
         marginTop:170,
    }

})

export default Screen1;