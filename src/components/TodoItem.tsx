const TodoItem = () => {
  return (
    <div className="text-center flex flex-row justify-between px-[30px] py-3 bg-slate-900 border border-slate-800 m-[2px]">
      <p>TodoItem</p>
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
