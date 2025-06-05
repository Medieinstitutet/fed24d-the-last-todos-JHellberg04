import { useState } from "react"
import type { ITodo } from "../types/todo"

interface Props {
  onAdd: (todo: ITodo) => void
}

export function AddTodo({ onAdd }: Props) {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return

    const newTodo: ITodo = {
      id: Math.floor(Math.random() * 1000000),
      title: input.trim(),
      isDone: false
    }

    onAdd(newTodo)
    setInput("")
  }

  return(
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ny syssla..." />
      <button type="submit">Lägg till</button>
    </form>
  )
}