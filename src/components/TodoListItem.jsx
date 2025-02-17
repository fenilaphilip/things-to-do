import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function TodoListItem({ id, task, isChecked, dispatch }) {
    let todotask = task;
    const [editMode, setEditMode] = useState({
        editable: false,
        editValue: todotask
    });
    const strikeFinishedTaskCSS = { textDecoration: isChecked ? "line-through" : "none" };

    const handleCheckboxChange = (id) => {
        isChecked = !isChecked;
        if (isChecked) {
            dispatch({
                type: 'CHECKED_TASK',
                payload: { id: id }
            });
        } else {
            dispatch({
                type: 'UNCHECKED_TASK',
                payload: { id: id }
            });
        }
    }

    const handleEditChange = (event) => {
        let newValue = event.target.value;
        setEditMode((prevValue) => ({ ...prevValue, editValue: newValue }));

    }

    const handleEdit = () => {
        if (editMode.editable) {
            console.debug(`dispatching edit task`);
            dispatch({
                type: 'EDIT_TASK',
                payload: {
                    id: id,
                    task: editMode.editValue
                }
            });
        }
        setEditMode((prevValue) => ({ ...prevValue, editable: !editMode.editable }));
    }




    const handleRemove = (id) => {
        dispatch({
            type: 'REMOVE_TASK',
            payload: { id: id }
        });
    }

    return (
        <div className="d-flex m-2 todo-item px-2" data-test="display-todo" >
            <input
                data-test="input-checkbox"
                type="checkbox"
                className="todo-checkbox"
                checked={isChecked}
                onChange={() => handleCheckboxChange(id)}
            />
            <div
                style={strikeFinishedTaskCSS}
                className="m-2 todo-item-desc"
                data-test="task"

            >
                {
                    editMode.editable ? (
                        <input
                            data-test="edit-taskInput"
                            type="text"
                            value={editMode.editValue}
                            onChange={handleEditChange}
                        />
                    ) : (
                        <span>{task}</span>
                    )
                }
            </div>
            <div
                className="m-2 edit-btn"
                data-test="edit-btn"
                onClick={handleEdit}>
                {editMode.editable ? <DoneIcon /> : <ModeEditIcon />}
            </div>
            <div
                className="m-2 remove-btn"
                data-test="remove-btn"
                onClick={() => handleRemove(id)}>
                <DeleteIcon />
            </div>

        </div>
    )
}