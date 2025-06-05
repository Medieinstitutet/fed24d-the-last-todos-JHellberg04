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
        <img src={!todo.isDone ? "/assets/icons/icon-complete.svg" : "/assets/icons/icon-undo.svg" } alt={ !todo.isDone ? "markera som klar" : "avmarkera som klar"} aria-label={ !todo.isDone ? "markera sysslan som klar" : "avmarkera sysslan som klar"} />
      </button>
      <button><img src="/assets/icons/icon-delete.svg" alt="Radera" aria-label="Radera syssla" /></button>
    </li>
  )
} 