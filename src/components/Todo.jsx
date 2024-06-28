import { useState } from "react";
// import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [data, setData] = useState("");
  const [task, setTask] = useState([]);

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
  return (
    <section className="max-w-xl mx-auto p-2 ">
      <header className="mt-5">
        <h1 className="text-2xl text-center font-semibold">Todo List</h1>
      </header>
      <section className="mt-5">
        <form
          className="flex justify-between  border-black border rounded-sm"
          onSubmit={handleSubmit}
        >
          <div className="">
            <input
              type="text"
              className="py-2 outline-none px-3 w-full"
              autoComplete="off"
              value={data}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
          <div className="">
            <button type="submit" className="px-5 py-2 bg-black text-white">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="w-full">
        <ul className="w-full">
          {task.map((item, index) => {
            return (
              <li
                key={index}
                className="w-full flex justify-between items-center rounded-sm mt-5 text-xl border-b text-white bg-black p-2 px-4"
              >
                <span className="">{item.toUpperCase()}</span>
                {/* <button className="p-2 bg-black text-white rounded-full">
                  <FaCheck />
                </button> */}
                <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 duration-300">
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default Todo;
