import { useEffect, useState } from "react";

const TodoDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div>
      <h2 className="text-center mt-2 text-xl">
        {dateTime.toLocaleDateString()} - {dateTime.toLocaleTimeString()}
      </h2>
    </div>
  );
};

export default TodoDateTime;
