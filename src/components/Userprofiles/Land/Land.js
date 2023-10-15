import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import osm from '../../../Map/Osm'
import "leaflet/dist/leaflet.css"
import './Style.css'
import { fetchcadastreList } from '../../../Api/cadastre/Fetchcadastre'
import { useDispatch, useSelector } from 'react-redux'
import {setCadastre,setError,setLoading} from '../../../redux/Cadastre/Cadastreslice'


function Land() {

  const cadastre = useSelector((state)=>state.cadastre)
  const dispatch = useDispatch()

  // when the Land componet is called we have to make a api request to the server to fetch all the information
  useEffect( ()=> {
    console.log("call for cordinates")
    const fetchcadastredata = async ()=> {
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
        dispatch(setError(error.data.details))
        let statusCode = error.status
        // if status code is 401(naoutherized , we have to handle refresh tocken)
      }
    }
    fetchcadastredata()
  },[])
  // centere position of the map
  const position = [9.939093, 76.270523]
  
  
  return (
    <>
        <h3>Land Map</h3>
        <MapContainer center={position} zoom={13} >
          <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
        </MapContainer>
    </>
  )
}

export default Land