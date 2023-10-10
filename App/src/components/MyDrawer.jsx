import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Orders from '../screens/Orders';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WishList from '../screens/WishList';
import Profile from '../screens/Profile';
import Bottom from './Bottom';
import SideMenus from './SideMenus';
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TURQUESA } from '../data/COLORS';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SideMenus {...props} />}
      screenOptions={{
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ borderWidth: 1, marginLeft: 10, borderRadius: 10 }}
          >
            <MaterialCommunityIcons
              name='dots-square'
              size={40}
              color={TURQUESA}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{ borderWidth: 1, marginRight: 10, borderRadius: 10, padding:5 }}
          >
            <Fontisto name='bell-alt' size={30} color={TURQUESA} />
          </TouchableOpacity>
        ),
      }}
    >
      {/* <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Orders' component={Orders} /> */}
      <Drawer.Screen name='Bottom' component={Bottom} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({});
