import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';

import screenName from '../../route/screenName';
import MainContain from '../components/MainContain';

const Screen1 = (props) => {

    const navigation = useNavigation();

    const navigateToCreen2 = () => {
        props.navigation.replace(screenName.screen2, {})
    }

  

  


    return (
        <MainContain>
       
           <View style={styles.imgcont}>

            <Image
                    style={styles.img}
                    source={require('../assets/img/alaa.jpeg')}
                />

            <Image
                    style={styles.img2}
                    source={require('../assets/img/zone.jpeg')}
                />

                </View>

                <Text  style={styles.textSt}>هيا لنلعب</Text>
    

   

            <View>

                <TouchableOpacity style={styles.Buttons}
                    onPress={navigateToCreen2}>
                    <Text style={styles.start1}>{'(ابدا) start '}</Text>

                </TouchableOpacity>
            </View >

        
        </MainContain>
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
        fontSize: 40,

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
         height: 130,
          width: 130 ,
         marginTop:-190,
   
    },
    img2:{
        height: 130,
         width: 130 ,
        marginTop:-190,
       marginHorizontal:19,
       
      
   },
   imgcont:{

    
     flexDirection: 'row',
    justifyContent:'space-around',

   }

})

export default Screen1;