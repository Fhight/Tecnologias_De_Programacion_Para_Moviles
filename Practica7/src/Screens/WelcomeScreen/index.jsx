import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Card from "../../Components/Card";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="notifications-outline" size={40} color="#3764c2" />
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://shmector.com/_ph/6/907397949.png",
          }}
        />
      </View>
      <Text style={styles.titleText}>
        <Text style={{ color: "#c1c0c4" }}>Hello,</Text>
        <Text style={{ color: "#2b3941" }}>Chris 👋</Text>
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 20,
  },
});
