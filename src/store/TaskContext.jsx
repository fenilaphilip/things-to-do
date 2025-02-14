import { createContext, useReducer, useEffect } from 'react';
import TodoReducer from './TaskReducer';


var initialState = JSON.parse(localStorage.getItem('storetodos')) || {
    todos: []
};

const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    useEffect(() => {
        localStorage.setItem('storetodos', JSON.stringify(state));
    }, [state]);


    const contextValue = {
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