import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../data/IMAGES";
import { ORANGE, TURQUESA, WHITE } from "../data/COLORS";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin: onLogin } = useAuthContext();

  const handleLogin = () => {
    try {
      const loginValue = onLogin(username, password);
      if (loginValue) {
        navigation.navigate("Home");
        setPassword("");
        setUsername("");
      } else {
        Alert.alert("Error", "Credenciales invalidas", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: WHITE }]}>
      <View style={styles.containerImage}>
        <Image source={LOGIN} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome!</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            value={username}
            onChangeText={(e) => setUsername(e)}
            placeholder="Enter your email"
            style={styles.input}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            value={password}
            onChangeText={(e) => setPassword(e)}
            placeholder="Enter your password"
            style={styles.input}
            secureTextEntry
          />
        </View>
        <TouchableOpacity>
          <Text
            style={{
              alignSelf: "flex-end",
              marginTop: 10,
              color: TURQUESA,
              fontWeight: "500",
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: TURQUESA,
            marginTop: 40,
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "600", fontSize: 20 }}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                color: TURQUESA,
                fontWeight: "500",
                textDecorationLine: "underline",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <TouchableOpacity
        style={{
          backgroundColor: "green",
          paddingVertical: 20,
        }}
        onPress={() => handleLogin()}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 20,
          }}
        >
          Iniciar sesion
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    width: "100%",
    height: 220,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    padding: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: "gray",
  },
});
