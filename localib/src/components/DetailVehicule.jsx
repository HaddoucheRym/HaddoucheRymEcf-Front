import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { service } from '../service/service';

const DetailVehicule = () => {
  const [vehicule, setVehicule] = useState([]);
  const {id} = useParams();
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
    <div>DetailVehicule</div>
    <p>{vehicule.marque}</p><p>{vehicule.model}</p><p>{vehicule.immatriculation}</p><p>{vehicule.etat}</p>
    </>
  )
}

export default DetailVehicule