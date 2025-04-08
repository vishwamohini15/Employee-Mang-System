import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='taskuu' className='h-80 overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5 bg-red-500 mt-10'>
    {data.tasks.map((elem, idx)=>{
      if (elem.active) {
        return <AcceptTask key={idx}  data={elem}/>
      }
       if (elem.newTask) {
        return <NewTask  key={idx} data={elem}/>
      }
      if (elem.completed) {
        return <CompleteTask key={idx} data={elem}/>
      }
      if (elem.failed) {
        return <FailedTask key={idx} data={elem}/>
      }
    })}

     
      
     
    
    </div>
  )
}

export default TaskList
