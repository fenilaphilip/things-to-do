

export default function Headers() {
    const currentDate = new Date().toLocaleDateString('en-GB');

    return (
        <div id="header">
            <h1 data-test="TodoList-heading">To-Do-List</h1>
            <h6 className="m-3">Today:
                <span data-test="Current-Date">{currentDate}</span>
            </h6>
        </div>
    )
}