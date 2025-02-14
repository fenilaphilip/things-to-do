
export default function TodoReducer(state, action) {
    console.log(`id :${JSON.stringify(action.payload)}`);

    switch (action.type) {
        case 'ADD_NEW_TASK': {
            let newTodos = [action.payload, ...state.todos];
            return {
                ...state,
                todos: newTodos
            };
        }
        case 'CHECKED_TASK': {
            let taskId = action.payload.id;
            let updatedTodos = state.todos.map((todo) => {
                if (todo.id == taskId) {
                    todo.isChecked = true;
                }
                return todo;
            });

            return {
                ...state,
                todos: updatedTodos
            };

        }
        case 'UNCHECKED_TASK': {
            let taskId = action.payload.id;
            let updatedTodos = state.todos.map((todo) => {
                if (todo.id == taskId) {
                    todo.isChecked = false
                }
                return todo;
            });

            return {
                ...state,
                todos: updatedTodos
            };
        }

        case 'REMOVE_TASK': {
            let taskId = action.payload.id;
            let remainingTodos = state.todos.filter((todo) => {
                if (todo.id !== taskId) {
                    return todo;
                }

            });
            return {
                ...state,
                todos: remainingTodos
            }

        }

    }
    throw Error('Unknown action: ' + action.type);

}