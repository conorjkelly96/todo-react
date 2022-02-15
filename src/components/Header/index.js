import { useTodos } from "../../hooks/useTodos";
import "./Header.css";

export const Header = ({ title }) => {
  const { todos } = useTodos();

  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">{title}</h1>
      <p className="lead">
        {todos.length
          ? `You have a total of ${todos.length} things to do`
          : "You have no to do items"}
      </p>
    </div>
  );
};
