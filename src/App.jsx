import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setAdminLocalStorage, setLocalStorage,adminn,employes } from './utils/Localstorage'
import { AuthContex } from './context/Authprovider'
// import { data } from 'autoprefixer'

const App = () => {
  const [user, setuser] = useState(null)
  const [loggedinUserData, setLoggedinUserData] = useState(null)
  const [userdata, setuserdata]=useContext(AuthContex)
  // console.log(authData.employeData);

 useEffect(() => {
   const logoinnuUser=localStorage.getItem('loggedInuser')
   if (logoinnuUser) {
const userData=JSON.parse(logoinnuUser)    
setuser(userData.role)
setLoggedinUserData(userData.data)
   }
   
 },[])
 

  const hendelLogin=(email, password)=>{
    if (email=='admin@me.com' && password=='123') {
      setuser( 'admin')
      localStorage.setItem('loggedInuser', JSON.stringify({role:'admin'}))
    }else if (userdata) {
      const employe=userdata.find((e)=>email==e.email && e.password==password)
      if (employe) {
        setuser('employee')
        setLoggedinUserData(employe)
      localStorage.setItem('loggedInuser', JSON.stringify({role:'employee', data:employe}))
      }
    }
    else{
      alert("invalid credential")
    }
  }

 
 
  return (
    <>
    {!user ? <Login  hendelLogin={hendelLogin}/> :''}
    {user=="admin" ?<AdminDashboard  changeuser={setuser}/> : (user == 'employee' ? <EmployeeDashboard  changeuser={setuser} data={loggedinUserData}/> : null)}
    </>
  )
  
}

export default App
