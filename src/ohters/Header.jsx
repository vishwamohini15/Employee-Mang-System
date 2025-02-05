import React from 'react'

const Header = ({data}) => {
  console.log(data);
  
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-semibold  '>hello <br /> <span className='text-3xl'>{data.firstName}</span></h1>
      <button className='bg-red-500 text-white rounded-sm px-5 py-2 text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
