import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoListItem({ id, task, isChecked, dispatch }) {
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


    const handleRemove = (id) => {
        dispatch({
            type: 'REMOVE_TASK',
            payload: { id: id }
        });
    }

    return (
        <div className="d-flex m-2 todo-item px-2" data-test="display-todo" >
            <div
                style={strikeFinishedTaskCSS}
                className="m-2 todo-item-desc"
                data-test="task"
                onClick={() => handleCheckboxChange(id)}
            >
                <input
                    data-test="input-checkbox"
                    type="checkbox"
                    className="todo-checkbox"
                    checked={isChecked}
                />
                {task}
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