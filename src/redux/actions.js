export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const searchFilterChange = (data) => {
    return {
        type: 'filters/searchFilterChange',
        payload: data,
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status,
    }
}

export const selectPriorityChange = (prioriry) => {
    return {
        type: 'filters/selectPrioritiesChange',
        payload: prioriry,
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId,
    }
}