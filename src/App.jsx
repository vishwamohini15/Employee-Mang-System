import React, { useState } from 'react'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmpolyeeDashboard from './components/Dashboard/EmpolyeeDashboard'
// import './App.css'
import Login from './components/Auth/Login'
import { useEffect } from 'react'
import { getadmin, getLocalStorage, setLocalStorage, setLocalStorageAdm } from './utlis/localstorage'
import { Children } from 'react'

const App = () => {
  // useEffect(() => {
  //   setLocalStorage();
  //   setLocalStorageAdm()
  //   getLocalStorage()
  //   getadmin()
  // },);



  const [user, setUser] = useState(null)

    const handlelogin=(Email,password)=>{
  if (Email=='admin@menubar.com' && password==123) {
    // console.log("this is admin");
    setUser('admin')
  }else  if (Email=='user@menubar.com' && password==123) {
    // console.log("this is user");
    setUser('user')
  }else{
    alert("invalid credentials")
  }      
      
    }
  return (
    <>
    {!user ? <Login  handlelogin={handlelogin}/> : ''}
    {user =='admin' ? <AdminDashboard/> : <EmpolyeeDashboard/>}
    </>
  )
}

export default App
