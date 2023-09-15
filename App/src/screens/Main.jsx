import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import Stories from "../Components/Stories";
import Body from "../Components/Body";
import Navigator from "../Components/Navigator";

const Main = () => {
  return (
    <View>
      <Header />
      <Stories />
      <Body />
      <Navigator/>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
