import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const HeaderWallet = () => {
  return (
    <View style={styles.content}>
      <AntDesign name='left' size={24} color='white' />
      <Text style={styles.text}>Withdraw Money</Text>
      <AntDesign name='staro' size={24} color='white' />
    </View>
  );
};

export default HeaderWallet;

const styles = StyleSheet.create({
  content: {
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
  },
});
