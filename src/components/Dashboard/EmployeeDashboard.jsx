import React from 'react'
import Header from '../ohters/Header'
import TasklistNumber from '../ohters/TasklistNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
      <Header/>
      <TasklistNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
