
export const initialState = [
    {
        task: "task 1",
        id: 1,
        checked: false
    },
    {
        task: "task 2",
        id: 2,
        checked: false
    },
];

function TodoReducer(state, action) {
    const { todo } = action.payload;
    switch (action.type) {
        case 'ADD_NEW_TASK': {
            return [...initialState, {
                task: todo.task,
                id: (initialState.length + 1),
                checked: false
            }];
        }
    }
    throw Error('Unknown action: ' + action.type);

}