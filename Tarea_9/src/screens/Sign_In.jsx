import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Images } from '../constants/Images';
import Form_Sign_In from '../components/Form_Sign_In';

const Sign_In = ({ handleShowLogin }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={(e) => handleShowLogin(e)}>
          <AntDesign
            name='arrowleft'
            size={24}
            color='black'
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>Welcome{'\n'}back!</Text>
        <Image source={Images.dotsSignIn} />
      </View>
      <Form_Sign_In />
    </View>
  );
};

export default Sign_In;

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
