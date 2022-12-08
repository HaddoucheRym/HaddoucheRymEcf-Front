const URL = "http://localhost:8080/locataires";
const URL2="http://localhost:8080/vehicules";
const URL3 = "http://localhost:8080/locations";


export class Service {

   /* Une fonction qui renvoie une promesse locataires. */
    findAll = () => {
        return fetch(URL).then((res) => res.json())
    }

    /* Une fonction qui prend un identifiant  comme paramètre et renvoie une promesse locataire. */
    findId = (id) => {
        console.log(id);
        return fetch(`${URL}/${id}`).then((res) => res.json())
    }

   /* Une fonction qui renvoie une promesse vehicule. */
    findAllV = () => {
        return fetch(URL2).then((res) => res.json())
    }

    /* Une fonction qui prend un identifiant  comme paramètre et renvoie une promesse vehicule. */
    findIdVehicule = (id) => {
        console.log(id);
        return fetch(`${URL2}/${id}`).then((res) => res.json())
    }

    findAllLocationS = () => {
        return fetch(URL3).then((res) => res.json())
    }

    findIdLocation = (id) => {
        console.log(id);
        return fetch(`${URL3}/${id}`).then((res) => res.json())
    }

   /* Suppression d'un locataire de la base de données. */
    deleteLocataire = (id) => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    }

   /* Suppression d'un véhicule de la base de données. */
    deleteVehicule = (id) => {
        return fetch(`${URL2}/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    }

    deleteLocation = (id) => {
        return fetch(`${URL3}/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    }

  /* Une fonction qui met à jour le locataire dans la base de données. */
    putLocataire = (element,id) => {
        return fetch(`${URL}/${id}`, {
                method: "PATCH",
                body: JSON.stringify(element),
                headers: {"Content-type": "Application/json" }
        }).then(ress => ress.json())
    }

  /* Mise à jour du véhicule dans la base de données. */
    putVehicule = (element,id) => {
        return fetch(`${URL2}/${id}`, {
                method: "PATCH",
                body: JSON.stringify(element),
                headers: {"Content-type": "Application/json" }
        }).then(ress => ress.json())
    }

    putLocation = (element,id) => {
        return fetch(`${URL3}/${id}`, {
                method: "PATCH",
                body: JSON.stringify(element),
                headers: {"Content-type": "Application/json" }
        }).then(ress => ress.json())
    }

  /* Une fonction qui prend un utilisateur comme paramètre et renvoie une promesse. */
    postLocataire = (user) => {
        return fetch(URL, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-type": "Application/json" }
        }).then((res) => res.json())
    }

   /* Une fonction qui prend un véhicule comme paramètre et renvoie une promesse. */
    postVehicule = (vehicle) => {
        return fetch(URL2, {
            method: "POST",
            body: JSON.stringify(vehicle),
            headers: { "Content-type": "Application/json" }
        }).then((res) => res.json())
    }

    postLocation = (user) => {
        return fetch(URL3, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-type": "Application/json" }
        }).then((res) => res.json())
    }
}

export const service = Object.freeze(new Service())