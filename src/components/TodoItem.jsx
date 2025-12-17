import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTodo, deleteTodo } from '../features/todo/todoSlice'

const TodoItem = ({input,setInput,isEditable,setIsEditable,isId,setIsId}) => {
    // const [todomsg]
    const todo=useSelector(state=>state.todos)
    const dispatch=useDispatch()
   
  return (
    <>
    <div className='bg-neutral-500 min-h-screen container mx-auto'>
        <div className='flex justify-center items-center pt-3 bg-red-200 gap-2'>
           <ul>
            {
                todo.map((todo)=>(
                    <div key={todo.id} className='flex gap-2'>
                      <h1 className='w-40'>{todo.text} </h1>
                       <button onClick={()=>{
                           setInput(todo.text)
                           setIsEditable((prev)=>!prev)
                           setIsId(todo.id)
                
                       }}>Edit </button>
                      <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
                    </div>
                ))
            }
           </ul>
          
        </div>
    
    </div>
    </>
  )
}

export default TodoItem