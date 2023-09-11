import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Images } from '../constants/Images';
import { AntDesign } from '@expo/vector-icons';
import Form_Sign_Up from '../components/Form_Sign_Up';

const Sign_Up = ({ handleShowRegister }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={(e) => handleShowRegister(e)}>
          <AntDesign
            name='arrowleft'
            size={24}
            color='black'
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>Create new{'\n'}account</Text>
        <Image source={Images.dotsSignUp} />
      </View>
      <Form_Sign_Up />
    </View>
  );
};

export default Sign_Up;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 40,
    fontWeight: '500',
    marginTop: 40,
    marginBottom: 10,
  },
  icon: {
    textAlign: 'left',
  },
});
