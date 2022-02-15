import { useTodos } from "../../hooks/useTodos";
import { TodoCard } from "../TodoCard";

export const Todos = ({ onDelete }) => {
  // To use useContext hook in React.js
  // presentational component
  const { todos } = useTodos();

  // stateful
  return (
    <section className="container d-flex flex-wrap justify-content-center">
      {todos.map((todo) => (
        <TodoCard key={todo.id} {...todo} onDelete={onDelete} />
      ))}
    </section>
  );
};
