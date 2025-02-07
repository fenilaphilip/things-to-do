import { createContext, useReducer } from 'react';
import { initialState, TodoReducer } from './TaskReducer';


const currentDate = new Date().toLocaleDateString();

const TaskContext = createContext({
    today: currentDate,
    TodoList: initialState,
    addTodo: () => { }
});

const TaskContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const addTodo = (payload) => {
        return dispatch({
            type: "ADD_NEW_TASK",
            payload
        });
    }


    const contextValue = {
        today: currentDate,
        TodoList: state,
        addTodo
    }


    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    )
}


export { TaskContext, TaskContextProvider };