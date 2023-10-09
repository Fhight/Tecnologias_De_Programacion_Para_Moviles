import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "./src/context/authContext";
import Account from "./src/screens/Account";
import { useAuthContext } from "./src/hooks/useAuthContext";
import GetStarted from "./src/screens/GetStarted";
import Register from "./src/screens/Register";
import { WHITE } from "./src/data/COLORS";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="GetStarted">
            {/* {Layout()} */}
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                title: "",
              }}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Account" component={Account} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </AuthContextProvider>
  );
}

const Layout = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Stack.Screen name="Login" component={Login} />;
  }

  return (
    <>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Account" component={Account} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Constants.statusBarHeight,
  },
});
