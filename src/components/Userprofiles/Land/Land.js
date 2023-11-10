import React, { useEffect } from 'react'
import { MapContainer, Marker, Polygon, Polyline, Popup, TileLayer, Tooltip, useMap } from 'react-leaflet'
import osm from '../../../Map/Osm'
import "leaflet/dist/leaflet.css"
import './Style.css'
import Card from 'react-bootstrap/Card';
import { fetchcadastreList } from '../../../Api/cadastre/Fetchcadastre'
import { useDispatch, useSelector } from 'react-redux'
import {setCadastre,setError,setLoading} from '../../../redux/Cadastre/Cadastreslice'
import User from '../../../redux/Normaluser/User'
import wellknown from 'wellknown';
import { get_formated_land_list, get_reversed_points } from '../../../Map/Cordinateoperations'
import { useState } from 'react'

function Land() {
  
  const dispatch = useDispatch()
  // when the Land componet is called we have to make a api request to the server to fetch all the information
  useEffect( ()=> {
    console.log("call for cordinates")
    
    const fetchCadastredata = async ()=> {
      // call api to fetch land details of the user
      
      let response
      try {
        dispatch(setLoading(true))
        response = await fetchcadastreList()
        dispatch(setLoading(false))
        dispatch(setCadastre(response))
      }

      catch (error) {
        dispatch(setLoading(false))

        // dispatch(setError(error.data.details))
        //let statusCode = error.status
        console.log("exception")
        console.log(error)

        // if status code is 401(unautherized , we have to handle refresh tocken)
      }
    }
    fetchCadastredata()
  },[])


  let cadastre_list = useSelector((state)=>state.cadastre.cadastre)
  
  // api call inside the useEffect is async function, so cadastral_list fetched before api call full filled
  // after api call full filled, desparch function rerender the componet
  // so check the cadasral_list is empty or not , then pass data to the map
  let land_list = []
  let centre = [9.9,76.3]

  if (cadastre_list) {
    // this method accept cadastre list and return formated land list which is in lat, log formated
    land_list = get_formated_land_list(cadastre_list)
    let land_points = get_reversed_points(cadastre_list)
    centre = land_points[0]
    
  }
  // centere position of the map, just take first positon cordinate from the point list
  

  
  return (
    <>
        <h3>Land Map</h3>
        <MapContainer center={centre} zoom={13} >
          <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
          
          {
            land_list.map((land,index)=>(
              <Polygon key={index} pathOptions={{ color: 'red' }} positions={land["boundary_polygon"]} >
                
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
            ))
          }
        </MapContainer>
        
    </>
  )
}

export default Land