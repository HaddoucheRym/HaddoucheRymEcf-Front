import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { service } from '../service/service';
import './detailLocataire.css'

const DetailLocataire = () => {
  const [locataire, setLocataire] = useState([]);
  const {id} = useParams();
  const [selectedLocataireId, setSelectedLocataireId] = useState(id);

  useEffect(() => {
    findlocataire()
  }, [selectedLocataireId])

  const findlocataire = () => {
    service.findId(selectedLocataireId).then(data => setLocataire(data))
    console.log(selectedLocataireId);
  }

  return (
    <>
    <div className='titre'>DetailLocataire</div>
    <div className='detailLocataire'>
    <p>Nom: {locataire.name}</p>
    <p>Pseudo: {locataire.username}</p>
    <p> Date de naissance: {locataire.date}</p>
    <p>Email:{locataire.email}</p>
    <p>Telephone: {locataire.phone}</p>
    </div>
    </>
  )
}

export default DetailLocataire