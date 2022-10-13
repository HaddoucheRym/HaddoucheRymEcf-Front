import React from 'react'
import { useState } from 'react'
import './editLocataire.css'

function EditLocataire(props) {
  const [user, setUser] = useState(props.locataire)

  /**
   * Lorsque l'utilisateur clique sur le bouton, l'emplacement de l'utilisateur est modifié.
   */
  const modifUser = () => {
    props.modifiedLoc(user)
  }

  /**
   * Lorsque l'utilisateur tape dans le champ de saisie, la valeur du champ de saisie est définie sur
   * la propriété name de l'objet utilisateur.
   */
  const handleChangeNom = (event) => {
    setUser({ ...user, name: event.target.value, })
  }

 /**
  * Lorsque l'utilisateur tape dans le champ de saisie, la valeur du champ de saisie est définie sur la
  * propriété username de l'objet utilisateur.
  */
  const handleChangePrenom = (event) => {
    setUser({ ...user, username: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur modifie la date, définissez la date sur la nouvelle valeur.
   */
  const handleChangeDate = (event) => {
    setUser({ ...user, date: event.target.value, })
  }

 /**
  * Lorsque l'utilisateur saisit l'entrée email, mettez à jour la propriété email de l'objet
  * utilisateur avec la valeur de l'entrée.
  */
  const handleChangeEmail = (event) => {
    setUser({ ...user, email: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur modifie le numéro de téléphone, mettez à jour l'objet utilisateur avec le
   * nouveau numéro de téléphone.
   */
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