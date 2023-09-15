import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Profile from "../Profile";
import { IMAGES } from "../../Constants/Images";

const Chat = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Profile img={IMAGES.perfil} />
      <View>
        <View style={styles.titulo}>
          <Text style={styles.name}>Pablo</Text>
          <Text>12:50</Text>
        </View>
        <Text>Hey, how are you?</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
  },
  titulo:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250,
  }
});
