import React from 'react'
import { useState } from 'react'

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


  return (
    <>
      <p>
        nom: <input type="text" value={user.name} onChange={handleChangeNom} />
      </p>
      <p>
        prenom: <input type="text" value={user.username} onChange={handleChangePrenom} />
      </p>
      <button onClick={() => modifUser()}>Modifier</button>
    </>
  )
}

export default EditLocataire