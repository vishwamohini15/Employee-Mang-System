import React from 'react'
import Header from '../../ohters/Header'
import Tasklistnumber from '../../ohters/Tasklistnumber'
import TaskList from '../Tasklist/TaskList'

const EmpolyeeDashboard = ({data}) => {
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
    <h1>{data.id}</h1>      
      <Header  data={data}/>
      <Tasklistnumber  data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmpolyeeDashboard
