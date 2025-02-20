import { useContext, useRef, useState } from "react";
import { TaskContext } from '../store/TaskContext';
import useKey from "@rooks/use-key";
import uniqid from 'uniqid';

export default function InputRow({ addTodo }) {
    const [newTask, setNewTask] = useState("");
    const { dispatch } = useContext(TaskContext);
    const taskInput = useRef(null);
    useKey(["Enter"], windowEnter);

    function handleInputChange(event) {
        event.preventDefault();
        setNewTask(event.target.value);
    }

    function windowEnter(e) {
        if (document.activeElement === taskInput.current) {
            let task = newTask.trim();
            task = task.charAt(0).toUpperCase() + task.slice(1);

            if (task.length !== 0) {
                let newTodo = {
                    id: uniqid(),
                    task: task,
                    isChecked: false
                }

                dispatch({
                    type: "ADD_NEW_TASK",
                    payload: newTodo
                });
            }
            setNewTask("");
        }
    }

    return (
        <div className="m-2 px-2" >
            <input
                data-test="input-task"
                type="text"
                placeholder="Add a task"
                id="taskInput"
                ref={taskInput}
                value={newTask}
                onChange={handleInputChange}
            />
        </div>
    )
}
