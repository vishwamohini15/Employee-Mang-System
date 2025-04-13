import React, { useState } from 'react'

const CreateTask = () => {
  const [taskTitle, setaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')

  const [newTask, setnewTask] = useState({})

  const submitHandler=(e)=>{
    e.preventDefault()
    // console.log(taskTitle,taskDescription,asignTo,category,date);
 

    setnewTask({taskTitle,taskDescription,date,category,active:false,newtask:true,failed:false, complete:false})

    const data=JSON.parse(localStorage.getItem('employees'))

    data.forEach(elem => {
      if (asignTo == elem.firstName) {
        console.log("yahi hai oo");
        elem.tasks.push(newTask)
        console.log(elem);
        
      }
    });
    console.log((data));
    localStorage.setItem("employees", JSON.stringify(data))
    
    setAsignTo("")
    setCategory("")
    setDate("")
    setTaskDescription("")
    setaskTitle("")
  }


  return (
     <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
     <form 
     onSubmit={(e)=>{
      submitHandler(e)
     }}
     className='flex flex-wrap items-start w-full justify-between'>
          <div className='w-1/2 '>
          <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input 
          value={taskTitle}
          onChange={(e)=>{
            setaskTitle(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px] mb-4' type="text" placeholder='make a UI design'/>
          </div>
          <div>
         <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
         <input
          value={date}
          onChange={(e)=>{
            setDate(e.target.value)
          }}
         className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px] mb-4' type="date" />
         </div>
          <div>
          <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
          <input 
          value={asignTo}
          onChange={(e)=>{
            setAsignTo(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px] mb-4' type="text" placeholder='Employee name' />
          
          </div>
         <div>
           <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
          <input
          value={category}
          onChange={(e)=>{
            setCategory(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border-[1px] mb-4' type="text" placeholder='design, dev, etc'/>
         </div>
          </div>
         
          <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea 
          value={taskDescription}
          onChange={(e)=>{
            setTaskDescription(e.target.value)
          }}
          className='text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-gray-400 border-[1px] mb-4' name="" id="" cols="30" rows='10'></textarea>
          <button className='bg-emerald-500 hover:bg-emerald-600 px-5 p-3 rounded text-sm mt-4 w-full'>Create Task</button>

          </div>

        
     </form>
</div>
  )
}

export default CreateTask
