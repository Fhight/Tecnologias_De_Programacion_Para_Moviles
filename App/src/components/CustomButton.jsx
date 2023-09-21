import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

function CustomButton({ text, onPress, color }) {
  return (
    <TouchableOpacity
      style={{
        borderRadious: 5,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#80ed99',
        borderRadius: 5,
        padding: 5,
        maxHeight: 30,
      }}
      onPress={onPress}
    >
      {/* <Text>{text}</Text> */}
      <FontAwesome5 name={text} size={20} color={color} />
    </TouchableOpacity>
  );
}

export default CustomButton;
