import React, { useEffect } from 'react'
import { useState } from 'react'
import LocationList from '../layaout/LocationList';
import { service } from '../service/service';
import './locationPage.css';

const LocationPage = () => {
    const [locations, setLocations] = useState([]);
    const [locataires, setLocataires] = useState([]);
    const [vehicules, setVehicules] = useState([]);

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
        findAllVehicule()
    }, [])

    const findAllVehicule = () => {
        service.findAllV().then(data => setVehicules(data))
    }

    const modifiedLocation = (location, id) => {
        service.putLocation(location, id).then(() => {
            findAlllocation()
        })
    }

    const deleteLocation = (id) => {
        service.deleteLocation(id).then(() => {
            findAlllocation()
        })
    }

    return (
        <>
            <div className='locationPage'>
                <div className='locationListPage'>La liste des locations</div>
                <div className='locationList-affichage'>
                    <ul className="tablelocation">
                        <li className='locataire'>Locataire</li>
                        <li className='vehicule'>Véhicule</li>
                        <li className='datededebut'>Date de debut</li>
                        <li className='datedefin'>Date de fin</li>
                        <li className='prixtotal'>Prix total</li>
                        <li></li>
                    </ul>
                    <hr className='hr-pageLocation' />
                    {locations.map((location, index) => (
                        <LocationList key={index} location={location} modifiedLocation={modifiedLocation} deleteLocation={deleteLocation} />
                    )
                    )
                    }
                </div>
            </div>
        </>

    )
}

export default LocationPage