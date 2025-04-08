  import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/Localstorage'

const Header = ({data}) => {
  // console.log(data);
// const [username, setUsername] = useState("username")  
// localStorage.clear()
// if (!data) {
//   setUsername('Admin')
// }else{
//   setUsername(data.firstName)
// }

 const logoutUser=()=>{
 localStorage.setItem('loggedInuser', '')
 window.location.reload()
 }



  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username</span></h1>
      <button  onClick={logoutUser} className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header
