import { View, Text } from "react-native";
import React from "react";
import LoginHeader from "../components/Login/LoginHeader";
import LoginContent from "../components/Login/LoginContent";

const Login = () => {
  return (
    <View>
      <LoginHeader/>
      <LoginContent/>
    </View>
  );
};

export default Login;
