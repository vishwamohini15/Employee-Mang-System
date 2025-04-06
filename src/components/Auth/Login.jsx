import React, { useState } from 'react'

const Login = ({hendelLogin}) => {
     // console.log(hendelLogin);
     
     const [email, setEmail] = useState()
     const [password, setPassword] = useState()

     function submithandler(e){
          e.preventDefault()
          hendelLogin(email, password)
          setEmail("")
          setPassword("")
          
          
     }

  return (
    <div  className='flex items-center justify-center h-screen w-screen'>
     <div className='border-2 border-emerald-600 p-20 rounded-xl'>
          <form className='flex flex-col items-center justify-center' onClick={submithandler}>
               <input required className='border-2 text-white outline-none bg-transparent border-emerald-600 text-xl  py-3 px-5 rounded-full placeholder:text-white' type="email" placeholder='Enter your Email'
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               />

               <input required className='border-2 text-white outline-none bg-transparent border-emerald-600 text-xl  py-3 px-5 rounded-full placeholder:text-white mt-7'  type="password" placeholder='Enter your password' 
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               />
               <button  className='border-2 text-black outline-none bg-emerald-700 border-emerald-600 text-xl  py-3 px-5 rounded-full placeholder:text-white mt-7'>Log-in</button>
          </form>
     </div>
      
    </div>
  )
}

export default Login
