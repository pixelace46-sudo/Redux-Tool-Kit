import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'
import { store } from '../app/store'

const AddTodo = ({input,setInput,isEditable,setIsEditable,isId,setIsId}) => {
    const dispatch=useDispatch()
    
    const handleAdd=(e)=>{
      e.preventDefault()
    
      if(isEditable){
         dispatch(updateTodo({id:isId,text:input}))
         setInput('')
         setIsId('')
      }else{
         dispatch(addTodo(input))
         setInput('')
      }
     

    }
    const value=store
    console.log('storevalue:',value.getState())
    console.log('value:',value);
    
  return (
    <>
    <div className='flex justify-center items-center gap-3 bg-amber-400 container mx-auto p-2'>
       <input type="text"
   value={input}
   onChange={(e)=>setInput(e.target.value)}
   className='border'
   />    
   <button onClick={handleAdd} className='px-1 rounded-md bg-blue-500'>Add</button>
    </div>
   
    </>
  )
}

export default AddTodo