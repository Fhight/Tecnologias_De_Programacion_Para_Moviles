import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { USER } from '../data/Images';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Contact = ({ data }) => {
  const { name, number } = data.item;
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      onPress={() => navigate.navigate('Send')}
    >
      <Image
        source={USER}
        style={{ height: 50, width: 50, borderRadius: 50 }}
      />
      <View style={{ justifyContent: 'flex-start', flex: 1 }}>
        <Text style={{ color: 'white', fontWeight: '400', fontSize: 18 }}>
          {name}
        </Text>
        <Text style={{ color: 'gray', fontWeight: '400' }}>{number}</Text>
      </View>
      <SimpleLineIcons name='options-vertical' size={24} color='white' />
    </TouchableOpacity>
  );
};

export default Contact;

const styles = StyleSheet.create({});
