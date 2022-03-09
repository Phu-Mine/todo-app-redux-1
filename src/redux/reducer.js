import { combineReducers } from 'redux'

import todoReducer from "../components/TodoList/todoSlice";
import filtersReducer from "../components/Filters/filtersSlice"

const rootReducer = (state = {}, action) => {
    return {
        filters: filtersReducer(state.filters, action),
        todoList: todoReducer(state.todoList, action),
    }
}

const reRootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoReducer,
})

export default reRootReducer;