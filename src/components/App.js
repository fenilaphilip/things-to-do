import { useState } from "react";
import Banner from "./Banner";
import CreateTodo from "./CreateToDo";
import DisplayTodo from "./DisplayToDo";
import "../styles/style.css"


export default function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="container" id="todoContainer">
      <Banner />
      <CreateTodo tasklist={taskList} setTask={setTaskList} />
      <DisplayTodo taskList={taskList} />
    </div>
  );
}
