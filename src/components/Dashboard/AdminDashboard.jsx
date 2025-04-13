import React from 'react'
import Header from '../ohters/Header'
import CreateTask from '../ohters/CreateTask'
import AllTask from '../ohters/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
      <Header changeuser={props.changeuser}/>
<CreateTask/>
<AllTask/>

    </div>


  )
}

export default AdminDashboard
