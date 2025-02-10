import { useContext } from 'react';
import { TaskContext } from '../store/TaskContext';

export default function Headers() {
    const { today } = useContext(TaskContext);

    return (
        <div id="header">
            <h1>To-Do-List</h1>
            <h6 className="m-3">Today: {today}</h6>
        </div>
    )
}