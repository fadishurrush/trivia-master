import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import screen1 from '../src/screens/screen1';
import screen2 from '../src/screens/QScreen';
import screen3 from '../src/screens/screen3';
import screenName from './screenName';
import screenRed from '../src/screens/screenRed';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screenlog from '../src/screens/screenlog';

const MainNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    // <View style={{flex: 1,backgroundColor: 'red',}}/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screenName.screenlog} component={Screenlog} />
        <Stack.Screen
          name={screenName.screen1}
          component={screen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenName.screen2}
          component={screen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenName.screen3}
          component={screen3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screenName.screenRed}
          component={screenRed}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
