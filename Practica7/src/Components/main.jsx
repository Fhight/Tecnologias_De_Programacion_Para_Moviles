import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import WebText from "./WebText";
import AndroidText from "./AndroidText";

const Main = () => {
  const CustomText = Platform.select({
    android: AndroidText,
    web: WebText,
  });
  return (
    <View>
      {/* <WebText />
      <AndroidText /> */}
      <CustomText />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
