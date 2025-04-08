import React from 'react'
import Header from '../ohters/Header'
import TasklistNumber from '../ohters/TasklistNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = ({data}) => {
  // console.log(props);
  
  return (
    <div>
      <Header data={data}/>
      <TasklistNumber data={data}/>
      <TaskList  data={data}/>
    </div>
  )
}

export default EmployeeDashboard
