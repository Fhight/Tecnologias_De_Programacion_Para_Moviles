import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardIconContainer}>
        <AntDesign name="hdd" size={24} color="white" />
      </View>
      <Text style={styles.cardText}>Start training</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    height: 170,
    width: 170,
    backgroundColor: "#c6ceff",
    borderRadius: 40,
    paddingHorizontal: 20,
    justifyContent: "center",
    gap: 50,
  },
  cardIconContainer: {
    backgroundColor: "#2362df",
    width: 35,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  cardText: {
    fontSize: 22,
    color: "#48525e",
  },
});
