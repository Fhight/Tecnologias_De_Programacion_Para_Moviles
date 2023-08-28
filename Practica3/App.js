import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import Login from "./src/screens/login";

export default function App() {
  const { height, width } = Dimensions.get("screen"); //Obtener datos del dispositivo actual

  return (
    <View style={styles.container}>
      {/* <Image
        source={{
          url: './assets/adaptive-icon.png',
          width: 100,
          height: 100,
        }}
        style={styles.image}
      />
      <TextInput style={styles.input} placeholder="Name" placeholderTextColor='red'/> */}
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // image: {
  //   width: 80,
  //   height: 80,
  // },
  // input: {
  //   borderWidth: 1,
  //   width: 100,
  //   borderRadius: 5,
  //   padding: 5,
  //   color: 'blue'
  // },
});
