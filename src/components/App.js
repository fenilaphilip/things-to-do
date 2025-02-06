import { useContext } from "react";
import { TaskContext, TaskContextProvider } from "../store/TaskContext";
import InputRow from "./InputRow";
import DisplayTodo from "./DisplayTodo";
import "../styles/style.css";

const currentDate = new Date();
const today = currentDate.toLocaleDateString();

export default function App() {

  const taskctx = useContext(TaskContext);


  return (
    <div className="container" id="todoContainer">
      <div id="header">
        <h1>To-Do-List</h1>
        <h6 className="m-3">Today: {today}</h6>
      </div>
      <TaskContextProvider>
        <InputRow />
        {taskctx.TodoList.map((data) => {
          return <DisplayTodo key={data.id} task={data.task} />
        })}

      </TaskContextProvider>
    </div >
  );
}
