import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import uuid from 'react-uuid';
import { service } from '../service/service';
import './AddLocataire.css'


const AddLocataire = () => {
  const [locataires, setLocataires] = useState([]);
  const [newUser, setNewUser] = useState({
    id: uuid(),
    name: "",
    username: "",
    email: "",
    phone: ""
  })

  /* Un crochet qui est appelé après chaque rendu. */
  useEffect(() => {
    findAlllocataire()
  }, [])

  /**
   * Il appelle la fonction service.findAll(), qui renvoie une promesse, puis il appelle setLocataires()
   * avec les données renvoyées par la promesse.
   */
  const findAlllocataire = () => {
    service.findAll().then(data => setLocataires(data))
  }

  /**
   * Lorsque l'utilisateur cliquera sur le bouton, la fonction appellera le service pour publier le
   * nouvel utilisateur, puis appellera la fonction findAlllocataire pour mettre à jour la liste des
   * utilisateurs.
   */
  const addUser = (newLoctaire) => {
    service.postLocataire(newLoctaire).then(() => {
      findAlllocataire()
    })
  }

  /**
   * Lorsque l'utilisateur tape dans le champ de saisie, la valeur du champ de saisie est définie sur
   * la propriété name de l'objet newUser.
   */
  const handleChangeNom = (event) => {
    setNewUser({ ...newUser, name: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur tape dans le champ de saisie, la valeur du champ de saisie est définie sur
   * la propriété username de l'objet newUser.
   */
  const handleChangePrenom = (event) => {
    setNewUser({ ...newUser, username: event.target.value, })
  }

  /**
   * Lorsque l'entrée de date change, mettez à jour la propriété date de l'objet newUser avec la valeur
   * de l'entrée de date.
   */
  const handleChangedate = (event) => {
    setNewUser({ ...newUser, date: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur tape dans le champ de saisie de l'e-mail, mettez à jour la propriété email
   * de l'objet newUser avec la valeur du champ de saisie.
   */
  const handleChangeEmail = (event) => {
    setNewUser({ ...newUser, email: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur tape dans le champ de saisie, la valeur du champ de saisie est définie sur la
   * propriété phone de l'objet newUser.
   */
  const handleChangeTelephone = (event) => {
    setNewUser({ ...newUser, phone: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur clique sur le bouton Enregistrer, l'objet newUser est enregistré dans la
   * console, puis la fonction addUser est appelée avec l'objet newUser comme argument.
   */
  const handleClickSave = () => {
    console.log(newUser);
    addUser(newUser)
  }


  return (
    <>
      <div className='FormulaireLocataire'>
        <div className='titreAjout'>Ajouter un locataire</div>
        <p>
          <input className='inputNom' type="text" value={newUser.name} onChange={(event) => handleChangeNom(event)} placeholder='Nom' />
        </p>
        <p>
          <input className='inputNom' type="text" defaultValue={newUser.username} onChange={(event) => handleChangePrenom(event)} placeholder='Pseudo' />
        </p>
        <p>
          <input className='inputNom' type="date" defaultValue={newUser.date} onChange={(event) => handleChangedate(event)} placeholder='date' />
        </p>
        <p>
          <input className='inputNom' type="email" defaultValue={newUser.email} onChange={(event) => handleChangeEmail(event)} placeholder='email' />
        </p>
        <p>
          <input className='inputNom' type="text" defaultValue={newUser.phone} onChange={(event) => handleChangeTelephone(event)} placeholder='telephone' />
        </p>
        <NavLink to="/locatairePage" >
          <button className='ajouter' onClick={handleClickSave} >valider</button>
        </NavLink>
        <NavLink to="/locatairePage">
          <button type="button" class="btn btn-danger">Annuler</button>
        </NavLink>
      </div>
    </>
  )
}

export default AddLocataire