import React from 'react'
import Footer from '../components/Footer/Footer'
import Forhead from '../components/Forhead/Forhead'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Usersignup from '../components/Signup/Usersignup/Usersignup';
import Govsignup from '../components/Signup/Govusersignup/Govsignup';


function Signuppage() {
  return (
    <> 
            <Navigationbar />
            <Forhead />

            <Routes>
                
                <Route path="usersignup" element={<Usersignup />} />
                <Route path="govsignup" element={<Govsignup />} />
                
            </Routes>
            
            <Footer />     

    </>
  )
}

export default Signuppage