import { useState } from "react";
import useKey from "@rooks/use-key";

export default function InputRow({ addTodo }) {
    const [newTask, setNewTask] = useState("");
    useKey(["Enter"], windowEnter);

    function handleInputChange(event) {
        event.preventDefault();
        setNewTask(event.target.value);
    }

    function windowEnter(e) {
        addTodo({
            type: "ADD_NEW_TASK",
            payload: {
                task: newTask
            }

        });
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
