import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Card from "./components/Card";
import AppContextProvider from "./components/context/AppContext";

export default function App() {
  const person = {
    id: 1,
    name: "Pablo",
    lastname: "Juarez",
    age: 22,
    location: "Morelia",
    country: "Mexico",
  };

  return (
    <AppContextProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Card person={person} />
      </View>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
