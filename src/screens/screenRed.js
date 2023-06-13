import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MainContain from '../components/MainContain';

const Red = () => {
  return (
    <MainContain>
      <View style={styles.container}>
        <Text style={styles.text}>GAME OVER</Text>
      </View>
    </MainContain>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 67,
  },
});

export default Red;
