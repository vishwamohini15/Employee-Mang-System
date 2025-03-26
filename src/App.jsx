import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setAdminLocalStorage, setLocalStorage,adminn,employes } from './utils/Localstorage'

const App = () => {
  const [user, setuser] = useState(null)

  const hendelLogin=(email, password)=>{
    if (email=='admin@me.com' && password==='123') {
      console.log('this is admin');
      
    }else{
      alert(invalid)
    }
    
  }


  return (
    <>
    {!user ? <Login/> :''}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
  
}

export default App
