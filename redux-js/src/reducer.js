import { combineReducers } from 'redux'

import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

const rootReducer = combineReducers({
    // keys in this object define what the keys of state object will be
    todos: todosReducer,
    filters: filtersReducer
})

export default rootReducer
