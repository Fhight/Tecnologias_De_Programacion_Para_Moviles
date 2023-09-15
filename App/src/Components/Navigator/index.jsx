import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Navigator = () => {
  return (
    <View style={styles.main}>
      <View style={styles.linea}></View>
      <View style={styles.container}>
        <View>
          <Entypo name="home" size={30} color="black" />
        </View>
        <View>
          <AntDesign name="bells" size={30} color="black" />
        </View>
        <View>
          <AntDesign name="plussquare" size={30} color="black" />
        </View>
        <View>
          <Feather name="phone" size={30} color="black" />
        </View>
        <View>
          <Ionicons name="people-sharp" size={30} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  linea: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  main: {
    marginTop: 10,
  },
});
