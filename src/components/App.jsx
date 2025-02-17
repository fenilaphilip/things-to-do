import TaskContextProvider from "../store/TaskContext";
import Header from "./Header";
import InputRow from "./InputRow";
import DisplayTodo from "./DisplayTodo";
import Settings from "./Settings";
import "../styles/style.css";



export default function App() {

  return (
    <TaskContextProvider>
      <div className="container d-flex flex-column" id="todoContainer">
        <Header />
        <Settings />
        <InputRow />
        <DisplayTodo />
      </div >
    </TaskContextProvider >
  );
}
