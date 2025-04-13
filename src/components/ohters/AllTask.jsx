import React from 'react'
import { useContext } from 'react'
import { AuthContex } from '../../context/Authprovider'

const AllTask = () => {
    const authData= useContext(AuthContex)
    console.log(authData.employeData)
    
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-64 '>
        <div className='bg-red-500 py-2 mb-2  px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 '>Employe Name</h2>
            <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed </h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed </h5>


        </div>
        <div className='h-[80%] overflow-auto'>
        {authData.employeData.map(function(elem, idx){
            return  <div key={idx} className='border-2 border-emerald-500 py-2 mb-2  px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium  w-1/5 '>{elem.firstName}</h2>
            <h3 className='text-lg font-medium  w-1/5 text-blue-600'>{elem.taskNumbers.newTask}</h3>
            <h5 className='text-lg font-medium  w-1/5 text-yellow-500'>{elem.taskNumbers.active}</h5>
            <h5 className='text-lg font-medium  w-1/5 text-white-900'>{elem.taskNumbers.completed}</h5>
            <h5 className='text-lg font-medium  w-1/5 text-red-500'>{elem.taskNumbers.failed}</h5>


        </div>
        })}
        </div>
     
    </div>
  )
}

export default AllTask
