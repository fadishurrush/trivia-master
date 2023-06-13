import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import MainNavigator from './route/nav';
import TriviaProvider from './store/triviaProvider';
import TriviaContext from './store/triviaContext';

const App = () => {
  return (
    <TriviaProvider>
      <TriviaContext.Consumer>
        {context => {
          return (
            <View style={{flex: 1}}>
              <MainNavigator />
            </View>
          );
        }}
      </TriviaContext.Consumer>
    </TriviaProvider>
  );
};

export default App;
