import "../styles/style.css";
import InputRow from "./InputRow";

const currentDate = new Date();
const today = currentDate.toLocaleDateString();

export default function App() {


  return (
    <div className="container" id="todoContainer">
      <h1>To-Do-List</h1>
      <h6 className="m-3">Today: {today}</h6>
      <div>
        <InputRow />
      </div>
    </div >
  );
}
