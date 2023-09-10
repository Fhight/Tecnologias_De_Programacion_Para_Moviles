import { StyleSheet, Text, View } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import React from 'react';
import { ICON_SELECTED, ICON_DEFAULT } from '../../Constants/Colors';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <Entypo name='home' size={25} color={ICON_SELECTED} />
      <Entypo name='message' size={25} color={ICON_DEFAULT} />
      <Entypo name='calendar' size={25} color={ICON_DEFAULT} />
      <View style={styles.iconContainer}>
        <AntDesign name='user' size={25} color={ICON_DEFAULT} />
      </View>
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f7f8fa',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: '#92b5f5',
    borderRadius: 10,
  },
});
