import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import EditVehicule from '../components/EditVehicule';
import Vehicule from '../components/Vehicule';
import { service } from '../service/service';
import './vehiculeList.css';

const VehiculeList = (props) => {
  const [selectIdV, setSelectIdV] = useState();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    findAlllocation()
  }, [])

  const findAlllocation = () => {
    service.findAllLocationS().then(data => setLocations(data))
  }

  

  const modifiedVeh = (newVehicule) => {
    props.modifiedVehicule(newVehicule, props.vehicule.id)
    setSelectIdV(0)
  }

  return (
    <>
      <div className='vehiculeList'>
        {props.vehicule.id === selectIdV ? <EditVehicule vehicule={props.vehicule} modifiedVeh={modifiedVeh} /> : <Vehicule vehicule={props.vehicule} setVehicule={props.setVehicule} deleteVehicule={props.deleteVehicule} handleClickEdit={setSelectIdV} />}
      </div>
    </>
  )
}

export default VehiculeList