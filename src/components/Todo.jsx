import { useEffect, useState } from "react";
// import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [data, setData] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState(new Date());

  const handleInputChange = (value) => {
    setData(value);
    // console.log(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data) {
      alert("Enter any task");
      return;
    }
    if (task.includes(data)) {
      setData("");
      alert("Task Already Added");
      return;
    }

    setTask((prev) => [...prev, data]);
    setData("");
  };

  const handleDeleteTodo = (value) => {
    // console.log(task);
    // console.log(value);
    const deleteTodo = task.filter((item) => item !== value);
    setTask(deleteTodo);
  };

  const handleClearAllTask = () => {
    setTask([]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <section className="max-w-xl mx-auto p-2 ">
      <header className="mt-5">
        <h1 className="text-2xl text-center font-semibold">Todo List</h1>
        <h2 className="text-center mt-2 text-xl">
          {dateTime.toLocaleDateString()} - {dateTime.toLocaleTimeString()}
        </h2>
      </header>
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
      <section className="w-full mt-2 h-[50vh] border overflow-x-auto rounded-sm border-black p-2">
        <ul className="w-full">
          {task.map((item, index) => {
            return (
              <li
                key={index}
                className="w-full flex justify-between items-center rounded-sm mb-1 text-xl border-b text-white bg-black p-2 px-4"
              >
                <span className="">{item}</span>
                {/* <button className="p-2 bg-black text-white rounded-full">
                  <FaCheck />
                </button> */}
                <button
                  onClick={() => handleDeleteTodo(item)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 duration-300"
                >
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <div className="w-full mx-auto mt-4">
        <button
          className="bg-red-500 px-3 py-2 rounded-sm text-slate-200"
          onClick={handleClearAllTask}
        >
          Clear All Task
        </button>
      </div>
    </section>
  );
};

export default Todo;
