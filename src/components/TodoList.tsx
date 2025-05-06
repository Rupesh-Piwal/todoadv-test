import TodoItem from "./TodoItem";
import type { todoType } from "../types";

// Accept todoItem as a prop
const TodoList = ({ todoItem }: { todoItem: todoType[] }) => {
  return (
    <div className="border border-purple-800 rounded min-w-[700px] max-h-[400px] overflow-y-scroll">
      {todoItem.map((todo) => (
        <TodoItem key={todo.id} todoItem={todo} />
      ))}
    </div>
  );
};

export default TodoList;
