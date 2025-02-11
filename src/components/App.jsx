import TaskContextProvider from "../store/TaskContext";
import Header from "./Header";
import InputRow from "./InputRow";
import DisplayTodo from "./DisplayTodo";
import "../styles/style.css";



export default function App() {

  return (
    <TaskContextProvider>
      <div className="container" id="todoContainer">
        <Header />
        <InputRow />

        <DisplayTodo />
      </div >
    </TaskContextProvider >
  );
}
