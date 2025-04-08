import React from 'react'

const FailedTask = () => {
  return (
     <div  className=' h-full w-[300px] bg-yellow-200 p-5 flex-shrink-0 rounded-xl'>
     <div className='flex justify-between items-center'>
       <h3 className='bg-red-600 px-3 py-1 '>High</h3>
       <h4>26 march 2025</h4>
     </div>
     <h2 className='mt-5 text-xl font-semibold'>make youtube video</h2>
     <p  className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse veritatis, sed deserunt ducimus a debitis reprehenderit rem temporibus repellat iste ullam soluta mollitia minus aspernatur veniam, vel voluptatem dolor?</p>
     <div className='mt-2'>
          <button className='w-full bg-yellow-400'>Failed Task</button>
        </div>
   </div>
  )
}

export default FailedTask
