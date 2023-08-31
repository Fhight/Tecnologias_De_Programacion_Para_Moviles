import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import Login from "./src/screens/Login";
import Person from "./src/components/Person";

export default function App() {
  const DATA = [
    {
      id: 1,
      nombre: "Pablo",
      apellido: "Juarez",
    },
    {
      id: 2,
      nombre: "Pablo2",
      apellido: "Juarez",
    },
    {
      id: 3,
      nombre: "Pablo3",
      apellido: "Juarez",
    },
    {
      id: 4,
      nombre: "Pablo4",
      apellido: "Juarez",
    },
  ];

  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <StatusBar style="auto" backgroundColor="#fff" />
      {/* {DATA.map(user =>{
        <ScrollView key={user.id} style={{borderWidth: 1, borderColor: 'red'}}>
          <Text>{user.nombre}</Text>
          <Text>{user.apellido}</Text>
        </ScrollView>
      })} */}
      <FlatList
        data={DATA}
        renderItem={({ item: { nombre, apellido }, index }) => (
          <Person nombre={nombre} apellido={apellido} index={index} />
        )}
        ItemSeparatorComponent={<Text>Separador</Text>}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 20
  },
});
