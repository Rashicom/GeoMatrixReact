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
  if (cadastre_list) {
    // this method accept cadastre list and return formated land list which is in lat, log formated
    
    land_list = get_formated_land_list(cadastre_list)
  }
  

  // centere position of the map
  const position = [9.939093, 76.270523]
  const test_poly = [
    [9.96671265,76.23393904],
    [9.98117685,76.27856238],
    [9.84151494,76.34521496],
    [9.80589445,76.26387622],
    [9.96671265,76.23393904]
  ]
  
  return (
    <>
        <h3>Land Map</h3>
        <MapContainer center={position} zoom={13} >
          <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
          
          {
            land_list.map((land,index)=>(
              <Polygon pathOptions={{ color: 'red' }} positions={land["boundary_polygon"]} >
                <Tooltip sticky>  

                  {/* card to show land information when mouse hover on the land */}
                  <Card bg={'Primary'} style={{ width: '17rem' }} className="">
                    <Card.Body>
                      <Card.Title><p>Land type : {land["land_type"]}</p></Card.Title>
                      <Card.Text>
                        <p>Land number : {land["area"]}</p>
                        <p>Area : {land["area"]}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  
                </Tooltip>
              </Polygon>
            ))
          }
          {/* <Polygon pathOptions={{ color: 'red' }} positions={test_poly} >
            <Tooltip sticky>hello there</Tooltip>
          </Polygon> */}
          
        </MapContainer>
        
    </>
  )
}

export default Land