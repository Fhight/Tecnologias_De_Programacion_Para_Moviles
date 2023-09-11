import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Main from './src/screens/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
});
