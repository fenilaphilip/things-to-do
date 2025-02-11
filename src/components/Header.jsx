

export default function Headers() {
    const currentDate = new Date().toLocaleDateString();

    return (
        <div id="header">
            <h1>To-Do-List</h1>
            <h6 className="m-3">Today: {currentDate}</h6>
        </div>
    )
}