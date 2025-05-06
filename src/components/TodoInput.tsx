import { useState, type ChangeEvent } from "react";

// Accept setTodoItem as a prop
const TodoInput = ({
  setTodoItem,
}: {
  setTodoItem: React.Dispatch<
    React.SetStateAction<{ id: number; title: string }[]>
  >;
}) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (!todo.trim()) return; // Prevent adding empty todos
    const newTodo = {
      id: Date.now(),
      title: todo,
    };

    setTodoItem((prev) => [...prev, newTodo]); // Correctly add new todo to the list
    setTodo(""); // Clear input after adding the todo
  };

  return (
    <div className="mx-auto">
      <input
        className="text-slate-300 border border-purple-300 px-2 py-1 rounded"
        type="text"
        placeholder="Enter Todo"
        onChange={handleChange}
        value={todo}
      />
      <button
        onClick={addTodo}
        className="bg-purple-600 font-semibold px-2 py-1 rounded ml-5 cursor-pointer"
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
