import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Profile = ({ img, text = "" }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Image source={img} style={styles.img} />
      </TouchableOpacity>
      {text !== "" && <Text style={styles.name}>{text}</Text>}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 30,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name:{
    textAlign: "center",
  }
});
