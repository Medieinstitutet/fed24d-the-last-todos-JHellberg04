import type { ITodo } from "../types/todo";
import TodoItem from "./TodoItem";

interface IProps {
  todos: ITodo[];
  onToggleDone: (id: number) => void;
  onDelete: (id: number) => void;
}
export function TodoList({ todos, onToggleDone, onDelete }: IProps) {
  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}