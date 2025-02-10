import { createContext, useReducer } from 'react';
import TodoReducer from './TaskReducer';


const currentDate = new Date().toLocaleDateString();

const initialState = {
    date: currentDate,
    todos: [{
        task: "Task 1",
        id: 1,
        isChecked: false
    }],
};

const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const contextValue = {
        today: state.date,
        todoList: state.todos,
        dispatch
    }
    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    )
}


export { TaskContext };
export default TaskContextProvider;