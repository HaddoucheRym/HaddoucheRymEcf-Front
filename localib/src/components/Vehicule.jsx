import React from 'react';
import { NavLink } from 'react-router-dom';
import './vehicule.css';

const Vehicule = (props) => {

  const supprimerVehicule = () => {
    props.deleteVehicule(props.vehicule.id)
  }

  return (
    <>
      <div >
        <div className='informationVehicule'>
          <p>{props.vehicule.marque}</p>
          <p>{props.vehicule.model}</p>
          <p className='immat'>{props.vehicule.immatriculation}</p>
          <p className='prix'>{props.vehicule.prix}</p>
          <p className='etat'>{props.vehicule.etat}</p>
          <p className='dispo'>{props.vehicule.disponibilite}</p>
          <p className='typeVehicule'>{props.vehicule.typeVehicule}</p>
          <div className='allButton'>
          <NavLink to={"/vehicule/" + props.vehicule.id}>
              <button type="button" className="btn-info"><i className="bi bi-info-circle"></i></button>
            </NavLink>
            <button className='modifier' onClick={() => props.handleClickEdit(props.vehicule.id)}><i className="bi bi-pencil-square"></i></button>
            <button type="button" className="danger" onClick={() => supprimerVehicule()}><i className="bi bi-trash"></i></button>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Vehicule