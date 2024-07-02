import { MdDeleteForever } from "react-icons/md";

const TodoList = ({ key, data, onHandleDeleteTodo }) => {
  return (
    <li
      key={key}
      className="w-full flex justify-between items-center rounded-sm mb-1 text-xl border-b text-white bg-black p-2 px-4"
    >
      <span className="">{data}</span>
      {/* <button className="p-2 bg-black text-white rounded-full">
    <FaCheck />
  </button> */}
      <button
        onClick={() => onHandleDeleteTodo(data)}
        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 duration-300"
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TodoList;
