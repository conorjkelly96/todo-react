import React, { useState } from "react";

import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { Todos } from "./components/Todos";

// 1. Create Context - allows for the boundary / access to the components
const AppContext = React.createContext();

export const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoItems")) || []
  );

  const onDelete = (event) => {
    const todosFromLS = JSON.parse(localStorage.getItem("todoItems")) || [];

    const newTodos = todosFromLS.filter((todo) => {
      return todo.id !== event.currentTarget.id;
    });

    setTodos(newTodos);

    localStorage.setItem("todoItems", JSON.stringify(newTodos));
  };

  return (
    <div>
      <AppContext.Provider value={todos}>
        <Header title="My ToDo Items" todoCount={todos.length} />
        <TodoForm setTodos={setTodos} />
        <Todos
          todos={JSON.parse(localStorage.getItem("todoItems")) || []}
          onDelete={onDelete}
        />
      </AppContext.Provider>
    </div>
  );
};
