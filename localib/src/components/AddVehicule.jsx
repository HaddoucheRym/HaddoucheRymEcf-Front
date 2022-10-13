import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import uuid from 'react-uuid';
import { service } from '../service/service';
import './addVehicule.css';

const AddVehicule = () => {
  const [vehicules, setVehicules] = useState([]);
  const [newVehicl, setNewVehicl] = useState({
    id: uuid(),
    marque: "",
    model: "",
    immatriculation: "",
    etat: "",
    prix: 0,
    disponibilite: "",
    typeVehicule: ""
  })

  useEffect(() => {
    findAllVehicule()
  }, [])

  const findAllVehicule = () => {
    service.findAllV().then(data => setVehicules(data))
  }

  const addVehicl = (newVehicule) => {
    service.postVehicule(newVehicule).then(() => {
      findAllVehicule()
    })
  }

  const handleChangeMarque = (event) => {
    setNewVehicl({ ...newVehicl, marque: event.target.value, })
  }

  const handleChangeModel = (event) => {
    setNewVehicl({ ...newVehicl, model: event.target.value, })
  }

  const handleChangeImmatriculation = (event) => {
    setNewVehicl({ ...newVehicl, immatriculation: event.target.value, })
  }

  const handleChangeEtat = (event) => {
    setNewVehicl({ ...newVehicl, etat: event.target.value, })
  }

  const handleChangePrix = (event) => {
    setNewVehicl({ ...newVehicl, prix: event.target.value, })
  }

  const handleChangeDisponibilite = (event) => {
    setNewVehicl({ ...newVehicl, disponibilite: event.target.value, })
  }

  const handleChangeType = (event) => {
    setNewVehicl({ ...newVehicl, typeVehicule: event.target.value, })
  }

  const handleClickSave = () => {
    console.log(newVehicl);
    addVehicl(newVehicl)
  }


  return (
    <>
    <div className='FormulaireVehicule'>
    <div className='titreAjout'>Ajouter un véhicule</div>
      <div>
        <p>
          <input className='inputNom' type="text" value={newVehicl.marque} onChange={(event) => handleChangeMarque(event)} placeholder='Marque' />
        </p>
        <p>
          <input className='inputNom' type="text" defaultValue={newVehicl.model} onChange={(event) => handleChangeModel(event)} placeholder='Model' />
        </p>
        <p>
          <input className='inputNom' type="text" defaultValue={newVehicl.immatriculation} onChange={(event) => handleChangeImmatriculation(event)} placeholder='immatriculation' />
        </p>
        <p>
          <select name="pets" id="pet-select" value={newVehicl.etat} onChange={(event) => handleChangeEtat(event)}>
            <option value="">--Etat--</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>

        </p>
        <p>
          
          <input className='inputNom' type="number" defaultValue={newVehicl.prix} onChange={(event) => handleChangePrix(event)} placeholder='prix' />
        </p>
        <p>
        <select name="pets" id="pet-select" defaultValue={newVehicl.disponibilite} onChange={(event) => handleChangeDisponibilite(event)}>
            <option value="">--Disponibilité--</option>
            <option value="Disponible">Disponible</option>
            <option value="Pas disponible">Pas disponible</option>
          </select>
        </p>
        <p>
          <select name="pets" id="pet-select" defaultValue={newVehicl.typeVehicule} onChange={(event) => handleChangeType(event)}>
            <option value="">--Type--</option>
            <option value="Voiture">Voiture</option>
            <option value="Moto">Moto</option>
            <option value="Camion">Camion</option>
            <option value="Utilitaire">Utilitaire</option>
          </select>

        </p>
      </div>
      <NavLink to="/vehiculePage" >
        <button className='ajouter' onClick={handleClickSave} >valider</button>
      </NavLink>
      </div>
    </>
  )
}

export default AddVehicule