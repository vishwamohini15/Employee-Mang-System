import React, { useState } from 'react'
import { setLocalStorage } from '../utlis/localstorage'
import Login from '../components/Auth/Login'

const Header = ({data}) => {
  // console.log(data);

  // const[username, setusername]=useState('')

  // if (!data) {
  //   setusername('admin')
  // }else{
  //   setusername(data.firstName)
  // }


  const logoutUser=()=>{
    localStorage.setItem('loggedinUser', " ")
    window.location.reload()
  }
  
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-semibold  '>hello <br /> <span className='text-3xl'>username</span></h1>
      <button  onClick={logoutUser} className='bg-red-500 text-white rounded-sm px-5 py-2 text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
