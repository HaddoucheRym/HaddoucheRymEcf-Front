import React from 'react';
import { useState } from 'react';
import EditVehicule from '../components/EditVehicule';
import Vehicule from '../components/Vehicule';
import './vehiculeList.css';

const VehiculeList = (props) => {
  const [selectIdV, setSelectIdV] = useState();

  const modifiedVeh = (newVehicule) => {
    props.modifiedVehicule(newVehicule, props.vehicule.id)
    setSelectIdV(0)
  }

  return (
    <>
      <div className='vehiculeList'>
        {props.vehicule.id === selectIdV ? <EditVehicule vehicule={props.vehicule} modifiedVeh={modifiedVeh} /> : <Vehicule vehicule={props.vehicule} deleteVehicule={props.deleteVehicule} handleClickEdit={setSelectIdV} />}
      </div>
    </>
  )
}

export default VehiculeList