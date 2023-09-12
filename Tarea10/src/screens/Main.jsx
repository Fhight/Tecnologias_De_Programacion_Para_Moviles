import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Navigation from './components/Navigation';

const Main = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Navigation />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    height: '100%',
  },
});
