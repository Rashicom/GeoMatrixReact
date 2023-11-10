import React, { useEffect, useRef } from 'react'
import { MapContainer, Marker, Polygon, Polyline, Popup, TileLayer, Tooltip, useMap } from 'react-leaflet'
import osm from '../../../../Map/Osm'
import "leaflet/dist/leaflet.css"
import './Style.css'
import { useDispatch, useSelector } from 'react-redux'

import Card from 'react-bootstrap/Card';
import { fetch_govcadastreList } from '../../../../Api/cadastre/Fetchcadastre'
import {setCadastre,setError,setLoading} from '../../../../redux/Cadastre/Cadastreslice'
import { get_formated_land_list, get_reversed_points } from '../../../../Map/Cordinateoperations'
import { fetch_active_taxes } from '../../../../Api/cadastre/taxApis'
import { setTaxlist } from '../../../../redux/govuser/govuser'


function Taxmap() {

  const dispatch = useDispatch()
  let cadastre_list = useSelector((state)=>state.cadastre.cadastre)
  let tax_list = useSelector((state)=>state.govuser.taxlist)
  let land_color = useRef("green")

  useEffect(()=> {
    console.log("load map")

    //calling api fetching cadastre data
    const fetch_govcadastredata = async()=> {
      dispatch(setLoading(true))
      const response = await fetch_govcadastreList()
      dispatch(setLoading(false))         
      dispatch(setCadastre(response))
      console.log("land fetch api.")
            
    }

    //calling api for tax details
    const fetch_taxlist = async()=> {
      try{
        const response = await fetch_active_taxes()
        dispatch(setTaxlist(response))
      }
      catch(error) {
        console.log(error)
      }
      
    }

    // if there is no cadastre list found call api to fetch it
    if (! cadastre_list) {
      fetch_govcadastredata()
    }
    else{
      console.log("land already exist")
    }

    // if there is no tax list found, call api to fetch it
    if (! tax_list) {
      console.log("taxlist not found calling api")
      fetch_taxlist()
    }
    else{
      console.log("taxlist already exist")
    }

  },[])

  let land_list = []
  let centre = [9.9,76.3]

  if (cadastre_list) {

    // this method accept cadastre list and return formated land list which is in lat, log formated
    land_list = get_formated_land_list(cadastre_list)
    let land_points = get_reversed_points(cadastre_list)
    centre = land_points[0]
    
  }

  return (
    <>
      <h3>Tax Map</h3>
        <MapContainer center={centre} zoom={13} >
          <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
          
          { 
            //going through land list
            land_list.map((land,index)=>{
              
              // if tax list exist going through tax list
              // to find out which land is to be pay the tax
              // changing the color accordingly
              if (tax_list) {
                for (const invoice of tax_list) {
                  console.log(land.land.land_number,invoice.land)
                  if (invoice.land == land.land.land_number) {
                    land_color.current = "red"
                    console.log("check")
                    break

                  }
                  else{
                    land_color.current = "green"

                  }
                }
              }
              
              return(
              
              <Polygon key={index} pathOptions={{ color: land_color.current }} positions={land["boundary_polygon"]} >
                
                <Tooltip sticky>  
                  {/* card to show land information when mouse hover on the land */}
                  <Card style={{ width: '17rem' }} className="">
                    <Card.Body>
                      <Card.Title><p>Land type : {land["land_type"]}</p></Card.Title>
                      <Card.Text>
                        <p>Land number : {land["area"]}</p>
                        <p>Area : {land["area"]}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Tooltip>

                <Popup className='m-o'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Header>Land Number : {land["land"]["land_number"]}</Card.Header>
                    <Card.Body>
                      <Card.Title>Land type : {land["land_type"]}</Card.Title>
                      <Card.Text>
                        <p className='m-1'>Area     : {land["area"]}</p>
                        <p className='m-1'>Locality : {land["land"]["locality"]}</p>
                        <p className='m-1'>District : {land["land"]["district"]}</p>
                        <p className='m-1'>State    : {land["land"]["state"]}</p>
                        <p className='m-1'>Zip code : {land["land"]["zip_code"]}</p>
                        <p className='m-1'>Registered from : {land["land"]["active_from"]}</p>

                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Popup>
              
              </Polygon>
            )})
          }
        </MapContainer>
    </>
  )
}

export default Taxmap