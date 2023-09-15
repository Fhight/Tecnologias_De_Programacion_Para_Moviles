import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Options from "../Options";
import Chat from "../Chat";

const Body = () => {
  return (
    <View>
      <Options />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </ScrollView>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
    scroll:{
        marginTop: 10,
        height: 400,
    }
});
