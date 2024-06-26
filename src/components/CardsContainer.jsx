import React from "react";

const Card = ({ data, setTodos, todos }) => {
  function deleteTask(taskId) {
    setTodos(
      todos.filter((todo) => {
        return todo.taskId != taskId;
      })
    );
  }
  return (
    <div className="bg-white border-t-4 border-[#484848] w-[30%] h-[30vh] shadow-lg rounded-lg p-2 text-[#484848] flex flex-col justify-between">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">{data.taskHeading}</h2>
        <p>{data.taskDate}</p>
      </div>
      <div className="h-[50%] overflow-x-hidden overflow-y-scroll">
        <p>{data.taskDescription}</p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => deleteTask(data.taskId)}
          className="bg-[#484848] text-white px-2 rounded-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const CardsContainer = ({ todos, setTodos }) => {
  return (
    <div className="w-[90%] m-auto mt-16 mb-16 flex flex-row flex-wrap gap-8">
      {todos?.map((todo) => {
        return <Card todos={todos} setTodos={setTodos} data={todo} key={todo.taskId} />;
      })}
    </div>
  );
};

export default CardsContainer;
