import { createContext } from 'react';

const TaskContext = createContext("Add a task");

const TaskContextProvider = ({ children }) => {
    const Tasklist = ["Task1", "Task2", "Task3", "Task4", "Task5"];

    return (
        <TaskContext.Provider value={Tasklist}>
            {children}
        </TaskContext.Provider>
    )
}


export { TaskContext, TaskContextProvider };