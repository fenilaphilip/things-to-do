import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoListItem({ id, task, isChecked, dispatch }) {

    const handleCheckboxChange = (event) => {
        isChecked = !isChecked;
        console.debug(isChecked)
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
        console.debug(`delete id :${id}`)
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