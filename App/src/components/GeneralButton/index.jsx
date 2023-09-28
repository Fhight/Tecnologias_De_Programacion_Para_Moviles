import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const GeneralButton = ({ text, color, backgroundColor }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]}>
      <Text style={{ color, fontSize: 20, fontWeight: "bold" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default GeneralButton;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    borderRadius: 50,
    padding: 20,
    alignItems: "center",
    marginTop: 20,
  },
});
