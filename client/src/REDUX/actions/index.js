import axios from 'axios';
import { ADDNEW_TODO , DELETE_TODO, GETALL_TODO,TOGGLE_TODO,UPDATE_TODO , TOGGLE_TAB} from './type';
const API_URL = 'http://localhost:8000';

export const addNewTodo = (data)=> async (dispatch)=>{
    try{
       const res = await axios.post(`${API_URL}/todos`, {data});
       dispatch({type: ADDNEW_TODO  , payload:res.data});
    }catch(e){
        console.log('Error is present', e.message)
        alert("Database not connected; connection takes 10 seconds  Try Again!")
    }
}
export const getAllTodos = ()=> async (dispatch) =>{
   try{
       const res = await axios.get(`${API_URL}/todos`);
       dispatch({type: GETALL_TODO, payload:res.data});

   }catch(e){
    console.log("error encounted", e.message);
   }
}
export const toggleTodo = (id)=> async (dispatch) =>{
    try{
      
        const res = await axios.get(`${API_URL}/todos/${id}`);
        
        dispatch({type: TOGGLE_TODO, payload:res.data});
 
    }catch(e){
     console.log("error encounted", e.message);
    }
 }

 export const updateTodo = (id, data) => async(dispatch)=>{
          try{
          const result = await axios.put(`${API_URL}/todos/${id}`, {data});
          dispatch({type: UPDATE_TODO, payload: result.data})
        
          }catch(e){
     console.log("error encounted", e.message);

          }
 }

 export const deleteTodo = (id) => async(dispatch)=>{
    try{ 
        
          const result = await axios.delete(`${API_URL}/todos/${id}`)
          dispatch({type: DELETE_TODO, payload: result.data});
    }catch(e){
         console.log("error encounted in deletion", e.message);
    }
 }

 export const toggleTab = (tab) => async(dispatch) =>{
    try{
      dispatch({type: TOGGLE_TAB, selected:tab});
    }catch(e){
         console.log("error encounted in deletion", e.message);
    }
 }

