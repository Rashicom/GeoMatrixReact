import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Forhead from '../components/Forhead/Forhead'
import Govuserlogin from '../components/Login/Govuserlogin/Govuserlogin'
import Userlogin from '../components/Login/Userlogin/Userlogin'
import Navigationbar from '../components/Navigationbar/Navigationbar'


function Loginpage() {
  return (
    <>
        <Navigationbar />
        <Forhead forhead_name="Login" />
        
        <Routes>
          <Route path='/' element={<Userlogin />} />
          <Route path='/govuserlogin' element={<Govuserlogin />} />
          
        </Routes>

        
        <Footer />
    </>
  )
}

export default Loginpage