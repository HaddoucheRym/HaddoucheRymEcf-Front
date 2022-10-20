import React, { useEffect } from 'react'
import { useState } from 'react'
import LocationList from '../layaout/LocationList';
import { service } from '../service/service';

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
            <div>La liste des locations</div>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Locataire</th>
      <th scope="col">Véhicule</th>
      <th scope="col">date de debut</th>
      <th scope="col">date de fin</th>
      <th scope="col">prix total</th>
    </tr>
  </thead>
  </table>
            {locations.map((location,  index) => (
                <LocationList key={index}  location={location}  modifiedLocation={modifiedLocation} deleteLocation ={deleteLocation }/>
            )
            )
            }
        </>

    )
}

export default LocationPage