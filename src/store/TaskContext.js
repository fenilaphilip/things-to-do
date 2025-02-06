import { createContext, useState } from 'react';

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

const TaskContext = createContext(initialList);

const TaskContextProvider = ({ children }) => {
    const [taskList, setTaskList] = useState(initialList);

    const contextValue = {
        taskList,
        setTaskList
    }


    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    )
}


export { TaskContext, TaskContextProvider };