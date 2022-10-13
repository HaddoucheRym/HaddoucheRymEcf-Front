import React from 'react';
import { useState } from 'react';
import EditVehicule from '../components/EditVehicule';
import Vehicule from '../components/Vehicule';

const VehiculeList = (props) => {
  const [selectIdV, setSelectIdV] = useState();

  const modifiedVeh = (newVehicule) => {
    props.modifiedVehicule(newVehicule, props.vehicule.id)
    setSelectIdV(0)
  }

  return (
    <>
      {props.vehicule.id === selectIdV ? <EditVehicule vehicule={props.vehicule} modifiedVeh={modifiedVeh} /> : <Vehicule vehicule={props.vehicule} deleteVehicule={props.deleteVehicule} handleClickEdit={setSelectIdV} />}
    </>
  )
}

export default VehiculeList