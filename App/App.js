import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./src/components/CustomButton";
import ToDo from "./src/components/ToDo";
import { useState } from "react";
import { useToDos } from "./src/hooks/useToDos";

export default function App() {
  const {
    input,
    setInput,
    todos,
    setTodos,
    edit,
    setEdit,
    handleAddTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleEdit,
    handleEditTodo,
  } = useToDos();

  return (
    <View style={styles.container}>
      <View>
        <View style={{ backgroundColor: "#38a3a5", borderRadius: 10 }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            }}
          >
            To Do List
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20, gap: 20 }}>
          <TextInput
            style={{
              borderWidth: 1,
              paddingHorizontal: 10,
              fontSize: 20,
              flex: 1,
              borderRadius: 5,
              height: 40,
              borderColor: "#219ebc",
              backgroundColor: "#57cc99",
            }}
            placeholder="Enter your task..."
            value={input}
            onChangeText={(value) => setInput(value)}
          />
          {edit.isEdit ? (
            <CustomButton text="Edit task" onPress={handleEditTodo} />
          ) : (
            <CustomButton text="Add task" onPress={handleAddTodo} />
          )}
        </View>
      </View>
      <FlatList
        data={todos}
        renderItem={({
          item: { id, name, completed, createAt, updatedAt },
        }) => (
          <ToDo
            name={name}
            id={id}
            createAt={createAt}
            updatedAt={updatedAt}
            isCompleted={completed}
            isEdit={handleEdit}
            handleDelete={handleDeleteTodo}
            handleComplete={handleCompleteTodo}
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22577a",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});
