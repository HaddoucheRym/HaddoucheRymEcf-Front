import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import LocataireList from '../layaout/LocataireList';
import { service } from '../service/service';
import './locatairePage.css';


function LocatairePage() {
  const [locataires, setLocataires] = useState([]);

  /* Un crochet qui est appelé après chaque rendu. */
  useEffect(() => {
    findAlllocataire()
  }, [])

  /**
   * Lorsque le composant est monté, appelez le service pour obtenir tous les locataires et définissez
   * l'état avec le résultat.
   */
  const findAlllocataire = () => {
    service.findAll().then(data => setLocataires(data))
  }

  const deleteLocataires = (id) => {
    service.deleteLocataire(id).then(() => {
      findAlllocataire()
    })
  }

  const modifiedLocataire = (locataire, id) => {
    service.putLocataire(locataire, id).then(() => {
      findAlllocataire()
    })
  }
 
  return (
    <>
      <div className='locatairePage'>
        <div className='locataireListPage'>La liste des locataires</div>
        <div className='locataireList-affichage'>
          <ul className="table">
            <li>Nom</li>
            <li className='pseudo' >Pseudo</li>
            <li>date de naissance</li>
            <li className='email'>email</li>
            <li className='telephone'>telephone</li>
            <li></li>
          </ul>
          <hr className='hr-pageLocataire' />
          {locataires.map((locataire, index) => (
            <LocataireList key={index} locataire={locataire} modifiedLocataire={modifiedLocataire} deleteLocataires={deleteLocataires} />
          )
          )
          }
          <NavLink to="/addLocataire" >
            <button className='ajouter'  >Ajouter un locataire</button>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default LocatairePage