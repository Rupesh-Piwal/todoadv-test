import Header from "./components/Header";
import TodoInput from "./components/TodoInput";

const App = () => {
  return (
    <div className="bg-black h-screen text-white mx-auto">
      <Header />
      <section className="mt-[80px] flex flex-col gap-5 ">
        <TodoInput />
      </section>
    </div>
  );
};

export default App;
