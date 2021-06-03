import Input from "./components/Input/Input";
import ListTask from "./components/ListTask";
import "./App.scss";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");

  const [listTask, setListTask] = useState([
    "hello cac ban",
    "lam sao",
    "danh nhau a",
  ]);

  const getData = (e) => {
    setTask(e);
  };

  const addTask = () => {
    if (task === "") alert("Ban chua nhap task");
    else {
      const list = listTask;
      list.push(task);
      setListTask(list);
      console.log(list);
    }
  };
  return (
    <div className="App">
      <Input callBack={getData} handleAdd={addTask} />
      <ListTask listTask={listTask} />
    </div>
  );
}

export default App;
