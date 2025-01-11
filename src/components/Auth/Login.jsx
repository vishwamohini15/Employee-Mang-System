import React, { useState } from 'react'

const Login = () => {
const [Email, setemail]=useState("")
const [pasword, setPasword] = useState("")

      const submitHandler=(e)=>{
          e.preventDefault()
          console.log("hello i'm mohini");
          console.log("you email is=", Email);
          console.log("you password is=", pasword);

          setemail("")
          setPasword("")
      }

  return (
    <div className=' flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
          <form 
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'>
               <input required className='border-2 border-emerald-600 rounded-full py-3 px-5 outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your Email' value={Email} onChange={(e)=>setemail(e.target.value)}/>

               <input required className='border-2 border-emerald-600 rounded-full py-3 px-5 outline-none bg-transparent placeholder:text-gray-400 mt-4' type="password" placeholder='Enter your pasword' value={pasword} onChange={(e)=>setPasword(e.target.value)}
               />

               <button className='text-white border-2 hover:bg-emerald-600 rounded-full py-3 px-5 outline-none mt-5 w-full'>Log-In</button>
          </form>
      </div>
    </div>
  )
}

export default Login
