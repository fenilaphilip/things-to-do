
export default function DisplayToDo({ taskList }) {
    const checklist = taskList;
    return (
        <ul id="alltodos">
            {checklist.length != 0 && (checklist.map((task) => {
                return <li key={task}>{task}</li>
            }))}
        </ul>
    )
}