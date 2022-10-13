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
        <div className='allButton'>
        <NavLink to={"/locataire/" + props.locataire.id}>
          <button type="button" className="btn-info"><i className="bi bi-info-circle"></i></button>
        </NavLink>
        <button type = "button" className='modifier' onClick={() => props.handleClickEdit(props.locataire.id)}><i className="bi bi-pencil-square"></i></button>
        <button type="button" className="danger" onClick={() => supprimerLocataire()}><i className="bi bi-trash"></i></button>
        </div>
        </div>
      </div>
        <hr />
    </>
  )
}

export default Locataire