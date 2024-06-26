import { Modal } from "@mui/material";
import { useState } from "react";
import uniqid from "uniqid";
import CardsContainer from "./components/CardsContainer";


function App() {
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setHeading("");
    setDescription("");
  };

  function addTask() {
    if (heading && description) {
      let taskDate = new Date();
      let date = taskDate.getDate();
      let month = taskDate.getMonth() + 1;
      let year = taskDate.getFullYear();
      setTodos([...todos, {
        taskHeading: heading,
        taskDescription: description,
        taskDate: `${date}/${month}/${year}`,
        taskId: uniqid(),
      }])
      setOpen(false);
      setHeading("");
      setDescription("");
    } else {
      setOpen(false);
      setHeading("");
      setDescription("");
    }
  }

  console.log(todos);

  return (
    <div>
      <div className="flex w-[90%] m-auto justify-between items-center mt-8">
        <h1 className="text-4xl text-[#484848] font-bold">Todo App</h1>
        <button
          onClick={handleOpen}
          className="bg-[#484848] text-white px-4 py-2 rounded-md font-semibold"
        >
          + Add Task
        </button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="w-[40%] bg-white h-[40%] rounded-lg m-auto mt-[15%] outline-none">
          <span
            onClick={handleClose}
            className="text-2xl font-bold ml-[95%] cursor-pointer"
          >
            &times;
          </span>
          <input
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            type="text"
            placeholder="Task Heading"
            className="outline-none w-[90%] mt-4 ml-6 border-2 rounded-md border-[#dedede] py-1 px-2"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Task Description"
            className="resize-none outline-none w-[90%] mt-4 ml-6 border-2 rounded-md border-[#dedede] py-1 px-2 h-[35%]"
          />
          <div className="mt-2 w-[90%] ml-[63%] flex gap-x-6">
            <button
              onClick={handleClose}
              className="bg-[#484848] text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={addTask}
              className="bg-[#484848] text-white px-4 py-2 rounded-md"
            >
              Done
            </button>
          </div>
        </div>
      </Modal>

      {todos && <CardsContainer todos={todos} setTodos={setTodos} />}
    </div>
  );
}

export default App;
