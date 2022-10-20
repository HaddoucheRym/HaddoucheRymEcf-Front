import React from 'react'

const Location = (props) => {
console.log(props);
  const supprimerLocations = () => {
    props.deleteLocation(props.location.id)
  }


  return (
    <>
   
    <table className="table table-striped">
  <thead>
  <tr>
      <th scope="row">1</th>
      <td>{props.location.locataire}</td>
      <td>{props.location.vehicule} {props.location.vehiculeModel}</td>
      <td>{props.location.dateDebut}</td>
      <td>{props.location.dateFin}</td>
      <td>{props.location.prixTotal}</td>
      <td><button type="button" className='modifier' onClick={() => props.handleClickEdit(props.location.id)}><i className="bi bi-pencil-square"></i></button>
      <button type="button" className="danger" onClick={() => supprimerLocations()}><i className="bi bi-trash"></i></button></td>
    </tr>
   
    
    {/* <tr>
      
      <td>{props.location.locataire}</td>
   
      <td>{props.location.vehicule} </td>
      <td>{props.location.dateDebut}</td>
      <td>{props.location.dateFin}</td>
      <td>{props.location.prixTotal}</td>
    </tr> */}
  </thead>
</table>

    </>
  )
}

export default Location