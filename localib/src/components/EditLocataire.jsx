import React from 'react'
import { useState } from 'react'
import './editLocataire.css'

function EditLocataire(props) {
  const [user, setUser] = useState(props.locataire)

  const modifUser = () => {
    props.modifiedLoc(user)
  }

  const handleChangeNom = (event) => {
    setUser({ ...user, name: event.target.value, })
  }

  const handleChangePrenom = (event) => {
    setUser({ ...user, username: event.target.value, })
  }

  const handleChangeDate = (event) => {
    setUser({ ...user, date: event.target.value, })
  }

  const handleChangeEmail = (event) => {
    setUser({ ...user, email: event.target.value, })
  }

  const handleChangePhone = (event) => {
    setUser({ ...user, phone: event.target.value, })
  }


  return (
    <>
      <div className='modificationLocataire'>

        <p>
          nom: <input type="text" value={user.name} onChange={handleChangeNom} />
        </p>
        <p>
          Username: <input type="text" value={user.username} onChange={handleChangePrenom} />
        </p>
        <p>
          Date: <input type="date" value={user.date} onChange={handleChangeDate} />
        </p>
        <p>
          Email: <input type="email" value={user.email} onChange={handleChangeEmail} />
        </p>
        <p>
          Telephone: <input type="text" value={user.phone} onChange={handleChangePhone} />
        </p>
        <button className='validerModif' onClick={() => modifUser()}>VALIDER</button>
      </div>
      <hr />
    </>
  )
}

export default EditLocataire