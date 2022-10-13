import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import VehiculeList from '../layaout/VehiculeList';
import { service } from '../service/service';
import './vehiculePage.css';

const VehiculePage = () => {
  const [vehicules, setVehicules] = useState([]);

  /* Un crochet qui est appelé après chaque rendu. */
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
          <ul className="tablevehicule">
            <li className='marque'>Marque</li>
            <li className='model'>Model</li>
            <li className='immat'>Immatr</li>
            <li className='prix'>Prix</li>
            <li className='etat'>Etat</li>
            <li className='dispo'>Disponibilité</li>
            <li className='type'>Type</li>
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