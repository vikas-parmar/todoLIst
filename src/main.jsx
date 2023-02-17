import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const DATA = [
  { id: "todo-0", name: "Jogging", completed: true },
  { id: "todo-1", name: "Cricket", completed: false },
  { id: "todo-2", name: "Sleep", completed: false }
]
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks ={DATA} />
  </React.StrictMode>,
)
