import React from 'react'

const NewTask = () => {
  return (
     <div className="h-full w-[300px] bg-blue-400 rounded-xl flex-shrink-0 p-5">
     <div className='flex justify-between items-center'>
       <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
       <h4>11 jan 2025</h4>
     </div>
     <h2 className='mt-5 text-2xl font-semibold'>make a yourtube video</h2>
     <p className='mt-2 text-sm'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus exercitationem qui eveniet sed reprehenderit nesciunt hic dolorem ad.
     </p>
     <div className='mt-4'>
          <button className='bg-blue-600 p-3'>Accepted Task</button>
     </div>
 </div>
  )
}

export default NewTask
