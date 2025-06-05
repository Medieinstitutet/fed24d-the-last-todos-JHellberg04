import "./App.css";
import { TodoList } from "./components/TodoList";
import { initialTodos } from "./data/initialTodos";
import type { ITodo } from "./types/todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos)

  const toggleDone = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? {...todo, isDone: !todo.isDone } : todo
      )
    )
  }
  return <>
  <TodoList todos={todos} onToggleDone={toggleDone} />
  </>;
}

export default App;

