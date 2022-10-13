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

  useEffect(() => {
    findAlllocataire()
  }, [])

  const findAlllocataire = () => {
    service.findAll().then(data => setLocataires(data))
  }

  const addUser = (newLoctaire) => {
    service.postLocataire(newLoctaire).then(() => {
      findAlllocataire()
    })
  }

  const handleChangeNom = (event) => {
    setNewUser({ ...newUser, name: event.target.value, })
  }

  const handleChangePrenom = (event) => {
    setNewUser({ ...newUser, username: event.target.value, })
  }

  const handleChangedate = (event) => {
    setNewUser({ ...newUser, date: event.target.value, })
  }

  const handleChangeEmail = (event) => {
    setNewUser({ ...newUser, email: event.target.value, })
  }

  const handleChangeTelephone = (event) => {
    setNewUser({ ...newUser, phone: event.target.value, })
  }

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
          <input className='inputNom' type="text" defaultValue={newUser.username} onChange={(event) => handleChangePrenom(event)} placeholder='Prenom' />
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
      </div>
    </>
  )
}

export default AddLocataire