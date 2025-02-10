
export default function TodoReducer(state, action) {

    switch (action.type) {
        case 'ADD_NEW_TASK': {
            let newTodo = [...state.todos, action.payload];

            return {
                ...state,
                todos: newTodo
            };
        }
    }
    throw Error('Unknown action: ' + action.type);

}