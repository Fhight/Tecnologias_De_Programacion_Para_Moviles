import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import React from 'react';

const Icons = ({ name, isSelected = false }) => {
  const backgroundColorIcon = isSelected ? '#2e2e2e' : '';
  const colorText = isSelected ? 'white' : 'gray';

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgroundColorIcon }]}
    >
      <FontAwesome name={name} size={24} color={colorText} />
    </TouchableOpacity>
  );
};

export default Icons;

const styles = StyleSheet.create({
  container: { padding: 12, borderRadius: 10 },
});
