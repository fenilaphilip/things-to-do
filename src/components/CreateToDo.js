
export default function CreateTodo() {
    return (
        <div id="createBlock">
            <form id="input-form" >
                <input type="text" placeholder="Enter a task" id="to-do-input" />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}