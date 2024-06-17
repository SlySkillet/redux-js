import store from './store'



store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// log: 'Hi!'

console.log('State after dispatch: ', store.getState())
// log: {todos: [...], filters: {status, colors}, meaningOfLife: 42}




// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
