import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'


function App() {
const [input, setInput] = useState('')
const [isEditable,setIsEditable]=useState(false)
const [isId,setIsId]=useState('')

  return (
   <>
   <h1>My</h1>
   <AddTodo   input={input} setInput={setInput} isEditable={isEditable} setIsEditable={setIsEditable} isId={isId} setIsId={setIsId}  />
   <TodoItem input={input} setInput={setInput} isEditable={isEditable} isId={isId} setIsId={setIsId}  />
   </>
  )
}

export default App
