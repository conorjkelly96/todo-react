import { useContext } from "react";
import { AppContext } from "../context/AppContext";

// custom context hook
export const useTodos = () => {
  return useContext(AppContext);
};
