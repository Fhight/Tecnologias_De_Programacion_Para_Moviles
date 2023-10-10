import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Bottom from '../components/Bottom';
import MyDrawer from '../components/MyDrawer';
import { NavigationContainer } from '@react-navigation/native';

const Main = () => {
  return (
    <>
      <MyDrawer />
      <Bottom />
    </>
  );
};

export default Main;

const styles = StyleSheet.create({});
