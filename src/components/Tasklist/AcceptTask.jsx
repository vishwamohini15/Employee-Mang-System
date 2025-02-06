import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data.taskTitle);
  
  return (
      <div className="h-full w-[300px] bg-red-400 rounded-xl flex-shrink-0 p-5">
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4>11 jan 2025</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
          <p className='mt-2 text-sm'>
           {data.taskDescription}
          </p>
          <div className='flex justify-between mt-4'>
               <button className='bg-green-500 py-1 px-2 text-sm p-3'>Mark as Completed</button>
               <button  className='bg-red-500 py-1 px-2 text-sm p-3' >Mark as Failed</button>

          </div>
      </div>
  )
}

export default AcceptTask
