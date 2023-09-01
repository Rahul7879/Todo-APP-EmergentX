import React, { useEffect } from 'react'
import { deleteTodo, getAllTodos } from '../REDUX/actions/'
import { useDispatch, useSelector } from 'react-redux'
import Todo from './Todo';
import Tab from './Tab';
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../REDUX/actions/type';

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state=>state.currentTab);
    useEffect(()=>{
     dispatch(getAllTodos());
    },[])

    const getTodos = ()=>{
      if(currentTab === ALL_TODOS){
        return todos;
      }else if(currentTab === ACTIVE_TODOS){
        return todos.filter(todo => !todo.done)
      }else if(currentTab == DONE_TODOS){
        return todos.filter(todo => todo.done)
      }
    }

const removeDoneTodos = () =>{
  todos.forEach(({done,_id}) => {
    if(done){
      dispatch(deleteTodo(_id));
    }
  });
}
  return (
    <article>
    <div>
    <Tab currentTab = {currentTab}/>
     {
      todos.some(todo => todo.done) ? (
        <button className='btn clear' onClick={removeDoneTodos}>Remove Done Todos</button>
      ) : null
    }
    </div>
    <ul>
    
    {
        getTodos().map(todo=>(
       
            <Todo key={todo._id} todo={todo} />
     
        ))
    }
    </ul>
    </article>
  )
}

export default Todos