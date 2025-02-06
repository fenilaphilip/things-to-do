import { createContext, useState } from 'react';

const initialList = [
    {
        task: "task 1",
        id: "1"
    },
    {
        task: "task 2",
        id: "2"
    },
    {
        task: "task 3",
        id: "3"
    },
    {
        task: "task 4",
        id: "4"
    },
    {
        task: "task 5",
        id: "5"
    }

];

const TaskContext = createContext(initialList);

const TaskContextProvider = ({ children }) => {
    const [tasklist, setTaskList] = useState("");

    const contextValue = {
        tasklist,
        setTaskList
    }


    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    )
}


export { TaskContext, TaskContextProvider };