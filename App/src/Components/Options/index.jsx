import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Options = () => {
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.titulo}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.titulo}>Group</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.titulo}>Chats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 10,    
  },
  secondContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "lightgray",
    borderRadius: 20,
    padding: 2,
  },
  option: {
    borderWidth: 1,
    borderRadius: 20,
    width: 70,
    alignItems: "center",
    backgroundColor: "white",
    padding: 7,
  },
  titulo:{
    fontWeight: "bold",
  }
});
