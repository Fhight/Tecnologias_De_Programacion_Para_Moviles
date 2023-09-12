import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icons from './fragments/Icons';

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Icons name='home' isSelected={true} />
      <Icons name='shopping-bag' />
      <Icons name='bell-o' />
      <Icons name='user-o' />
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
