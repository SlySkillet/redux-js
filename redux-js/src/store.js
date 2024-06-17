import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
// import { sayHiOnDispatch, includeMeaningOfLife } from './addons/enhancers'
import { composeWithDevTools } from '@redux-devtools/extension'
import { print1, print2, print3 } from './addons/middleware'

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}

const composedEnhancer = composeWithDevTools(
    applyMiddleware(print1, print2, print3)
)

// const loggerMiddleware = storeAPI => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', storeAPI.getState())
//     return result
// }

// const middlewareEnhancer = applyMiddleware(loggerMiddleware)

const store = createStore(rootReducer, preloadedState, composedEnhancer)

export default store
