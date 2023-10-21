import { useSelector } from 'react-redux';
import wellknown from 'wellknown';

// returns land cordinates in the lat,log format
export const get_reversed_cordinates = (cadastre_list)=> {

    // fetching cadastre data from redux and pass to map
    let reveresed_boundary_polygon
    
    // fetch positional cordinates
    const cordinates = Array.isArray(cadastre_list)
    ? cadastre_list.map((i) => {
        // Access the array of coordinates (assuming it's the 'coordinates' property)
        const coordinates = wellknown.parse(i.location_coordinate).coordinates;
        return [coordinates[1],coordinates[0]];
      })
    : [];
    
    // fetch poligons
    const boundary_polygon = Array.isArray(cadastre_list)
    ? cadastre_list.map((i) => {
        // Access the array of coordinates (assuming it's the 'coordinates' property)
        const poly_coordinates = wellknown.parse(i.boundary_polygon).coordinates;
        return poly_coordinates[0];
      })
    : [];

    //reverse polygon from log, lat to lat, log
    reveresed_boundary_polygon = boundary_polygon.map((bounds)=>{
      return bounds.map((cords)=>{
        return [cords[1],cords[0]]
      })
    })
    return reveresed_boundary_polygon
}
  