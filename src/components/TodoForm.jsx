import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [data, setData] = useState("");
  const handleInputChange = (value) => {
    setData(value);
    // console.log(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(data);
    setData("");
  };

  return (
    <section className="mt-5 w-full">
      <form
        className="flex justify-between  border-black border rounded-sm"
        onSubmit={handleSubmit}
      >
        <div className="w-3/4">
          <input
            type="text"
            className="py-2 outline-none px-3  w-full"
            autoComplete="off"
            value={data}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div className="w-1/4">
          <button
            type="submit"
            className="px-5 py-2 bg-black text-white w-full"
          >
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
