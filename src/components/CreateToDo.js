
export default function CreateTodo() {
    return (
        <div id="createblock">
            <form id="todoform" className="m-3 p-2 ">
                <input className="mt-2 me-2 p-2" type="text" placeholder="Enter a task" id="todoInput" />
                <button className="mt-2 me-2 ml-0 p-2" id="addBtn"> Add Task</button>
                <button className="mt-2 ml-0 p-2" id="allClearBtn"> All clear </button>
            </form>
        </div>

    )
}