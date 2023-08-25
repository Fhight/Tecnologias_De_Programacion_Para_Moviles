import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import StyledText from "./src/components/StyledText";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Que rollo! Que rollo!</Text> */}
      <StatusBar style="auto" />
      <StyledText text="hola" />
      <StyledText text="hola" />
      <TouchableOpacity style={styles.button} onPress={() => console.log('hola')}>
        <Text style={styles.text}>Presionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 40,
  },
  button:{
    borderWidth: 3,
    padding: 2,
  }
});
