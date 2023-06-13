import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import screenName from '../../route/screenName';
import MainContain from '../components/MainContain';
import {SafeAreaView} from 'react-native-safe-area-context';
import urls from "../../api/url's";
import TriviaContext from '../../store/triviaContext';

const Screenlog = props => {
  const [name, setName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {phone,setPhone,setAnsweredQuestions} = useContext(TriviaContext);

  const navigation = useNavigation();

  const handleLogin = async () => {
    if (name === '' || phone === '') {
      Alert.alert('خطأ', 'يرجى إدخال جميع الحقول');
    } else if (name.length < 3) {
      Alert.alert('خطأ', 'يجب أن يحتوي الاسم على 3 أحرف على الأقل');
    } else if (!/^\d{10}$/.test(phone)) {
      Alert.alert('خطأ', 'يجب أن يحتوي رقم الهاتف على 10 أرقام فقط');
    } else {
      console.log('logging in... ');
      await fetch(urls.Login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserName: name,
          Phone: phone,
        }),
      })
        .then(res => {
          return res.json();
        })
        .then(resjson => {
          console.log('resjson', resjson);
          resjson.user.isFinished ?  Alert.alert(resjson.user.UserName+" already finished") : navigateToScreen1();

        })
        .catch(e => {
          console.log('login error ,', e);
        });
    }
  };

  const navigateToScreen1 = async () => {
    await getAnsweredQuestion();
    navigation.navigate(screenName.screen1);

  };

  const getAnsweredQuestion = async () => {
    await fetch(urls.getAnsweredQuestions + '' + phone)
      .then(res => res.json())
      .then(val => {
        setAnsweredQuestions([...val?.AnsweredQuestions]);
      });
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="height" enabled>
      <MainContain>
        <SafeAreaView>
          <TextInput
            style={[
              styles.input,
              {borderColor: name.length < 3 ? 'red' : 'grey'},
            ]}
            placeholder="الاسم"
            placeholderTextColor={'black'}
            onChangeText={text => setName(text)}
          />
          {name.length < 3 && (
            <Text style={styles.errorText}>
              يجب أن يحتوي الاسم على 3 أحرف على الأقل
            </Text>
          )}
          <TextInput
            style={[
              styles.input,
              {borderColor: !/^\d{10}$/.test(phone) ? 'red' : 'gray'},
            ]}
            placeholder="رقم الهاتف"
            placeholderTextColor={'black'}
            onChangeText={text => setPhone(text)}
            keyboardType="numeric"
          />
          {!/^\d{10}$/.test(phone) && (
            <Text style={styles.errorText}>
              يجب أن يحتوي رقم الهاتف على 10 أرقام فقط
            </Text>
          )}
        </SafeAreaView>

        <TouchableOpacity style={styles.Buttons} onPress={handleLogin}>
          <Text style={styles.start1}>تسجيل الدخول</Text>
        </TouchableOpacity>
      </MainContain>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#D424B4',
    // height:'10%',

    // borderColor:'#454545',
    justifyContent: 'center',
    alignItems: 'center',
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

  input: {
    height: 50,
    margin: 10,
    borderWidth: 2,
    padding: 10,
    width: 300,
    borderColor: 'black',
    color: 'black',
  },

  errorText: {
    color: 'red',
    marginBottom: 10,
    marginRight:"3%"
  },

  text: {
    fontSize: 20,
    color: 'white',
  },

  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default Screenlog;
