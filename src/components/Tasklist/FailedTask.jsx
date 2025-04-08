import React from 'react'

const FailedTask = ({data}) => {
  return (
     <div  className=' h-full w-[300px] bg-yellow-200 p-5 flex-shrink-0 rounded-xl'>
     <div className='flex justify-between items-center'>
       <h3 className='bg-red-600 px-3 py-1 '>{data.category}</h3>
       <h4>{data.taskDate}</h4>
     </div>
     <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
     <p  className='text-sm mt-2'>{data.taskDescription}</p>
     <div className='mt-2'>
          <button className='w-full bg-yellow-400'>Failed Task</button>
        </div>
   </div>
  )
}

export default FailedTask
