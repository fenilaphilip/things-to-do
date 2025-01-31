
export default function CreateTodo({ tasklist, setTask }) {
    let newTask = "";
    function handleInputChange(input) {
        newTask = input.value;
    }
    function handleFormSubmit(event) {
        event.preventDefault();
        setTask([...tasklist, newTask]);
    }
    function handleAllClearBtn(event) {
        event.preventDefault();
        setTask([]);
    }

    return (
        <div id="createblock">
            <form id="todoform" className="m-3 p-2 " onSubmit={handleFormSubmit}>
                <input
                    className="mt-2 me-2 p-2"
                    type="text"
                    placeholder="Enter a task"
                    id="todoInput"
                    onChange={(event) => handleInputChange(event.target)} />
                <button className="mt-2 me-2 ml-0 p-2" id="addBtn"> Add Task</button>
            </form>
            <button className="mt-2 ml-0 p-2" id="allClearBtn" onClick={handleAllClearBtn}> All clear </button>
        </div>

    )
}