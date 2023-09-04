import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  StatusBar as ReactStatus,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import Main from "./src/Components/main";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>¡Hola Mundo!</Text>
      <AntDesign name="eye" size={54} color="black" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent:'center',
    // alignItems:'center'
    // paddingTop: ReactStatus.currentHeight,
    paddingTop: Constants.statusBarHeight,
    // paddingTop: Platform.OS === "android" ? ReactStatus.currentHeight : 0,
  },
});
