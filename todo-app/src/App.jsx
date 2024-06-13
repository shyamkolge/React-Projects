import { useState } from "react";
import "./App.css";
import { Header, TodoHero, TodoInput, TodoList } from "./components";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Some task", // string
      id: self.crypto.randomUUID(), // string
      is_completed: false, // boolean
    },
  ]);

  return (
    <section className=" w-screen h-screen bg-[#0d0d0d] font-sans text-white">
      <Header />
      <TodoHero all_todos={0} completed_todos={0} />
      <TodoInput />
      <TodoList todos={todos} />
    </section>
  );
}

export default App;
