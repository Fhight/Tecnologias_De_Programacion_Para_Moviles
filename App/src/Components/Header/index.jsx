import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fontisto, FontAwesome } from "@expo/vector-icons";
import Profile from "../Profile";
import { IMAGES } from "../../Constants/Images";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Profile img={IMAGES.perfil} />
        <Text style={styles.welcome}>Hey Alireza</Text>
      </View>
      <View style={styles.secondContainer}>
        <Fontisto name="zoom" size={24} color="black" />
        <FontAwesome name="plus-square-o" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  welcome: {
    fontWeight: "bold",
  }
});
