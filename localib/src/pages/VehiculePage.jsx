import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import VehiculeList from '../layaout/VehiculeList';
import { service } from '../service/service';

const VehiculePage = () => {
  const [vehicules, setVehicules] = useState([]);

  useEffect(() => {
    findAllVehicule()
  }, [])

  const findAllVehicule = () => {
    service.findAllV().then(data => setVehicules(data))
  }

  const deleteVehicule = (id) => {
    service.deleteVehicule(id).then(() => {
      findAllVehicule()
    })
  }

  const modifiedVehicule = (vehicule, id) => {
    service.putVehicule(vehicule, id).then(() => {
      findAllVehicule()
    })
  }

  return (
    <>
    <div>VehiculePage</div>
      {vehicules.map((vehicule, index) => (
        <VehiculeList key={index} vehicule={vehicule} modifiedVehicule={modifiedVehicule} deleteVehicule={deleteVehicule} />
      )
      )
      }
      <NavLink to="/addVehicule" >
        <button className='ajouter'  >Ajouter</button>
      </NavLink>
    </>
  )
}

export default VehiculePage