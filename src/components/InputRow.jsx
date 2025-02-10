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
        let todo = newTask.trim();
        todo = todo.charAt(0).toUpperCase() + todo.slice(1);

        let newTodo = {
            id: uniqid(),
            task: todo,
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
                onChange={handleInputChange}
                required
            />
        </div>
    )
}
