import { useContext } from 'react';
import { TaskContext } from '../store/TaskContext';
import Info from "./Info";
import TodoListItem from './TodoListItem';

export default function DisplayTodo() {
    const { todoList, dispatch } = useContext(TaskContext);

    const totalTodos = todoList.length;
    const completedTodos = todoList.filter((todo) => todo.isChecked);
    const undoneTaskCount = totalTodos - completedTodos.length;


    return (
        <>
            <Info undoneCount={undoneTaskCount} totalTodos={totalTodos} />
            {
                todoList.length !== 0 && (
                    todoList.map((item) => {
                        return <TodoListItem
                            key={item.id}
                            id={item.id}
                            task={item.task}
                            isChecked={item.isChecked}
                            dispatch={dispatch}
                        />
                    })
                )
            }


        </>
    )
}
