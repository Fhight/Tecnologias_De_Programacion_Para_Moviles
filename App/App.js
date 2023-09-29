import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Main from './src/screens/Main';
import Ticket from './src/screens/Ticket';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const BottomTabNavigator = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <Stack.Navigator
          initialRouteName='Main'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='Main' component={Main} />
          <Stack.Screen name='Ticket' component={Ticket} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
