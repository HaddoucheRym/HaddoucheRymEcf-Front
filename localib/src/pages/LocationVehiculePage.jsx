import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import LocationVehiculeList from '../layaout/LocationVehiculeList';
import { service } from '../service/service';
import './locationVehiculePage.css';

const LocationVehiculePage = () => {
    const [vehicules, setVehicules] = useState([]);


    useEffect(() => {
        findAllVehicule()
    }, [])

    const findAllVehicule = () => {
        service.findAllV().then(data => setVehicules(data))
    }

  return (
    <>
      <div className='locationvehiculePage'>
        <div className='locationvehiculeListPage'>La liste des vehicules</div>
        <div className='locationvehiculeList-affichage'>
          <ul className="locationtablevehicule">
            <li className='marque'>Marque</li>
            <li className='model'>Model</li>          
            <li className='prix'>Prix</li>
            <li className='etat'>Etat</li>
            <li className='dispo'>Disponibilité</li>
          </ul>
          {vehicules.map((vehicule, index) => (
            <LocationVehiculeList key={index} vehicule={vehicule}  />
            )
            )
          }
          {/* <hr className='hr-pageVehiculelocation' /> */}
        </div>
      </div>
    </>
  )
}

export default LocationVehiculePage