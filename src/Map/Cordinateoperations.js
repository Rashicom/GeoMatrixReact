import { useSelector } from 'react-redux';
import wellknown from 'wellknown';


// accepting: land cordinates in log, lat format
// returns: land cordinates in lat, log
const format_cords = (land)=>{
    let formated_land = land.map((cords)=>{
        return [cords[1],cords[0]]
    })
    return formated_land
}

// returns land cordinates in the lat,log format
export const get_formated_land_list = (cadastre_list)=> {
    
    // fetch poligons
    let land_details = Array.isArray(cadastre_list)
    ? cadastre_list.map((land) => {
        // Access the array of coordinates (assuming it's the 'coordinates' property)
        let poly_coordinates = wellknown.parse(land.boundary_polygon).coordinates;
        let location_coordinate = wellknown.parse(land.location_coordinate).coordinates;
        
        return {
            "id":land["id"],
            "boundary_polygon" : format_cords(poly_coordinates[0]),
            "location_coordinate" : [location_coordinate[1],location_coordinate[0]],
            "land_type" : land["land_type"],
            "area" : land["area"],
            "land" : land["land"]
        };
      })
    : [];
    return land_details
    
}
  


// returns land cordinates in the lat,log format
export const get_reversed_points = (cadastre_list)=>{

    // fetch positional cordinates
    let points = []
    const cordinates = Array.isArray(cadastre_list)
    ? cadastre_list.map((i) => {
        // Access the array of coordinates (assuming it's the 'coordinates' property)
        points = wellknown.parse(i.location_coordinate).coordinates;
        return [points[1],points[0]];
      })
    : [];
    return points
}
