const URL = "http://localhost:3000/locataire";
const URL2="http://localhost:3000/vehicule";


export class Service {

    findAll = () => {
        return fetch(URL).then((res) => res.json())
    }

    findId = (id) => {
        console.log(id);
        return fetch(`${URL}/${id}`).then((res) => res.json())
    }

    findAllV = () => {
        return fetch(URL2).then((res) => res.json())
    }

    findIdVehicule = (id) => {
        console.log(id);
        return fetch(`${URL2}/${id}`).then((res) => res.json())
    }

    deleteLocataire = (id) => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    }

    deleteVehicule = (id) => {
        return fetch(`${URL2}/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    }

    putLocataire = (element,id) => {
        return fetch(`${URL}/${id}`, {
                method: "PATCH",
                body: JSON.stringify(element),
                headers: {"Content-type": "Application/json" }
        }).then(ress => ress.json())
    }

    putVehicule = (element,id) => {
        return fetch(`${URL2}/${id}`, {
                method: "PATCH",
                body: JSON.stringify(element),
                headers: {"Content-type": "Application/json" }
        }).then(ress => ress.json())
    }

    postLocataire = (user) => {
        return fetch(URL, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-type": "Application/json" }
        }).then((res) => res.json())
    }

    postVehicule = (vehicle) => {
        return fetch(URL2, {
            method: "POST",
            body: JSON.stringify(vehicle),
            headers: { "Content-type": "Application/json" }
        }).then((res) => res.json())
    }
}

export const service = Object.freeze(new Service())