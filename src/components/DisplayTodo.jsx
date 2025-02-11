import { useContext } from 'react';
import { TaskContext } from '../store/TaskContext';
import Info from "./Info";
import TodoListItem from './TodoListItem';

export default function DisplayTodo() {
    const { todoList, dispatch } = useContext(TaskContext);

    return (
        <>
            <Info />
            {
                todoList.length !== 0 && (
                    todoList.map((item) => {
                        return <TodoListItem
                            key={item.id}
                            id={item.id}
                            task={item.task}
                            dispatch={dispatch}
                        />
                    })
                )
            }


        </>
    )
}
