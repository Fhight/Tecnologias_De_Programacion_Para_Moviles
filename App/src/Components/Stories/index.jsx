import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "../Profile";
import { IMAGES } from "../../Constants/Images";

const Stories = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Stories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
        <Profile img={IMAGES.perfil} text='name'/>
        <Profile img={IMAGES.perfil} text='name'/>
        <Profile img={IMAGES.perfil} text='name'/>
        <Profile img={IMAGES.perfil} text='name'/>
        <Profile img={IMAGES.perfil} text='name'/>
        <Profile img={IMAGES.perfil} text='name'/>
        <Profile img={IMAGES.perfil} text='name'/>
        <Profile img={IMAGES.perfil} text='name'/>
        <Profile img={IMAGES.perfil} text='name'/>
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
    title:{
        fontWeight: "bold",
        color: "gray",
        marginBottom: 20,
    },
    main:{
        marginTop: 10,
    }
});
