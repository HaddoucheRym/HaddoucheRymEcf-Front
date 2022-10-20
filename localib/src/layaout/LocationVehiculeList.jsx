import React from 'react'
import LocationVehicule from '../components/LocationVehicule'

const LocationVehiculeList = (props) => {
  return (
    <>
      <div className='vehiculeList'>
        <LocationVehicule vehicule={props.vehicule}  />
      </div>
    </>
  )
}

export default LocationVehiculeList