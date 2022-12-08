import React from 'react'
import './location.css';

const Location = (props) => {
  console.log(props);
  const supprimerLocations = () => {
    props.deleteLocation(props.location.id)
  }


  return (
    <>
    <div >
        <div className='informationLocation'>
          <p>{props.location.locataire.name}</p>
          <p>{props.location.vehicule.marque}
           {props.location.vehicule.model}</p>
          <p className='immat'>{props.location.dateDebut}</p>
          <p className='prix'>{props.location.dateFin}</p>
          <p className='dispo'>{props.location.prixt}</p>
          <div className='allButton'>
            <button type="button" className='modifier' onClick={() => props.handleClickEdit(props.location.id)}><i className="bi bi-pencil-square"></i></button>
            <button type="button" className="danger" onClick={() => supprimerLocations()}><i className="bi bi-trash"></i></button>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Location