import React, { useState } from "react";

// 1. Create Context - allows for the boundary / access to the components
export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todoItems")) || []
  );

  const providerValue = { todos, setTodos };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};
