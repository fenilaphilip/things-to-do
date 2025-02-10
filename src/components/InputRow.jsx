import { useContext, useState } from "react";
import { TaskContext } from '../store/TaskContext';
import useKey from "@rooks/use-key";
import uniqid from 'uniqid';

export default function InputRow({ addTodo }) {
    const [newTask, setNewTask] = useState("");
    const { dispatch } = useContext(TaskContext);
    useKey(["Enter"], windowEnter);

    function handleInputChange(event) {
        event.preventDefault();
        setNewTask(event.target.value);
    }

    function windowEnter(e) {
        let newTodo = {
            id: uniqid(),
            task: newTask,
            isChecked: false
        }

        dispatch({
            type: "ADD_NEW_TASK",
            payload: newTodo
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
