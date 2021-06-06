import Input from "./components/Input/Input";
import ListTask from "./components/ListTask";
import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [task, setTask] = useState("");

  const [listTask, setListTask] = useState(
    JSON.parse(localStorage.getItem("savedData")) || [
      { id: 0, value: "Try to do your best !!!", state: false },
    ]
  );

  const getData = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (!task.replace(/\s/g, "").length || task == null) {
      alert("Write your task, please !!!");
    } else {
      const list = [...listTask];
      const item = {
        id: listTask.length,
        value: task,
        state: false,
      };
      list.push(item);
      setListTask(list);
      setTask("");
    }
  };

  const handleCheck = (task) => {
    const list = [...listTask];
    const index = list.indexOf(task);
    list[index].state = !list[index].state;
    setListTask(list);
  };

  const handleDelete = (id) => {
    setListTask(listTask.filter((task) => task.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("savedData", JSON.stringify(listTask));
  }, [listTask]);

  return (
    <div>
      <div className="background"></div>
      <div className="App">
        <h1>Todo List</h1>
        <Input handleChange={getData} handleAdd={addTask} />
        <ListTask
          listTask={listTask.filter((task) => task.state === false)}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <h1>Completed</h1>
        <ListTask
          listTask={listTask.filter((task) => task.state !== false)}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
