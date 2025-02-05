import { useContext } from "react";
import { TaskContext, TaskContextProvider } from "../store/TaskContext";
import InputRow from "./InputRow";
import "../styles/style.css";

const currentDate = new Date();
const today = currentDate.toLocaleDateString();

export default function App() {

  const taskctx = useContext(TaskContext);
  console.log(taskctx);

  return (
    <div className="container" id="todoContainer">
      <h1>To-Do-List</h1>
      <h6 className="m-3">Today: {today}</h6>
      <TaskContextProvider>
        <InputRow />
        <InputRow />
        <InputRow />
        <InputRow />
        <InputRow />
        <InputRow />
        <InputRow />
      </TaskContextProvider>
    </div >
  );
}
