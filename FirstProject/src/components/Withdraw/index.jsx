import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HeaderWallet from './Header';
import BodyWallet from './Body';

const Withdraw = () => {
  return (
    <View>
      <HeaderWallet />
      <BodyWallet />
    </View>
  );
};

export default Withdraw;

const styles = StyleSheet.create({});
