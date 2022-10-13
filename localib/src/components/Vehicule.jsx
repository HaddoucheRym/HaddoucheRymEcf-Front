import React from 'react';
import { NavLink } from 'react-router-dom'

const Vehicule = (props) => {

  const supprimerVehicule = () => {
    props.deleteVehicule(props.vehicule.id)
  }

  return (
    <>
    <div >

      <p>
        Marque: {props.vehicule.marque}
      </p>
      <p>
        Model: {props.vehicule.model}
      </p>
      <p>
        Immatriculation: {props.vehicule.immatriculation}
      </p>

      <button type="button" className="btn btn-danger" onClick={() => supprimerVehicule()}>supprimer</button>
      <button onClick={() => props.handleClickEdit(props.vehicule.id)}>modifier</button>
      <NavLink to={"/vehicule/" + props.vehicule.id}>
        <button type="button" className="btn btn-info">Info</button>
      </NavLink>
    </div>
  </>
  )
}

export default Vehicule