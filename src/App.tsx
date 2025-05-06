import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="bg-black h-screen text-white mx-auto">
      <Header />
      <section className="mt-[80px] flex flex-col justify-center items-center gap-5 ">
        <TodoInput />
        <TodoList />
      </section>
    </div>
  );
};

export default App;
