import type { ITodo } from "../types/todo";
import TodoItem from "./TodoItem";

interface IProps {
  todos: ITodo[];
  onToggleDone: (id: number) => void;
}
export function TodoList({ todos, onToggleDone }: IProps) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggleDone={onToggleDone} />
      ))}
    </ul>
  )
}