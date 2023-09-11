import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Input_Text from '../Input_Text';
import { Colors } from '../../constants/Colors';
import Button from '../Button';

const Form_Sign_Up = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <View>
        <Text style={styles.label}>Full name</Text>
        <Input_Text text='Enter your name' />
      </View>
      <View>
        <Text style={styles.label}>Email address</Text>
        <Input_Text text='name@example.com'  />
      </View>
      <View>
        <Text style={styles.label}>Create password</Text>
        <Input_Text text='Enter your password' isPassword={true} />
      </View>
      <Button
        text='Sign Up!'
        color='white'
        background={Colors.orange}
        width='100%'
      />
    </KeyboardAvoidingView>
  );
};

export default Form_Sign_Up;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 100,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  label: {
    color: Colors.gray,
    fontSize: 14,
    fontWeight: '500',
  },
});
