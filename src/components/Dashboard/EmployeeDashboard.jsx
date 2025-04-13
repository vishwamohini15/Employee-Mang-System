import React from 'react'
import Header from '../ohters/Header'
import TasklistNumber from '../ohters/TasklistNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(props);
  
  return (
    <div>
      <Header changeuser={props.changeuser} data={props.data}/>
      <TasklistNumber data={props.data}/>
      <TaskList  data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
