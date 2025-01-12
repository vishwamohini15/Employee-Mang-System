import React, { useContext, useState } from 'react'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmpolyeeDashboard from './components/Dashboard/EmpolyeeDashboard'
// import './App.css'
import Login from './components/Auth/Login'
import { useEffect } from 'react'
import { getadmin, getLocalStorage, setLocalStorage, setLocalStorageAdm } from './utlis/localstorage'
import { Children } from 'react'
import { AuthContext } from './contex/Authprovider'

const App = () => {
  // useEffect(() => {
  //   setLocalStorage();
  //   setLocalStorageAdm()
  //   getLocalStorage()
  //   getadmin()
  // },);



  const [user, setUser] = useState(null)
  const authdata=useContext(AuthContext)
  // console.log(authdata.employess.find((e)=>Email==e.Email && password==e.password));

  // useEffect(() => {
  //   if (authdata) {
  //     const loggedInuser=localStorage.getItem("loggedInuser");
  //     if (loggedInuser) {
  //       setUser(loggedInuser.role)
  //     }
  //   }
  // }, [authdata])
  


    const handlelogin=(Email,password)=>{
  if (Email=='admin@menubar.com' && password==123) {
    // console.log("this is admin");
    setUser('admin')
    localStorage.setItem('loggedInuser', JSON.stringify({role:'admin'}))
  }else  if (authdata.employess.find((e)=>Email==e.email && password==e.password)) {
    // console.log("this is user");
    setUser('employess')
    localStorage.setItem('loggedInuser', JSON.stringify({role:'employess'}))

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
