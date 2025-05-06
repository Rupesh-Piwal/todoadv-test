import type { todoType } from "../types";

interface TodoItemProps {
  todoItem: todoType;
}

const TodoItem = ({ todoItem }: TodoItemProps) => {
  return (
    <div className="flex flex-row justify-between px-[30px] py-3 bg-slate-900 border border-slate-800 m-[2px]">
      <h2 className="text-[20px]">{todoItem.title}</h2>
      <div className="space-x-6">
        <button className="bg-green-500 px-2 py-1 rounded cursor-pointer">
          UPDATE
        </button>
        <button className="bg-red-500 px-2 py-1 rounded cursor-pointer">
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
