
export default function TodoReducer(state, action) {
    // console.log(`id :${JSON.stringify(action.payload)}`);

    switch (action.type) {
        case 'ADD_NEW_TASK': {
            let newTodos = [action.payload, ...state.todos];
            return {
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
                todos: updatedTodos
            };
        }

        case 'EDIT_TASK': {
            let taskId = action.payload.id;
            let modifiedtask = action.payload.task;
            let updatedTodos = state.todos.map((todo) => {
                if (todo.id == taskId) {
                    todo.task = modifiedtask;
                }
                return todo;

            });

            return {
                todos: updatedTodos
            }

        }

        case 'REMOVE_TASK': {
            let taskId = action.payload.id;
            let remainingTodos = state.todos.filter((todo) => {
                if (todo.id !== taskId) {
                    return todo;
                }

            });
            return {
                todos: remainingTodos
            }

        }

    }
    throw Error('Unknown action: ' + action.type);

}