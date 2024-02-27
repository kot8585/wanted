import AddTodo from "./components/List/AddTodo";
import TodoList from "./components/List/TodoList";

export default function App() {
  return (
    <>
      <header className="text-3xl text-center font-Rosarivo">TO-DO LIST</header>
      <AddTodo />
      <TodoList />
    </>
  );
}
