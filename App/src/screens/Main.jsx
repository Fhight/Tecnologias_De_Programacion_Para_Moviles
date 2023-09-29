import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LOGO } from '../data/images';
import GeneralButton from '../components/GeneralButton';
import { Header } from '@react-navigation/stack';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Play and Win!</Text>
      <View style={{ marginVertical: 20, paddingHorizontal: 60 }}>
        <Text style={styles.label}>
          Game for anyone who likes to try luck at guessing number
        </Text>
      </View>
      <Image source={LOGO} style={styles.image} />
      <TouchableOpacity
        style={{ width: '100%', alignItems: 'center' }}
        onPress={() => navigation.navigate('Ticket')}
      >
        <GeneralButton
          text='Get Started'
          color='#fff'
          backgroundColor='#F7793C'
        />
      </TouchableOpacity>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#016F48',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '200',
    textAlign: 'center',
  },
  image: {
    width: 350,
    height: 350,
    objectFit: 'fill',
    marginTop: 20,
  },
});
