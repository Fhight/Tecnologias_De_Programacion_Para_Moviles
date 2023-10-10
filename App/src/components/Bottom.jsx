import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WishList from '../screens/WishList';
import Home from '../screens/Home';
import Orders from '../screens/Orders';
import Profile from '../screens/Profile';
import { TURQUESA } from '../data/COLORS';
import MyDrawer from './MyDrawer';

const Bottom = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name='compass-sharp'
              color={focused ? TURQUESA : 'gray'}
              size={25}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 18,
            color: 'gray',
          },
        }}
      />
      <Tab.Screen
        name='Wishlist'
        component={WishList}
        options={{
          headerShown: false,
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <AntDesign name='heart' color={TURQUESA} size={25} />
            ) : (
              <AntDesign name='hearto' color='gray' size={25} />
            ),
          tabBarLabelStyle: {
            fontSize: 18,
            color: 'gray',
          },
        }}
      />
      <Tab.Screen
        name='Cart'
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5 name='shopping-cart' color={TURQUESA} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name='Orders'
        component={Orders}
        options={{
          headerShown: false,
          tabBarLabel: 'Orders',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name='document-text-outline'
              size={25}
              color={focused ? TURQUESA : 'gray'}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 18,
            color: 'gray',
          },
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name='user'
              size={25}
              color={focused ? TURQUESA : 'gray'}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 18,
            color: 'gray',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom;

const styles = StyleSheet.create({});
