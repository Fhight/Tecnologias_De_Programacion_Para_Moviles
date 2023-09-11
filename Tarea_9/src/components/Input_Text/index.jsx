import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';

const Input_Text = ({text, isPassword = false}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={text}
      placeholderTextColor={Colors.light_gray}
      secureTextEntry={isPassword}
    />
  );
};

export default Input_Text;

const styles = StyleSheet.create({
  input: {
    paddingBottom: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light_gray,
  },
});
