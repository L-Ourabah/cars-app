import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/CardDetails.css'; // Importation des feuilles de style
import ReactPlayer from 'react-player'; // Composant React pour la lecture de vidéos
import axios from 'axios'; // Importation de la bibliothèque Axios pour effectuer des requêtes HTTP

// Composant fonctionnel CarDetails
export default function CarDetails() {
    const navigate = useNavigate(); // Utilisation de la fonction useNavigate pour la navigation

    const { id } = useParams(); // Extraction de l'ID de la voiture à partir des paramètres de l'URL
    const [car, setCar] = useState(null); // État local pour stocker les détails de la voiture

    useEffect(() => {
        // Effet déclenché lorsque l'ID de la voiture change
        // Effectuez un appel à l'API pour obtenir les détails de la voiture par ID
        axios.get(`/cars/${id}`)
            .then(response => {
                setCar(response.data[0]); // Mettez à jour l'état car avec les données de la réponse de l'API
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des détails de la voiture : ', error);
            });
    }, [id]); // Le tableau de dépendances garantit que cet effet est déclenché lorsque l'ID change

    if (!car) {
        return <div>Chargement en cours...</div>; // Affichage d'un message de chargement tant que les données de la voiture sont récupérées
    }

    console.log(car); // Affichage des données de la voiture dans la console

    return (
        <div className="contenaire">
            {/* Affichage des détails de la voiture */}
            <div className='details'>
                <div className="title">
                    <h2>{car.name}</h2> {/* Nom de la voiture */}
                    <div className="logo2">
                        <img className='img-logo2' src={car.logo} alt="" /> {/* Logo de la voiture */}
                    </div>
                </div>
                <div className="contenu">
                    <div className="image">
                        <img src={car.image} alt="" /> {/* Image de la voiture */}
                    </div>
                    <div className="info">
                        <div className='info-descri'>
                            <p>{car.description}</p> {/* Description de la voiture */}
                        </div>
                        <div className="sous-info">
                            <p>Type: {car.type}</p> {/* Type de la voiture */}
                            <p>Année: {car.year}</p> {/* Année de fabrication de la voiture */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenu-video">
                <div className="title2">
                    <h2>{`Essai de la ${car.name}`}</h2> {/* Titre de la vidéo d'essai de la voiture */}
                </div>
                <div className="video-dt">
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        url={car.video} // URL de la vidéo d'essai de la voiture
                        controls={true}
                    />
                </div>
            </div>
            <div className="navigation">
                {/* Boutons de navigation pour revenir à la page précédente et accéder à la page d'accueil */}
                <button className="back-button" onClick={() => navigate(-1)}>Précédent</button>
                <button className="home-button" onClick={() => navigate('/')}>Accueil</button>
            </div>
        </div>
    );
}
