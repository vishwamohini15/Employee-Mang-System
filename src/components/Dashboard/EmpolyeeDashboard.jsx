import React from 'react'
import Header from '../../ohters/Header'
import Tasklistnumber from '../../ohters/Tasklistnumber'
import TaskList from '../Tasklist/TaskList'

const EmpolyeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header/>
      <Tasklistnumber/>
      <TaskList/>
    </div>
  )
}

export default EmpolyeeDashboard
