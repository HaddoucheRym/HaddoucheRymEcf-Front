import React, { useState } from 'react'
import EditLocation from '../components/EditLocation';
import Location from '../components/Location';


const LocationList = (props) => {
const [selectId, setSelectId] = useState();

    const modifLocation = (newLocation) => {
        props.modifiedLocation(newLocation, props.location.id)
        setSelectId(0)
      }
      
  return (
    <>
      {props.location.id === selectId ? <EditLocation location={props.location} modifLocation={modifLocation}  /> : <Location location={props.location}  deleteLocation={props.deleteLocation} handleClickEdit={setSelectId} />}
      {/* <Location location={props.location}  deleteLocation={props.deleteLocation} handleClickEdit={setSelectId} /> */}
    </>
  )
}

export default LocationList