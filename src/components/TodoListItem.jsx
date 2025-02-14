import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoListItem({ id, task, isChecked, dispatch }) {
    const strikeFinishedTaskCSS = { textDecoration: isChecked ? "line-through" : "none" };

    const handleCheckboxChange = (event) => {
        isChecked = !isChecked;
        if (isChecked) {
            dispatch({
                type: 'CHECKED_TASK',
                payload: { id: event.target.value }
            });
        } else {
            dispatch({
                type: 'UNCHECKED_TASK',
                payload: { id: event.target.value }
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
        <div className="d-flex m-2" data-test="display-todo" >
            <input
                data-test="input-checkbox"
                type="checkbox"
                className="m-2"
                id="checkbox"
                value={id}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <div
                style={strikeFinishedTaskCSS}
                className="m-2"
                id="todo"
                data-test="task"
            >
                {task}
            </div>
            <div
                className="m-2"
                data-test="remove-btn"
                onClick={() => handleRemove(id)}>
                <DeleteIcon />
            </div>

        </div>
    )
}