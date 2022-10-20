import React from 'react'
import { useState } from 'react'
import './editVehicule.css';

const EditVehicule = (props) => {
  const [vehicl, setVehicl] = useState(props.vehicule)
 
  /**
   *Lorsque l'utilisateur clique sur le bouton, l'emplacement de véhicule est modifié.
   */
  const modifVehicul = () => {
    props.modifiedVeh(vehicl)
  }

  /**
   * Lorsque l'utilisateur modifie la valeur de l'entrée marque, mettez à jour l'état de l'objet vehicl
   * avec la nouvelle valeur.
   */
  const handleChangeMarque = (event) => {
    setVehicl({ ...vehicl, marque: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur modifie la valeur de l'entrée de modèle, mettez à jour la propriété de
   * modèle de l'objet vehicl avec la nouvelle valeur.
   */
  const handleChangeModel = (event) => {
    setVehicl({ ...vehicl, model: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur saisit dans le champ de saisie, mettez à jour la propriété immatriculation
   * de l'objet vehicl avec la valeur du champ de saisie.
   */
  const handleChangeImmat = (event) => {
    setVehicl({ ...vehicl, immatriculation: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur modifie la valeur de l'entrée, mettez à jour l'état du composant avec la
   * nouvelle valeur.
   */
  const handleChangePrix = (event) => {
    setVehicl({ ...vehicl, prix: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur modifie la valeur de l'élément select, mettez à jour l'état du composant
   * avec la nouvelle valeur.
   */
  const handleChangeEtat = (event) => {
    setVehicl({ ...vehicl, etat: event.target.value, })
  }

  /**
    Lorsque l'utilisateur modifie la valeur de disponibilité, mettez à jour l'état du composant
   * avec la nouvelle valeur.
   */
  const handleChangeDispo = (event) => {
    setVehicl({ ...vehicl, disponibilite: event.target.value, })
  }

  /**
   * Lorsque l'utilisateur modifie la valeur de l'entrée typeVehicule, mettez à jour l'état du
   * composant pour refléter la nouvelle valeur.
   */
  const handleChangeType = (event) => {
    setVehicl({ ...vehicl, typeVehicule: event.target.value, })
  }

  return (
    <>
      <div className='modificationVehicule'>
        <p>
          Marque: <input type="text" value={vehicl.marque} onChange={handleChangeMarque} />
        </p>
        <p>
          Model: <input type="text" value={vehicl.model} onChange={handleChangeModel} />
        </p>
        <p>
          Immatriculation: <input type="text" value={vehicl.immatriculation} onChange={handleChangeImmat} />
        </p>
        <p>
          Prix: <input type="number" value={vehicl.prix} onChange={handleChangePrix} />
        </p>
        <p>
          Etat:
          <select name="pets" id="pet-select" value={vehicl.etat} onChange={handleChangeEtat}>
            <option value="">--Etat--</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>

          </select>

        </p>
        <p>
          <select name="pets" id="pet-select" value={vehicl.disponibilite} onChange={handleChangeDispo}>
            <option value="">--Disponibilité--</option>
            <option value="Disponible">Disponible</option>
            <option value="Pas disponible">Pas disponible</option>
          </select>
        </p>
        <p>
          Type de vehicule:
          <select name="pets" id="pet-select" value={vehicl.typeVehicule} onChange={handleChangeType}>
            <option value="">--Type--</option>
            <option value="Voiture">Voiture</option>
            <option value="Moto">Moto</option>
            <option value="Camion">Camion</option>
            <option value="Utilitaire">Utilitaire</option>
          </select>
        </p>
        <button className='validerModif' onClick={() => modifVehicul()}>Valider</button>
      </div>
      <hr />
    </>
  )
}

export default EditVehicule