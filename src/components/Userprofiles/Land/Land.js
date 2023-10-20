import React, { useEffect } from 'react'
import { MapContainer, Marker, Polygon, Popup, TileLayer, Tooltip, useMap } from 'react-leaflet'
import osm from '../../../Map/Osm'
import "leaflet/dist/leaflet.css"
import './Style.css'
import { fetchcadastreList } from '../../../Api/cadastre/Fetchcadastre'
import { useDispatch, useSelector } from 'react-redux'
import {setCadastre,setError,setLoading} from '../../../redux/Cadastre/Cadastreslice'
import User from '../../../redux/Normaluser/User'
import wellknown from 'wellknown';

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

        // after fetching and storing data
        // inject it to the map
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

  // fetching cadastre data from redux and pass to map
  const cadastre = useSelector((state)=>state.cadastre)
  console.log(cadastre.cadastre)

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
          <Polygon pathOptions={{ color: 'purple' }} positions={test_poly} >
            <Tooltip sticky>discription shows here</Tooltip>
          </Polygon>
        </MapContainer>
    </>
  )
}

export default Land