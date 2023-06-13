import {View, StyleSheet, Text} from 'react-native';
import MainContain from '../components/MainContain';
import {useContext} from 'react';
import TriviaContext from '../../store/triviaContext';
import ConfettiCannon from 'react-native-confetti-cannon';

const Screen3 = () => {
  const {counter} = useContext(TriviaContext);

  return (
    <MainContain>
      {counter == 10 &&
         <ConfettiCannon
         count={400}
         origin={{x: 0, y: 0}}
         fadeOut={true}  
       />
      }
      <View>
        <Text style={styles.allText}>انهيت الامتحان</Text>
        <Text style={styles.allText}>{` علامتك: ${counter}/10`}</Text>
        {counter == 10 ? (
            <Text style={styles.allText}>مبروك علامة كاملة</Text>
        ) : null} 
      </View>
    </MainContain>
  );
};

const styles = StyleSheet.create({
  allText: {
    color: '#4EE530',
    fontSize: 40,
    textAlign: 'center',
  },
});

export default Screen3;
