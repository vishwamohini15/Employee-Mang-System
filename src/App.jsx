import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setAdminLocalStorage, setLocalStorage,adminn,employes } from './utils/Localstorage'
import { AuthContex } from './context/Authprovider'

const App = () => {
  const [user, setuser] = useState(null)
  const authData=useContext(AuthContex)
  console.log(authData.employeData);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInuser = localStorage.getItem("loggedInuser")
  //     if (loggedInuser) {
  //       // setuser(loggedInuser, 'role')
  //     }
  //   }
  // }, [authData])
  

  const hendelLogin=(email, password)=>{
    if (email=='admin@me.com' && password=='123') {
      setuser('admin')
      localStorage.setItem('loggedInuser', JSON.stringify({role:'admin'}))
    }else if (authData && authData.employeData.find((e)=>email==e.email && e.password==password)) {
      console.log("this is user");
      setuser('employee')
      localStorage.setItem('loggedInuser', JSON.stringify({role:'employee'}))

    }
    else{
      alert("invalid credential")
    }
  }

 
 
  return (
    <>
    {!user ? <Login  hendelLogin={hendelLogin}/> :''}
    {user=="admin" ? <AdminDashboard/> : <EmployeeDashboard/> }
    </>
  )
  
}

export default App
