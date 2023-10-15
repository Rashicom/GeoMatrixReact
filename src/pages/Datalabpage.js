import React from 'react'
import Subnavbar from '../components/Datalab/Subnavbar/Subnavbar'
import Footer from '../components/Footer/Footer'
import Forhead from '../components/Forhead/Forhead'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import Datalabhome from '../components/Datalab/Datalabhome/Datalabhome'

function Datalabpage() {
  return (

    <>
        <Navigationbar/>
        <Forhead forhead_name="Data Lab" />
        <Subnavbar />

        <Datalabhome />

        <Footer/>
    </>
    
  )
}

export default Datalabpage