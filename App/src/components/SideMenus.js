import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const SideMenus = () => {
  const { handleLogOut: onLogOut } = useAuthContext();
  const navigation = useNavigation();

  const handleLogOut = () => {
    try {
      onLogOut();
      navigation.navigate('GetStarted');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView style={{ marginTop: 20 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={{ paddingVertical: 10, marginLeft: 10 }}
      >
        <Text style={{ fontSize: 20 }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Wishlist');
        }}
        style={{ paddingVertical: 10, marginLeft: 10 }}
      >
        <Text style={{ fontSize: 20 }}>Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Orders');
        }}
        style={{ paddingVertical: 10, marginLeft: 10 }}
      >
        <Text style={{ fontSize: 20 }}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleLogOut()}
        style={{ paddingVertical: 10, marginLeft: 10 }}
      >
        <Text style={{ fontSize: 20 }}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SideMenus;

const styles = StyleSheet.create({});
