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
  const [logedinUserData, setLogedinUserData] = useState(null)
  const authdata=useContext(AuthContext)
  // console.log(authdata.employess.find((e)=>Email==e.Email && password==e.password));

  useEffect(()=>{
    const loggedinUser= localStorage.getItem('loggedInuser')
  if (loggedinUser) {
  const userData = JSON.parse(lo)    
  }    
  })
  


    const handlelogin=(Email,password)=>{
  if (Email=='admin@menubar.com' && password==123) {
    // console.log("this is admin");
    setUser('admin')
    localStorage.setItem('loggedInuser', JSON.stringify({role:'admin'}))
  }else  if (authdata) {
    // console.log("this is user");
    const empolyee=authdata.employess.find((e)=>Email==e.email && password==e.password)
    if (empolyee) {
      setUser('employess')
      setLogedinUserData(empolyee)
    localStorage.setItem('loggedInuser', JSON.stringify({role:'employess'}))
    }

  }else{
    alert("invalid credentials")
  }      
    }

  
    
  return (
    <>
    {!user ? <Login  handlelogin={handlelogin}/> : ''}
    {user =='admin' ? <AdminDashboard/> : (user == 'employess' ? <EmpolyeeDashboard data={logedinUserData} /> : null)}
    </>
  )
}

export default App
