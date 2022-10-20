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
    prix: "",
    disponibilite: "",
    typeVehicule: ""
  })

  /* C'est un crochet qui est appelé après le montage du composant. */
  useEffect(() => {
    findAllVehicule()
  }, [])

  /**
   * Lorsque le composant est monté, appelez la fonction findAllVehicule, qui appelle la fonction
   * findAllV dans le service, qui renvoie une promesse, qui est ensuite résolue par la fonction
   * setVehicules.
   */
  const findAllVehicule = () => {
    service.findAllV().then(data => setVehicules(data))
  }

  /**
   * Lorsque l'utilisateur cliquera sur le bouton, la fonction appellera le service pour ajouter le
   * nouveau véhicule à la base de données, puis elle appellera la fonction findAllVehicule pour mettre
   * à jour la liste des véhicules.
   */
  const addVehicl = (newVehicule) => {
    service.postVehicule(newVehicule).then(() => {
      findAllVehicule()
    })
  }

  /**
   * Lorsque l'utilisateur modifie la valeur de l'entrée marque, mettez à jour l'état de l'objet
   * newVehicl avec la nouvelle valeur.
   */
  const handleChangeMarque = (event) => {
    setNewVehicl({ ...newVehicl, marque: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur modifie la valeur de l'entrée du modèle, mettez à jour l'état de l'objet
   * newVehicl avec la nouvelle valeur.
   */
  const handleChangeModel = (event) => {
    setNewVehicl({ ...newVehicl, model: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur tape dans le champ de saisie, mettez à jour l'état avec la nouvelle valeur.
   */
  const handleChangeImmatriculation = (event) => {
    setNewVehicl({ ...newVehicl, immatriculation: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur modifie la valeur de l'entrée etat, mettez à jour l'état de l'objet
   * newVehicl avec la nouvelle valeur.
   */
  const handleChangeEtat = (event) => {
    setNewVehicl({ ...newVehicl, etat: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur tape dans le champ de saisie, mettez à jour l'état avec la nouvelle valeur.
   */
  const handleChangePrix = (event) => {
    setNewVehicl({ ...newVehicl, prix: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur modifie la valeur de l'entrée disponibilite, mettez à jour l'état de l'objet
   * newVehicl avec la nouvelle valeur.
   */
  const handleChangeDisponibilite = (event) => {
    setNewVehicl({ ...newVehicl, disponibilite: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur modifie la valeur de l'entrée typeVehicule, mettez à jour l'état newVehicule
   * avec la nouvelle valeur.
   */
  const handleChangeType = (event) => {
    setNewVehicl({ ...newVehicl, typeVehicule: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur clique sur le bouton Enregistrer, l'objet newVehicle est enregistré dans la
   * console, puis ajouté au tableau de véhicules.
   */
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
            <input className='inputNom' type="text" defaultValue={newVehicl.immatriculation} onChange={(event) => handleChangeImmatriculation(event)} placeholder='Immatriculation' />
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
            <input className='inputNom' type="number" defaultValue={newVehicl.prix} onChange={(event) => handleChangePrix(event)} placeholder='Prix' />
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
        <NavLink to="/vehiculePage">
          <button type="button" class="btn btn-danger">Annuler</button>
        </NavLink>
      </div>
    </>
  )
}

export default AddVehicule