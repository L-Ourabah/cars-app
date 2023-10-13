import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Composant pour ajouter une nouvelle voiture
const AddCarForm = () => {
    // État local pour stocker les données du formulaire
    const [inputs, setInputs] = useState({
        type: "",
        name: "",
        brand: "",
        year: 2023,
        image: "",
        logo: "",
        information: "",
        classement: 0,
        description: "",
        video: "",
        exemplaire: 0,
        puissance: 0,
        prix: 0,
        vitesse_max: 0,
        zero_cent: 0,
        poids: 150
    });

    // Gérer les modifications des champs du formulaire
    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    // Gérer l'ajout d'une nouvelle voiture
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/cars", inputs); // Envoyer une requête POST pour ajouter la nouvelle voiture
            console.log("Une nouvelle voiture a été ajoutée avec succès !");
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="add-car-form">
            <h4>Ajouter une nouvelle voiture</h4>
            <form className="form-car">
                {/* Champs de formulaire pour les données de la voiture */}
                <input placeholder="Type" name="type" type="text" onChange={handleChange} />
                <input placeholder="Nom" name="name" type="text" onChange={handleChange} />
                <input placeholder="Marque" name="brand" type="text" onChange={handleChange} />
                <input placeholder="Année" name="year" type="number" onChange={handleChange} />
                {/* ... Ajouter des champs supplémentaires ici */}
                <button className="form-user button" onClick={handleClick}>Valider</button>
            </form>
        </div>
    );
}

// Composant pour afficher toutes les voitures existantes et permettre de les supprimer
const DisplayAllCars = () => {
    const [data, setData] = useState({});

    // Récupérer toutes les voitures depuis l'API
    useEffect(() => {
        const fetchAllCars = async () => {
            try {
                const res = await axios.get("/cars");
                setData(res.data);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchAllCars();
    }, []);

    // Gérer la suppression d'une voiture
    const handleDelete = async (id) => {
        try {
            await axios.delete("/cars/" + id); // Envoyer une requête DELETE pour supprimer la voiture
            window.location.reload(); // Recharger la page pour refléter les changements
            console.log("Voiture supprimée avec succès !");
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="liste-cars">
            {/* Afficher la liste de toutes les voitures avec des boutons de suppression et de mise à jour */}
            {data[0] ? data.map(car => (
                <div className="car-unique" key={car.id}>
                    <h4>Nom : {car.name}</h4>
                    <p>Type : {car.type}</p>
                    <p>Marque : {car.brand}</p>
                    <p>Poids : {car.poids}</p>
                    <p>Année : {car.year}</p>
                    <p>Classement : {car.classement}</p>
                    {/* Boutons pour supprimer ou mettre à jour chaque voiture */}
                    <button className="delete" onClick={() => handleDelete(car.id)}>Supprimer</button>
                    <button className="update"><Link to={`/admin/gestion/cars/` + car.id}>Mise à jour</Link></button>
                </div>
            )) : ""}
        </div>
    )
}

// Composant de plus haut niveau qui regroupe les deux composants précédents
export const CrudVoitures = () => {
    return (
        <div className="voiture">
            <h2>Gérer les voitures</h2>

            {/* Afficher le formulaire d'ajout de voiture et la liste des voitures existantes */}
            <AddCarForm />
            <DisplayAllCars />
        </div>
    )
}

