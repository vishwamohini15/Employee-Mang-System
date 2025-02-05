import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTasj from './CompleteTasj'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full mt-10 flex items-center justify-start gap-5 py-4 flex-nowrap'>
   
      {data.tasks.map((elem, idx)=>{

        if(elem.active){
          return <AcceptTask  key={idx}/>
        }
        if(elem.newTask){
          return <NewTask  key={idx}/>
        }
        if (elem.completed) {
          return <CompleteTasj  key={idx}/>
        }
        if (elem.failed) {
          return <FailedTask  key={idx}/>
        }
      })}

      {/* <div className="h-full w-[300px] bg-red-400 rounded-xl flex-shrink-0 p-5">
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4>11 jan 2025</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>make a yourtube video</h2>
          <p className='mt-2 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus exercitationem qui eveniet sed reprehenderit nesciunt hic dolorem ad.
          </p>
      </div> */}

    </div>
  )
}

export default TaskList
