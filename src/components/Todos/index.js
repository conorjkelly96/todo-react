import { useContext } from "react";
import { AppContext } from "../../App";
import { TodoCard } from "../TodoCard";

export const Todos = ({ onDelete }) => {
  // To use useContext hook in React.js
  const { todos } = useContext(AppContext);

  return (
    <section className="container d-flex flex-wrap justify-content-center">
      {todos.map((todo) => (
        <TodoCard key={todo.id} {...todo} onDelete={onDelete} />
      ))}
    </section>
  );
};
