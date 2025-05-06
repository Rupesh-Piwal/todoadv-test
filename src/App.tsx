import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todoItem, setTodoItem] = useState<{ id: number; title: string }[]>([
    {
      id: Date.now(),
      title: "First Todo",
    },
  ]);

  return (
    <div className="bg-black h-screen text-white mx-auto">
      <Header />
      <section className="mt-[80px] flex flex-col justify-center items-center gap-5">
        <TodoInput setTodoItem={setTodoItem} /> {/* Pass setTodoItem */}
        <TodoList todoItem={todoItem} /> {/* Pass todoItem */}
      </section>
    </div>
  );
};

export default App;
