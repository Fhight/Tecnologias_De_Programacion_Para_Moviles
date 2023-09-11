import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import { useState } from "react";

export default function App() {
  const [use, setUse] = useState({
    name: "Pablo",
    age: 22,
  });

  const [cont, setCont] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleCont = (e) => {
    e.preventDefault();
    setCont(cont + 1);
  };

  const handleInputValue = (e) => {
    setInputValue(e);
  };

  console.log(use);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{JSON.stringify(use)}</Text>
      <Text>{cont}</Text>
      <TouchableOpacity
        style={{ borderWidth: 1 }}
        onPress={(e) => handleCont(e)}
      >
        <Text>Sumar 1</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 40 }}>{inputValue}</Text>
      <TextInput
        style={{ fontSize: 20, borderWidth: 1, paddingHorizontal: 10 }}
        onChangeText={(e) => handleInputValue(e)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
  },
});
