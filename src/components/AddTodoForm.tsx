import { useState } from "react"
import type { ITodo } from "../types/todo"

interface Props {
  onAdd: (todo: ITodo) => void
}

export function AddTodo({ onAdd }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo: ITodo = {
      id: Math.floor(Math.random() * 1000000),
      title: input.trim(),
      isDone: false,
    };

    onAdd(newTodo);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 mb-6 max-w-sm mx-auto"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ny syssla..."
        className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Lägg till
      </button>
    </form>
  );
}