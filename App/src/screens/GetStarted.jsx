import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TURQUESA, WHITE } from "../data/COLORS";
import { GET_STARTED } from "../data/IMAGES";
import { useNavigation } from "@react-navigation/native";

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: WHITE }]}>
      <Image source={GET_STARTED} resizeMode="cover" />
      <Text style={styles.title}>Shopping with best e-commerce store</Text>
      <Text style={styles.subtitle}>
        Find best shooping experience with us by your favorite daily needs
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: TURQUESA }]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 35,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "300",
    textAlign: "center",
    marginHorizontal: 50,
    marginTop: 10,
  },
  button: {
    width: "90%",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
