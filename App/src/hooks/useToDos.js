import { useState } from "react";
import { handleShowError } from "../helpers/showError";

export const useToDos = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState([{ id: "", isEdit: false }]);

  const handleAddTodo = () => {
    if (input === "")
      return handleShowError("Debes ingresar un nombre a la tarea");

    const existingTodo = todos.some(
      (todo) => todo.name.toLowerCase() === input.toLowerCase()
    );

    if (existingTodo) {
      return handleShowError("Ya existe una tarea con ese nombre");
    }

    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        name: input,
        completed: false,
        createAt: `${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()}`,
        updatedAt: "",
      },
    ]);
    setInput("");
  };

  const handleDeleteTodo = (id) => {
    // const filteredArray = todos.filter((todo) => todo.id !== id);
    setTodos(() => todos.filter((todo) => todo.id !== id));
  };

  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleEdit = (id) => {
    setEdit({ isEdit: !edit.isEdit, id: id });
    if (!edit.isEdit) {
      setInput(todos.find((todo) => todo.id === id).name);
    } else {
      setInput("");
    }
  };

  const handleEditTodo = () => {
    if (input === "")
      return handleShowError("Debes ingresar un nombre a la tarea");

    const existingTodo = todos.some(
      (todo) => todo.name.toLowerCase() === input.toLowerCase()
    );

    if (existingTodo) {
      return handleShowError("Ya existe una tarea con ese nombre");
    }

    const updatedTodos = todos.map((todo) => {
      if (todo.id === edit.id) {
        return {
          ...todo,
          name: input,
          updatedAt: `${new Date().getDate()}/${
            new Date().getMonth() + 1
          }/${new Date().getFullYear()}`,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
    setInput("");
    setEdit({ isEdit: !edit.isEdit, id: "" });
  };

  return {
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
  };
};
