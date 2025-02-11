
export default function TodoReducer(state, action) {
    console.log(`id :${JSON.stringify(action.payload)}`);

    switch (action.type) {
        case 'ADD_NEW_TASK': {
            let newTodos = [...state.todos, action.payload];
            return {
                ...state,
                todos: newTodos
            };
        }
        case 'CHECKED_TASK': {
            let taskId = action.payload.id;
            let newTodos = state.todos.map((todo) => {
                if (todo.id == taskId) {
                    todo.isChecked = true;
                }
                return todo;
            });

            return {
                ...state,
                todos: newTodos
            };

        }
        case 'UNCHECKED_TASK': {
            let taskId = action.payload.id;
            let newTodos = state.todos.map((todo) => {
                if (todo.id == taskId) {
                    todo.isChecked = false
                }
                return todo;
            });

            return {
                ...state,
                todos: newTodos
            };
        }

        case 'DELETE_TASK': {
            return state;

        }

    }
    throw Error('Unknown action: ' + action.type);

}