import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomButton from "../CustomButton";

const Table = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>;
      <View>
        <CustomButton text="Edit" light />
        <CustomButton text="Delete" light />
      </View>
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#2d785f",
    color: "white",
  },
});
