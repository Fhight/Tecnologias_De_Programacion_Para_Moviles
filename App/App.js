import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Send from './screens/Send';
import Balance from './screens/Balance';
import Home from './screens/Home';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppContextProvider from './components/context/AppContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <AppContextProvider>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
              name='Home'
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Send'
              component={Send}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Balance'
              component={Balance}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </AppContextProvider>
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
