import type { ITodo } from "../types/todo";

interface IProps {
  todo: ITodo;
  onToggleDone: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggleDone, onDelete }: IProps) {
  return (
    <li className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm">
      <span
        className={`flex-1 text-lg px-2 ${
          todo.isDone ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {todo.title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => onToggleDone(todo.id)}
          className={ !todo.isDone ? "p-2 bg-green-500 text-white rounded-md hover:bg-green-600 cursor-pointer transition" : "p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 cursor-pointer transition"}
        >
          <img
            src={
              !todo.isDone
                ? "/assets/icons/icon-complete.svg"
                : "/assets/icons/icon-undo.svg"
            }
            alt={
              !todo.isDone ? "markera som klar" : "avmarkera som klar"
            }
            aria-label={
              !todo.isDone
                ? "markera sysslan som klar"
                : "avmarkera sysslan som klar"
            }
          />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer transition"
        >
          <img
            src="/assets/icons/icon-delete.svg"
            alt="Radera"
            aria-label="Radera syssla"
          />
        </button>
      </div>
    </li>
  );
}