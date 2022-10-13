import React from 'react'
import { NavLink } from 'react-router-dom';
import './locataire.css';

function Locataire(props) {

  const supprimerLocataire = () => {
    props.deleteLocataires(props.locataire.id)
  }

  return (
    <>
      <div >
        <div className='information'>    
        <p>{props.locataire.name}</p>
        <p>{props.locataire.username}</p>
        <p>{props.locataire.date}</p>
        <p>{props.locataire.email}</p>
        <p>{props.locataire.phone}</p>
        </div>
        <button type="button" className="btn btn-danger" onClick={() => supprimerLocataire()}>supprimer</button>
        <button onClick={() => props.handleClickEdit(props.locataire.id)}>modifier</button>
        <NavLink to={"/locataire/" + props.locataire.id}>
          <button type="button" className="btn btn-info">Info</button>
        </NavLink>
        <hr />
      </div>
    </>
  )
}

export default Locataire