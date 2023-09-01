import React from 'react'
import { TABS } from '../REDUX/actions/type'
import { useDispatch } from 'react-redux'
import { toggleTab } from '../REDUX/actions';

const Tab = ({currentTab}) => {
    const dispatch = useDispatch();
  return (
   
    TABS.map(tab=>(
    <button className={tab === currentTab ? 'btn selected' : 'btn'} onClick={()=>dispatch(toggleTab(tab))}>{tab}</button>
   ))
  )
}

export default Tab