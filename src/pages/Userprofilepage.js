import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer/Footer'
import Forhead from '../components/Forhead/Forhead'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import Userprofilesidebar from '../components/Userprofilesidebar/Userprofilesidebar';
import Dashboard from '../components/Userprofiles/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Land from '../components/Userprofiles/Land/Land';
import Tax from '../components/Userprofiles/Tax/Tax';
import Notifications from '../components/Userprofiles/Notifications/Notifications';
import Accounts from '../components/Userprofiles/Accounts/Accounts';
import Taxpayment from '../components/Userprofiles/Taxpayment/Taxpayment';


function Userprofilepage() {
  return (
    <>
        <Navigationbar />
        <Forhead forhead_name="User Profile" />
        <Row>
          <Col md={3}>
            <Userprofilesidebar />
          </Col>
          <Col md={9}>
            
            <Routes>
              <Route path='/dashboard/' element={<Dashboard />} />
              <Route path='/land/' element={<Land />} />
              <Route path='/tax/' element={<Tax />} />
              <Route path='/notifications/' element={<Notifications />} />
              <Route path='/accounts/' element={<Accounts />} />
              <Route path='tax/taxpayment/:tax_invoice_id' element={<Taxpayment />} />
            </Routes>
            
          </Col>

        </Row>
        <Footer />
    </>
  )
}

export default Userprofilepage