import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { service } from '../service/service';
import './detailVehicule.css';

const DetailVehicule = () => {
  const [vehicule, setVehicule] = useState([]);
  const { id } = useParams();
  const [selectedVehiculeIdV, setSelectedVehiculeIdV] = useState(id);

  useEffect(() => {
    findVehicule()
  }, [selectedVehiculeIdV])

  const findVehicule = () => {
    service.findIdVehicule(selectedVehiculeIdV).then(data => setVehicule(data))
    console.log(selectedVehiculeIdV);
  }

  return (
    <>
      <div className='detailVehicule-total'>
        <div className='titre'>Detail du Vehicule</div>
        <div className='detailVehicule'>
          <p>Marque: {vehicule.marque}</p>
          <p>Model: {vehicule.model}</p>
          <p>Immatriculation : {vehicule.immatriculation}</p>
          <p>Prix: {vehicule.Prix}</p>
          <p>Disponibilité: {vehicule.disponibilite}</p>
          <p>Type de véhicule: {vehicule.typeVehicule}</p>
        </div>
      </div>
    </>
  )
}

export default DetailVehicule