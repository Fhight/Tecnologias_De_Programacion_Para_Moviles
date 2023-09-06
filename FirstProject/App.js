import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Withdraw from './src/components/Withdraw';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Withdraw />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D76741',
    paddingTop: Constants.statusBarHeight,
  },
});
