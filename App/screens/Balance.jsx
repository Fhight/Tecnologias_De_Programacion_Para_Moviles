import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GRAFICA, USER } from "../data/Images";

const Balance = () => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            borderRadius: 20,
          }}
        >
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            borderRadius: 20,
          }}
        >
          <MaterialCommunityIcons name="dots-grid" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: "gray",
          fontSize: 25,
          alignSelf: "center",
          marginTop: 30,
        }}
      >
        Total balance
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 60,
          alignSelf: "center",
          letterSpacing: -3,
        }}
      >
        $32,751.75
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 50,
        }}
      >
        <Text style={{ color: "gray", fontSize: 20 }}>Day</Text>
        <Text style={{ color: "gray", fontSize: 20 }}>Week</Text>
        <Text style={{ color: "yellow", fontSize: 20 }}>Month</Text>
        <Text style={{ color: "gray", fontSize: 20 }}>Year</Text>
      </View>
      <Image
        source={GRAFICA}
        style={{ height: 220, width: "100%", marginTop: 20 }}
        resizeMode="cover"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ color: "gray", fontSize: 20 }}>Jan</Text>
        <Text style={{ color: "gray", fontSize: 20 }}>Feb</Text>
        <Text style={{ color: "gray", fontSize: 20 }}>Mar</Text>
        <Text style={{ color: "gray", fontSize: 20 }}>Apr</Text>
        <Text style={{ color: "white", fontSize: 20 }}>May</Text>
        <Text style={{ color: "gray", fontSize: 20 }}>Jul</Text>
      </View>

      <View style={{ backgroundColor: "#f6f60895", padding: 10 }}>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "lightgray",
            marginHorizontal: 170,
          }}
        />
        <View>
          <Text>Transactions</Text>
          <Text>See all</Text>
        </View>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
