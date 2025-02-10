
export default function TodoReducer(state, action) {
    console.log(`id :${JSON.stringify(action.payload)}`);

    switch (action.type) {
        case 'ADD_NEW_TASK': {
            let newTodo = [...state.todos, action.payload];
            return {
                ...state,
                todos: newTodo
            };
        }
        case 'CHECKED_TASK': {

            return state;

        }
        case 'UNCHECKED_TASK': {

            return state;
        }
        case 'Edit_TASK': {
            return state;

        }
        case 'DELETE_TASK': {
            return state;

        }

    }
    throw Error('Unknown action: ' + action.type);

}