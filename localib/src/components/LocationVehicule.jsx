import React from 'react';
import { NavLink } from 'react-router-dom';
import './locationVehicule.css';

const LocationVehicule = (props) => {


  return (
    <>
      <div >
        <div className='informationVehicule'>
         <img className='imgVehicule' src={props.vehicule.image} alt="" />
          <p>{props.vehicule.marque}</p>
          <p>{props.vehicule.model}</p>
          <p className='prix'>{props.vehicule.prix}</p>
         <p className='etatloc'>{props.vehicule.etat}</p>
          <div>
          {props.vehicule.disponibilite ==="Disponible" ?
          <NavLink to = {"/addLocation/" + props.vehicule.id} >
          <button type="button" className="btn btn-success">{props.vehicule.disponibilite}</button>
          </NavLink> : <p>{props.vehicule.disponibilite}</p>}
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default LocationVehicule