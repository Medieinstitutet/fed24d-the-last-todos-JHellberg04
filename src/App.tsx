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
    <div className="max-w-2xl  mx-auto p-4 bg-white rounded-2xl shadow-lg">
      <h1 className="text-5xl uppercase font-bold text-center text-blue-500 mb-6 pb-4">Att göra lista</h1>
      <AddTodo onAdd={addTodo} />
      <div className="mt-8">
      <h2 className="text-3xl uppercase font-semibold text-gray-800 mb-4">Att göra</h2>
      <label className="block mb-4">
      <span className="text-gray-700">Sortera:</span>
      <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value as "newest" | "abc")}
      className="ml-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
      >
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
      </div>
      <div className="mt-8">
      <h2 className="text-3xl uppercase font-semibold text-gray-800 mb-4">Avklarat</h2>
      <TodoList
      todos={completedTodos}
      onToggleDone={toggleDone}
      onDelete={deleteTodo}
      />
      </div>
    </div>
  );
}

export default App;

