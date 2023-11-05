import React from 'react'
import Footer from '../components/Footer/Footer'
import Forhead from '../components/Forhead/Forhead'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Govforhead from '../components/Govforhead/Govforhead'
import Mapsidebar from '../components/Govprofilesidebar/Mapsidebar';
import Landtaxsidebar from '../components/Govprofilesidebar/Landtaxsidebar';
import Indemnitysidebar from '../components/Govprofilesidebar/Indemnitysidebar';
import Blogsidebar from '../components/Govprofilesidebar/Blogsidebar'
import Dashboardsidebar from '../components/Govprofilesidebar/Dashboardsidebar'

import Dashboard from '../components/Govprofiles/Dashboard/Dashboard/Dashboard'
import Notifications from '../components/Govprofiles/Dashboard/Notifications/Notifications'


import Basemap from '../components/Govprofiles/Maps/Basemap/Basemap'
import Addcadastre from '../components/Govprofiles/Maps/Addcadastre/Addcadastre'
import Changeownership from '../components/Govprofiles/Maps/Changeownership/Changeownership'
import Splitcadastre from '../components/Govprofiles/Maps/Splitcadastre/Splitcadastre'

import Taxmap from '../components/Govprofiles/Tax/Taxmap/Taxmap'
import Updatelandtax from '../components/Govprofiles/Tax/Updatelandtax/Updatelandtax'
import Generatetax from '../components/Govprofiles/Tax/Generatetax/Generatetax'


function Govprofilepage() {
  return (
    <>
      <Navigationbar />
      <Forhead forhead_name="Government Profle" />
      <Govforhead />
      

      <Row>

        <Col md={3}>

          <Routes>

            <Route path='/dashboard/*' element={<Dashboardsidebar />} />
            <Route path='/maps/*' element={<Mapsidebar />} />
            <Route path='/land-tax/*' element={<Landtaxsidebar />} />
            <Route path='/indemnity-analysis/*' element={<Indemnitysidebar />} />
            <Route path='/blogs/*' element={<Blogsidebar />} />

          </Routes>
        
        </Col>


        <Col md={9}>

          <Routes>

            {/* gov user dashboard */}
            <Route path='/dashboard/' element={<Dashboard />} />
            <Route path='/dashboard/notifications' element={<Notifications />} />
            
            
            {/* maps */}
            <Route path='/maps/base-map/' element={<Basemap />} />
            <Route path='/maps/add-cadastre/' element={<Addcadastre />} />
            <Route path='/maps/change-ownership/' element={<Changeownership  />} />
            <Route path='/maps/split-cadastre/' element={<Splitcadastre />} />


            {/* land tax */}
            <Route path='/land-tax/tax-map' element={<Taxmap />} />
            <Route path='/land-tax/update-land-tax/' element={<Updatelandtax />} />
            <Route path='/land-tax/generate-land-tax/' element={<Generatetax />} />


            {/* indemnity analysis */}


            {/* blog */}



          </Routes>
          
        </Col>

      </Row>


      <Footer />
    </>
  )
}

export default Govprofilepage