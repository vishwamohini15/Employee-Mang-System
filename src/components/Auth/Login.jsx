import React, { useState } from 'react'

const Login = ({ hendelLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function submithandler(e) {
    e.preventDefault()
    hendelLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='login min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='border-2 border-emerald-600 p-6 sm:p-10 md:p-14 lg:p-20 rounded-xl w-full max-w-md'>
        <form className='flex flex-col items-center justify-center' onSubmit={submithandler}>
          <input
            required
            className='border-2 text-white outline-none bg-transparent border-emerald-600 text-base sm:text-lg md:text-xl py-3 px-5 rounded-full placeholder:text-white w-full'
            type="email"
            placeholder='Enter your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            required
            className='border-2 text-white outline-none bg-transparent border-emerald-600 text-base sm:text-lg md:text-xl py-3 px-5 rounded-full placeholder:text-white mt-5 w-full'
            type="password"
            placeholder='Enter your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className='border-2 text-white outline-none bg-emerald-700 border-emerald-600 text-base sm:text-lg md:text-xl py-3 px-5 rounded-full mt-7 w-full hover:bg-emerald-800 transition'>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
