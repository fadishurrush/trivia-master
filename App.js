import React, { useEffect } from 'react';
import {View, KeyboardAvoidingView, BackHandler, UIManager, I18nManager} from 'react-native';
import MainNavigator from './route/nav';
import TriviaProvider from './store/triviaProvider';
import TriviaContext from './store/triviaContext';

const App = () => {

I18nManager.allowRTL(false)

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress' , ()=> true)
  })

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
