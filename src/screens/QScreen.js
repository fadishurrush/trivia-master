import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MainContain from '../components/MainContain';
import Answer from '../components/Answer';
import {answers, questions} from '../res/data/appData';
import {useNavigation} from '@react-navigation/native';
import screenName from '../../route/screenName';
import urls from "../../api/url's";
import TriviaContext from '../../store/triviaContext';

const Q1 = () => {
  const [question, setQuestion] = useState({});
  const [qAnswers, setQAnswers] = useState([]);
  const navigation = useNavigation();
  const {phone, answeredQuestions,setAnsweredQuestions,counter,setCounter} = useContext(TriviaContext);

  useEffect(() => {
    getCorrectAnsweres();
  }, []);

  const getCorrectAnsweres = async () => {
    await fetch(urls.getCorrectAnsweres + '' + phone)
      .then(res => res.json())
      .then(val => {
        console.log('val ', val);
        setCounter(val?.Counter);
      });
  };
  const AddCorrectAnswer = async () => {
    await fetch(urls.AddCorrectAnswer, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Phone: phone,
      }),
    }).catch((e)=>{
      console.log("Add score error ",e);
    })
  };

  const generateRand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const shuffleAnswers = arr => {
    return arr.sort(() => Math.random() - 0.5);
  };

  const addAnswerToArray = (trueAnswerID, answersError) => {
    var a = [trueAnswerID, ...answersError];
    a = shuffleAnswers(a);
    setQAnswers(a);
  };

  const passTheTest = () => {
    callIsFinished();
    navigation.replace(screenName.screen3);
  };

  const callIsFinished = async () => {
    await fetch(urls.isFinished, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Phone: phone,
      }),
    }).catch(e => {
      console.log('isFinished error', e);
    });
  };

  const generateRandQ = async () => {
    console.log("answeredQuestion array ",answeredQuestions);

    var remainingQuestions = questions.filter(
      q => !answeredQuestions.includes(q),
    );
    console.log("remaining array ",remainingQuestions);

      console.log("gererating questions Answered Question array lenght ",answeredQuestions.length);
    if (remainingQuestions.length === 0) {
      return passTheTest();
    }

    const qIndex = generateRand(0, remainingQuestions.length - 1);
    const randQuestion = remainingQuestions[qIndex];

    addAnswerToArray(randQuestion.answerID, randQuestion.answersError);
    setQuestion(randQuestion);
  };

  const handleAnswerClick = async selectedAnswer => {
    if (selectedAnswer === question.answerID) {
      console.log("answeredQuestions",answeredQuestions);
      setAnsweredQuestions([...answeredQuestions, question]);
      await fetch(urls.AddQuestion, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Phone: phone,
          Question: question,
        }),
      }).catch(e => {
        console.log('login error ,', e);
      });
      var nc = counter;
      nc++;
      setCounter(nc);
      AddCorrectAnswer();
    } else {
      setAnsweredQuestions([...answeredQuestions, question]);
      await fetch(urls.AddQuestion, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Phone: phone,
          Question: question,
        }),
      }).catch(e => {
        console.log('login error ,', e);
      });
    }
  };

  useEffect(() => {
    generateRandQ();
  }, [answeredQuestions]);

  return (
    <MainContain>
      <Text style={styles.counter}>{counter}/10</Text>
      <Text style={styles.textSt}>{question.text}</Text>
      {qAnswers.map((answerID, index) => (
        <Answer
          key={index}
          name={answers[answerID]}
          click={() => handleAnswerClick(answerID)}
        />
      ))}
    </MainContain>
  );
};

const styles = StyleSheet.create({
  textSt: {
    color: 'black',
    fontSize: 40,
    alignItems: 'center',
    marginBottom: 40,
    textAlign: 'center',
  },
  counter: {
    color: 'green',
    fontSize: 20,
    textAlign: 'right',
    alignContent: 'flex-end',
  },
});

export default Q1;
