import Input from "./components/Input/Input";
import ListTask from "./components/ListTask";
import "./App.scss";
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([
    { id: 0, value: "hello cac ban" },
    { id: 1, value: "lam sao" },
    { id: 2, value: "danh nhau a" },
  ]);
  const onChange = (e) => {
    setTask(e.target.value);
  };
  console.log(task);
  return (
    <div className="App">
      <Input />
      <ListTask listTask={listTask} onChange={onChange} />
    </div>
  );
}

export default App;
