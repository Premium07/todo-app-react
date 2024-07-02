import { useState } from "react";
// import { FaCheck } from "react-icons/fa";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDateTime from "./TodoDateTime";

const Todo = () => {
  const [task, setTask] = useState([]);

  const handleSubmit = (data) => {
    if (!data) {
      alert("Enter any task");
      return;
    }
    if (task.includes(data)) {
      alert("Task Already Added");
      return;
    }
    setTask((prev) => [...prev, data]);
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

  return (
    <section className="max-w-xl mx-auto p-2 ">
      <header className="mt-5">
        <h1 className="text-2xl text-center font-semibold">Todo List</h1>
        <TodoDateTime />
      </header>
      <TodoForm onAddTodo={handleSubmit} />
      <section className="w-full mt-2 h-[50vh] border overflow-x-auto rounded-sm border-black p-2">
        <ul className="w-full">
          {task.map((item, index) => {
            return (
              <TodoList
                key={index}
                data={item}
                onHandleDeleteTodo={handleDeleteTodo}
              />
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
