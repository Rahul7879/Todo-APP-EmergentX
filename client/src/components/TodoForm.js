import React, { useState } from 'react'
import { addNewTodo } from '../REDUX/actions';
import { useDispatch } from 'react-redux';
const TodoForm = () => {
    const [text,setText] = useState("");
    const dispatch = useDispatch();
    const onFormSubmit = (e)=>{
      e.preventDefault();
      dispatch(addNewTodo(text));
      setText('');
    }
    const onInputChange = (e)=>{
        setText(e.target.value);
    }
  return (
    <form style={{display: 'flex'}} className='form' onSubmit={onFormSubmit}>
    <input type="text"  placeholder='Enter New ToDo'
     className='input'
     onChange={onInputChange}
     value={text}
     />
     <button className='add-btn'>Add</button>
    
     
    </form>
  )
}

export default TodoForm