import "./App.css";
import { TodoList } from "./components/TodoList";
import { initialTodos } from "./data/initialTodos";
import type { ITodo } from "./types/todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);

  const toggleDone = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? {...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  const activeTodos = todos.filter(todo => !todo.isDone);
  const completedTodos = todos.filter(todo => todo.isDone);

  return <>
  <h2>Att göra</h2>
    <TodoList todos={activeTodos} onToggleDone={toggleDone} />
  <h2>Avklarat</h2>
    <TodoList todos={completedTodos} onToggleDone={toggleDone} />
  </>;
}

export default App;

