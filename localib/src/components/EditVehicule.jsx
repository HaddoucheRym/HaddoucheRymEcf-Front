import React from 'react'
import { useState } from 'react'

const EditVehicule = (props) => {
  const [vehicl, setVehicl] = useState(props.vehicule)

  const modifVehicul = () => {
    props.modifiedVeh(vehicl)
  }

  const handleChangeMarque = (event) => {
    setVehicl({ ...vehicl, marque: event.target.value, })
  }

  const handleChangeModel = (event) => {
    setVehicl({ ...vehicl, model: event.target.value, })
  }

  return (
    <>
      <p>
        nom: <input type="text" value={vehicl.marque} onChange={handleChangeMarque} />
      </p>
      <p>
        prenom: <input type="text" value={vehicl.model} onChange={handleChangeModel} />
      </p>
      <button onClick={() => modifVehicul()}>Modifier</button>
    </>
  )
}

export default EditVehicule