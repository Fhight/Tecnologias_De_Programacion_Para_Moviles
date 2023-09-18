import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Table from "../components/Table";
import CustomButton from "../components/CustomButton";

const Main = () => {

  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleAddTodo = () => {
    if (inputValue === "") return;
    setTodo(...todo, [
      {
        id: new Date().toISOString(),
        name: inputValue,
        isCompleted: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={styles.title}>My Todos</Text>
      <View style={{ flexDirection: "row", marginTop: 20, gap: 20 }}>
        <TextInput
          placeholder="Add Todo"
          style={styles.input}
          value={inputValue}
          onChangeText={(e) => setInputValue(e)}
        />
        <CustomButton text="Add task" light onPress={handleAddTodo} />
      </View>
      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { name } }) => {
          return <Table name={name} />;
        }}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 20,
    flex: 1,
    borderRadius: 5,
    height: 40,
    borderColor: "white",
  },
});
