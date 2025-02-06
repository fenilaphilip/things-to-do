import { createContext, useState } from 'react';

const currentDate = new Date().toLocaleDateString();

const initialList = [
    {
        task: "task 1",
        id: "1",
        checked: false
    },
    {
        task: "task 2",
        id: "2",
        checked: false
    },

];

const TaskContext = createContext({
    today: currentDate,
    TodoList: initialList,
    AddnewTask: () => { }
});

const TaskContextProvider = ({ children }) => {
    const [taskList, setTaskList] = useState(initialList);

    function AddnewTask(input) {
        let newTask = input;
        setTaskList((prevList) => {
            return [...prevList, {
                task: newTask,
                id: (prevList.length + 1),
                checked: false
            }]
        });
    }

    const contextValue = {
        today: currentDate,
        TodoList: taskList,
        AddnewTask,
    }


    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    )
}


export { TaskContext, TaskContextProvider };