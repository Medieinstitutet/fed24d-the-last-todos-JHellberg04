import "./App.css";
import { TodoList } from "./components/TodoList";
import { initialTodos } from "./data/initialTodos";
import type { ITodo } from "./types/todo";
import { useState, useEffect } from "react";
import { AddTodo } from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState<ITodo[]>(() => {
    const stored = localStorage.getItem("todos")
    console.log("Retrieved from localStorage:", stored);
    return stored ? JSON.parse(stored) : initialTodos
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log("Saving to localStorage:", todos);
  }, [todos])

  const addTodo = (newTodo: ITodo) => {
    setTodos(prev => [...prev, newTodo])
  }

  const [sortOption, setSortOption] = useState<"newest" | "oldest" | "abc" >("oldest") 

  const toggleDone = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const sortedTodos = [...todos]

  if (sortOption === "abc") {
    sortedTodos.sort((a, b) => a.title.localeCompare(b.title))
  } else if (sortOption === "newest") {
    sortedTodos.reverse()
  } 

  const activeTodos = sortedTodos.filter((todo) => !todo.isDone);
  const completedTodos = sortedTodos.filter((todo) => todo.isDone);

  return (
    <>
      <h1>Att göra lista</h1>
      <AddTodo onAdd={addTodo} />
      <h2>Att göra</h2>
      <label>
        Sortera:
        <select value={sortOption} onChange={e => setSortOption(e.target.value as "newest" | "abc")}>
          <option value="oldest">Äldst först</option>
          <option value="newest">Nyast först</option>
          <option value="abc">A-Ö</option>
        </select>
      </label>
      <TodoList
        todos={activeTodos}
        onToggleDone={toggleDone}
        onDelete={deleteTodo}
      />
      <h2>Avklarat</h2>
      <TodoList
        todos={completedTodos}
        onToggleDone={toggleDone}
        onDelete={deleteTodo}
      />
    </>
  );
}

export default App;

