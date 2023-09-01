import React, { useState } from 'react'

import {  toggleTodo, updateTodo, deleteTodo } from '../REDUX/actions/'
import { useDispatch } from 'react-redux'

const Todo = ({todo}) => {
  const [editing, setEditing] =  useState(false);
  const [text,setText] = useState(`${todo.data}`);
 const dispatch = useDispatch();

 const onFormSubmit = (e) =>{
  e.preventDefault();
    setEditing(prevState => !prevState);
    dispatch(updateTodo(todo._id,text));
 }
  return (
<li className='task' onClick={()=>{
   dispatch(toggleTodo(todo._id))
}}
style={{
  textDecoration: todo.done ? 'line-through':'',
  backgroundColor : todo.done ? 'rgb(76, 16, 16)' : '#34495e',
}}
>
<div className='container '>
          <div className='checkbox-container '>
            <input type='checkbox'  checked={todo.done} className='checkbox'></input>
          </div>
          <div className='todos-container'>  
       

<span style={{display: editing ? 'none' : ''}} > {todo.data}</span>
<form onSubmit={onFormSubmit} style={{display: editing ? 'inline': 'none'}}>
<input type="text" className='edit-todo' onChange={(e)=>setText(e.target.value)} value={text} />
</form>
<span className='icon' onClick={()=>dispatch(deleteTodo(todo._id))}>
<i className='fas fa-trash'/>
</span>
<span className='icon' onClick={()=>setEditing(prevState => !prevState)}>
<i className="fa-solid fa-pen"></i>
</span>
</div>
  </div>

</li>
  )
}

export default Todo