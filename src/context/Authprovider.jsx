import React, { createContext, useEffect, useState } from 'react'
import { adminn, employes, setAdminLocalStorage, setLocalStorage } from '../utils/Localstorage'

export const AuthContex=createContext()

const Authprovider = ({children}) => {

     const [userdata, setuserdata] = useState([])

     useEffect(() => {
      setLocalStorage
      setAdminLocalStorage
          const employeData=employes
          const adminData=adminn
          setuserdata({employeData,adminData})
          // console.log(employeData);
     }, [])
     

     
  return (
    <div>
     <AuthContex.Provider  value={userdata}>
     {children}

     </AuthContex.Provider>
    </div>
  )
}

export default Authprovider
