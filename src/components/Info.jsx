import { useContext } from "react"
import { TaskContext } from "../store/TaskContext"


export default function Info() {
    const { count } = useContext(TaskContext);

    return (
        <>
            {
                count !== 0 && (
                    <div>
                        <p> {count} more tasks to finish! </p>
                    </div>
                )
            }
        </>
    )
}