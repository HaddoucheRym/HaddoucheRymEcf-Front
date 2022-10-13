import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import VehiculeList from '../layaout/VehiculeList';
import { service } from '../service/service';
import './vehiculePage.css';

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
     <div className='vehiculePage'>
    <div className='vehiculeListPage'>La liste des vehicules</div>
    <div className='vehiculeList-affichage'>
          <ul class="tablevehicule">
            <li>Marque</li>
            <li >Model</li>
            <li>Immatr</li>
            <li>Prix</li>
            <li>Etat</li>
            <li>Disponibilité</li>
            <li>Type</li>
            <li></li>
          </ul>
          <hr className='hr-pageVehicule' />
      {vehicules.map((vehicule, index) => (
        <VehiculeList key={index} vehicule={vehicule} modifiedVehicule={modifiedVehicule} deleteVehicule={deleteVehicule} />
      )
      )
      }
      <NavLink to="/addVehicule" >
        <button className='ajouter'  >Ajouter</button>
      </NavLink>
      </div>
      </div>
    </>
  )
}

export default VehiculePage