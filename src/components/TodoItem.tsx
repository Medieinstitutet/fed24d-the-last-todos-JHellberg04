import type { ITodo } from "../types/todo";

interface IProps {
  todo: ITodo;
  onToggleDone: (id: number) => void;
}

export default function TodoItem({ todo, onToggleDone }: IProps) {
  return (
    <li>
      <span className="todo-title">{todo.title}</span>
      <button onClick={() => onToggleDone(todo.id)}>
        <img src={!todo.isDone ? "/assets/icons/icon-complete.svg" : "/assets/icons/icon-undo.svg" } />
      </button>
      <button><img src="/assets/icons/icon-delete.svg" /></button>
    </li>
  )
} 