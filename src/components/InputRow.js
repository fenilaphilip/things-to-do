import { useContext, useState } from "react";
import { TaskContext } from "../store/TaskContext";
import useKey from "@rooks/use-key";

export default function InputRow() {
    const [newTask, setNewTask] = useState("");
    const taskCtx = useContext(TaskContext);
    useKey(["Enter"], windowEnter);

    function handleInputChange(event) {
        event.preventDefault();
        setNewTask(event.target.value);
    }

    function windowEnter(e) {
        taskCtx.AddnewTask(newTask);
        setNewTask("");
    }

    return (
        <div className="m-2" >
            <input type="text"
                placeholder="Add a task"
                id="taskInput"
                value={newTask}
                onChange={handleInputChange} />
        </div>
    )
}
