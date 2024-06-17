import { createStore, compose } from 'redux'
import rootReducer from './reducer'
import { sayHiOnDispatch, includeMeaningOfLife } from './addons/enhancers'

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}

const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

const store = createStore(rootReducer, preloadedState, composedEnhancer)

export default store
