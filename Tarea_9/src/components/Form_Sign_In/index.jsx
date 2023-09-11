import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Button from '../Button';
import { Colors } from '../../constants/Colors';
import Input_Text from '../Input_Text';
import { Images } from '../../constants/Images';

const Form_Sign_In = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <View>
        <Text style={styles.label}>Email</Text>
        <Input_Text text='name@example.com' />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <Input_Text text='Enter your password' isPassword={true} />
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Remember me</Text>
        <Image source={Images.slider1} />
      </View>
      <Button
        text='Sign In!'
        color='white'
        background={Colors.orange}
        width='100%'
      />
    </KeyboardAvoidingView>
  );
};

export default Form_Sign_In;

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
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
