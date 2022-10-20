import React, { useState } from 'react'
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { service } from '../service/service';

const AddLocation = () => {
    const [locations, setLocations] = useState([]);
    const [locataires, setLocataires] = useState([]);
    const [vehicules, setVehicules] = useState([]);
    const { id } = useParams();
    const [selectedVehiculeIdV, setSelectedVehiculeIdV] = useState(id);
    const [newLocation, setNewLocation] = useState({
        id: uuid(),
        locataire: ""  ,
        vehicule: "",
        vehiculeModel: "",
        dateDebut: "",
        dateFin: "",
        prixTotal: ""
    })

    useEffect(() => {
        findAlllocation()
    }, [])
    
    const findAlllocation = () => {
        service.findAllLocationS().then(data => setLocations(data))
    }
    
    useEffect(() => {
        findAlllocataire()
    }, [])
    
    const findAlllocataire = () => {
        service.findAll().then(data => setLocataires(data))
    }
    
    useEffect(() => {
        findVehicule()
        // setNewLocation({...newLocation, vehicule:vehicules.marque})
    }, [selectedVehiculeIdV])

    const findVehicule = () => {
        service.findIdVehicule(selectedVehiculeIdV).then(data => setVehicules(data))
        console.log(selectedVehiculeIdV);
    }


    const addLocation = (newLoction) => {
        service.postLocation(newLoction).then(() => {
            findAlllocation()
        })
    }

    const handleChangeLocataireNom = (event) => {
        setNewLocation({ ...newLocation, locataire: event.target.value, })
    }

    const handleChangeVehiculeMarque = (event) => {
        setNewLocation({ ...newLocation, vehicule: event.target.value, })
    }

    const handleChangeVehiculeModel = (event) => {
        setNewLocation({ ...newLocation, vehiculeModel: event.target.value, })
    }

    const handleChangeDateDebut = (event) => {
        setNewLocation({ ...newLocation, dateDebut: event.target.value, })
    }

    const handleChangeDateFin = (event) => {
        setNewLocation({ ...newLocation, dateFin: event.target.value, })
    }

    
   //calculer le prix totale d'une location de voiture par rapport aux dates de locations
    const handleChangePrixTotal = (event) => {
        let date1 = new Date(newLocation.dateDebut);
        let date2 = new Date(newLocation.dateFin);
        let Diff_temps = date2.getTime() - date1.getTime(); 
        let Diff_jours = Diff_temps / (1000 * 3600 * 24); 
        console.log("Le nombre de jours entre les deux dates est de " + Math.round(Diff_jours) + " jours");
        let prixF = Math.round(Diff_jours * vehicules.prix * 100)/100 ;
        console.log(prixF);
        event.target.value = prixF;
        setNewLocation({ ...newLocation, prixTotal: prixF, })
    }
    
    /**
     * Je souhaite mettre à jour la disponibilité du véhicule à "Pas disponible" lorsque je clique sur
     * le bouton "Enregistrer"
     */
    const handleClickSave = () => {
        setNewLocation({...newLocation, vehicule: vehicules.marque, vehiculeModel: vehicules.model})
        addLocation(newLocation)
        setVehicules({...vehicules, disponibilite : "Pas disponible" })
        service.putVehicule(vehicules, selectedVehiculeIdV).then(() => {
            findVehicule() })
    }

    return (
        <>
            <div className='FormulaireLocataire'>
                <div className='titreAjout'>Ajouter une location</div>
                <p>
                    <select name="pets" id="pet-select" value={newLocation.locataire} onChange={(event) => handleChangeLocataireNom(event)}>
                        <option value="">--Locataire--</option>
                        {locataires.map((locataire, indice) => (
                            <option key={indice} value={locataire.name}>{locataire.name} </option>

                        )
                        )}
                    </select>
                </p>
                <p>
                    <select name="pets" id="pet-select" value={newLocation.vehicule} onChange={(event) => handleChangeVehiculeMarque(event)}>
                    <option value="1">--Véhicule--</option>
                        <option value={vehicules.marque}>{vehicules.marque}</option> 
                    </select> 
                </p>
                <p >
               
                    <select name="pets" id="pet-select" value={newLocation.vehiculeModel} onChange={(event) => handleChangeVehiculeModel(event)}>
                    <option value="">--VéhiculeModel--</option>
                        <option value={vehicules.model}>{vehicules.model} </option>
                    </select>
                </p>
                <p><label htmlFor="">Date de debut : </label></p>
                <p>
                    <input className='inputNom' type="date" defaultValue={newLocation.dateDebut} onChange={(event) => handleChangeDateDebut(event)} placeholder='Date de debut' />
                </p>
                <p><label htmlFor="">Date de fin : </label></p>
                <p>
                <input className='inputNom' placeholder='Date de fin' type="date" defaultValue={newLocation.dateFin} onChange={(event) => handleChangeDateFin(event)}  />
                </p>
                <p>
                <input className='inputNom' type="any" defaultValue={newLocation.prixTotal} onChange={(event) => handleChangePrixTotal(event)} placeholder='Prix total'  />
                </p>
                {newLocation.dateDebut <= newLocation.dateFin ? 
                <NavLink to="/locationPage" >
                    <button className='ajouter' onClick={handleClickSave} >valider</button>
                </NavLink> : <p>ce n'est pas valide</p>
                }
                <NavLink to= "/locationVehiculePage">
                <button type="button" className="btn btn-danger">Annuler</button>
                </NavLink>
            </div>
        </>
    )
}

export default AddLocation