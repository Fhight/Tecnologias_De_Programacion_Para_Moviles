import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

function ToDo({ name }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#c7f9cc',
        borderRadius: 5,
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 20 }}>{name}</Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
        }}
      >
        <CustomButton text='Edit' />
        <CustomButton text='Delete' />
      </View>
    </View>
  );
}

export default ToDo;
