import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { service } from '../service/service';

const EditLocation = (props) => {
  const [loc, setLoc] = useState(props.location);
  const [vehicules, setVehicules] = useState([]);
  const [locataires, setLocataires] = useState([]);
  const { id } = useParams();
    const [selectedVehiculeIdV, setSelectedVehiculeIdV] = useState(id);

  useEffect(() => {
    findAllVehicule()
  }, [])

  const findAllVehicule = () => {
    service.findAllV().then(data => setVehicules(data))
  }

//   useEffect(() => {
//     findVehicule()
// }, [selectedVehiculeIdV])

// const findVehicule = () => {
//     service.findIdVehicule(selectedVehiculeIdV).then(data => setVehicules(data))
//     // console.log(selectedVehiculeIdV);
// }

  useEffect(() => {
    findAlllocataire()
}, [])

const findAlllocataire = () => {
    service.findAll().then(data => setLocataires(data))
}

  const modifLoca = () => {
    props.modifLocation(loc)
  }


  const handleChangeVehicule= (event) => {
    setLoc({ ...loc, vehicule: event.target.value, })
  }

  const handleChangeVehiculeModel= (event) => {
    setLoc({ ...loc, vehiculeModel: event.target.value, })
  }

  const handleChangeDateD = (event) => {
    setLoc({ ...loc, dateDebut: event.target.value, })
  }

  const handleChangeDateF = (event) => {
    setLoc({ ...loc, dateFin: event.target.value, })
  }

  const handleChangePrixT= (event) => {
    // let date1 = new Date(loc.dateDebut);
    // // let jour = date1.getDate();
    // let date2 = new Date(loc.dateFin);
    // // let jour2 = date2.getDate();
    // let Diff_temps = date2.getTime() - date1.getTime(); 
    // let Diff_jours = Diff_temps / (1000 * 3600 * 24); 
    // console.log("Le nombre de jours entre les deux dates est de " + Math.round(Diff_jours) + " jours");
    // let prixF = Diff_jours * vehicules.prix ;
    // console.log(prixF);
    // event.target.value = prixF;
    // setLoc({ ...loc, prixTotal: prixF, })
    setLoc({ ...loc, prixTotal: event.target.value , })
  }

  return (
    <>
    <p>{loc.locataire}</p>
    <p>
      vehicule : <select name="pets" id="pet-select" value={loc.vehicule} onChange={(event) => handleChangeVehicule(event)}>
                        <option value="">--Vehicule--</option>
                        {vehicules.map((vehicule, indice) => (
                            <><option key={indice} value={vehicule.marque}>{vehicule.marque}<select name="pets" id="pet-select" value={loc.vehiculeModel} onChange={(event) => handleChangeVehiculeModel(event)}>
                           <option value="">--Model--</option>
                            <option value={vehicule.model}>{vehicule.model}</option>
                          </select> </option></>
                        )
                        )}
                    </select>
    </p>
    <p>
          date de Debut: <input type="date" value={loc.dateDebut} onChange={handleChangeDateD} />
        </p>
        <p>
          Date de fin: <input type="date" value={loc.dateFin} onChange={handleChangeDateF} />
        </p>
        <p>
          Prix total: <input type="number" value={loc.prixTotal} onChange={handleChangePrixT} />
        </p>
        <button className='validerModif' onClick={() => modifLoca ()}>VALIDER</button>
    </>
  )
}

export default EditLocation