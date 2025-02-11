
export default function TodoListItem({ id, task, isChecked, dispatch }) {

    const handleCheckboxChange = (event) => {
        isChecked = !isChecked;
        console.log(isChecked)
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
    return (
        <div className="d-flex m-2">
            <input
                type="checkbox"
                className="m-2"
                id="checkbox"
                value={id}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <div className="m-2" id="todo">{task}</div>
            <button className="m-2">
                <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-128.png"
                    alt="Remove"
                    width={20}
                    height={20}
                />
            </button>

        </div>
    )
}