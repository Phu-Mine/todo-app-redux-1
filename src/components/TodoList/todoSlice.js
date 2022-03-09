const initState = [
    { id: 1, name: 'Todo 1', completed: false, priority: 'Medium' },
    { id: 2, name: 'Todo 2', completed: true, priority: 'High' },
    { id: 3, name: 'Todo 3', completed: false, priority: 'Low' },
]

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [
                ...state,
                action.payload,
            ]
        case 'todoList/toggleTodoStatus':
            return state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : { ...todo });
        default: return state;
    }
}

export default todoReducer;