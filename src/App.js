import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { Todos } from "./components/Todos";
import { AppProvider } from "./context/AppContext";

export const App = () => {
  return (
    <AppProvider>
      <div>
        {/* children */}
        <Header title="My ToDo Items" />
        <TodoForm />
        <Todos />
      </div>
    </AppProvider>
  );
};
