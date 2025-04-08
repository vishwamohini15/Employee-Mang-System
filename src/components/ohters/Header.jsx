  import React, { useState } from 'react'

const Header = ({data}) => {
  // console.log(data);
// const [username, setUsername] = useState("username")  
// localStorage.clear()
// if (!data) {
//   setUsername('Admin')
// }else{
//   setUsername(data.firstName)
// }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username</span></h1>
      <button className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header
