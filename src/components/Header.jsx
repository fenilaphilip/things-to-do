

export default function Headers() {
    const currentDate = new Date().toLocaleDateString('en-GB');

    return (
        <div id="header">
            <h1 data-test="TodoList-heading">To-Do-List</h1>
            <h5 className="m-2 date">
                <span data-test="Current-Date">{currentDate}</span>
            </h5>
        </div>
    )
}