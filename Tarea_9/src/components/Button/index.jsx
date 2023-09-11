import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Button = ({
  text,
  background = '',
  color,
  secondText = '',
  secondColor = '',
  width = '80%',
  handleShowLogin = () => {},
  handleShowRegister = () => {},
}) => {
  const backgroundColor = background !== '' ? background : 'white';
  const borderColor = background !== '' ? background : 'lightgray';
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor, borderWidth: 1, borderColor, width },
      ]}
      onPress={(e) => [handleShowLogin(e), handleShowRegister(e)]}
    >
      <Text style={[styles.text, { color }]}>
        {text}
        {secondText !== '' && (
          <Text style={{ color: secondColor }}> {secondText}</Text>
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 17,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
});
