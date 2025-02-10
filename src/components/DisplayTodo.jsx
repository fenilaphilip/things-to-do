import { useContext } from 'react';
import { TaskContext } from '../store/TaskContext';

export default function DisplayTodo() {
    const { todoList } = useContext(TaskContext);
    console.log(todoList);

    return (
        <>
            <div>
                <p> 5 more tasks to finish </p>
            </div>
            {todoList.map((item) => {
                return (
                    <div className="d-flex m-2" key={item.id}>
                        <input type="checkbox" className="m-2" id="checkbox" />
                        <div className="m-2" id="todo">{item.task}</div>
                        <button className="m-2">
                            <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-128.png"
                                alt="Remove"
                                width={20}
                                height={20}
                            />
                        </button>

                    </div>
                )
            })}

        </>
    )
}