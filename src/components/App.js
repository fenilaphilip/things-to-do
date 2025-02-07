import { useContext } from "react";
import { TaskContext, TaskContextProvider } from "../store/TaskContext";
import InputRow from "./InputRow";
import DisplayTodo from "./DisplayTodo";
import "../styles/style.css";


export default function App() {
  const taskctx = useContext(TaskContext);


  return (
    <TaskContextProvider>
      <div className="container" id="todoContainer">
        <div id="header">
          <h1>To-Do-List</h1>
          <h6 className="m-3">Today: {taskctx.today}</h6>
        </div>
        <InputRow addTodo={taskctx.addTodo} />
        <DisplayTodo todoList={taskctx.TodoList} />
      </div >
    </TaskContextProvider>
  );
}
