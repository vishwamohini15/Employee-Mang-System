import React, { createContext, useEffect, useState } from 'react'
import { getadmin, getLocalStorage } from '../utlis/localstorage';

export const AuthContext=createContext()

const Authprovider = ({children}) => {

  const [userData, setuserData]=useState(null);

  useEffect(() => {
    const employess=getLocalStorage
    const admin= getadmin
  setuserData({employess, admin})
  console.log(employess,admin);
  }, [])
  
  
  return (
    <div>
      <AuthContext.Provider value={userData}>
      {children}

      </AuthContext.Provider>
    </div>
  )
}

export default Authprovider
