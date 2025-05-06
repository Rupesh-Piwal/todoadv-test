const TodoInput = () => {
  return (
    <div className="mx-auto">
      <input
        className="text-slate-300 border border-purple-300 px-2 py-1 rounded "
        type="text"
        placeholder="Enter Todo"
      />
      <button className="bg-purple-600 font-semibold px-2 py-1 rounded ml-5 cursor-pointer">
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
