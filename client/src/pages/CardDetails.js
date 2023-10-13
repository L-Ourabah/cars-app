import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../style/CardDetails.css'
import ReactPlayer from 'react-player';
import axios from 'axios'; // Importez Axios

export default function CarDetails() {
    const navigate = useNavigate();

    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        // Effectuez un appel à l'API pour obtenir les détails de la voiture par ID
        axios.get(`/cars/${id}`)
            .then(response => {
                setCar(response.data[0]); // Utilisez response.data pour accéder aux données de la réponse
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des détails de la voiture : ', error);
            });
    }, [id]);

    if (!car) {
        return <div>Chargement en cours...</div>;
    }
console.log(car)
    return (
        <div className="contenaire">
            <div className='details'>
                <div className="title">
                    <h2>{car.name}</h2>
                    <div className="logo2">
                        <img className='img-logo2' src={car.logo} alt="" />
                    </div>
                </div>
                <div className="contenu">
                    <div className="image">
                        <img src={car.image} alt="" />
                    </div>
                    <div className="info">
                        <div className='info-descri'>
                            <p>{car.description}</p>
                        </div>
                        <div className="sous-info">
                            <p>Type: {car.type}</p>
                            <p>Année: {car.year}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenu-video">
                <div className="title2">
                    <h2>{`Essai de la ${car.name}`}</h2>
                </div>
                <div className="video-dt">
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        url={car.video}
                        controls={true}
                    />
                </div>
            </div>
            <div className="navigation">
            {/* Bouton de retour vers la page de recherche */}
            <button className="back-button" onClick={() => navigate(-1)}>Précédent</button>
            <button className="home-button" onClick={() => navigate('/')}>Accueil</button>
          
          </div>
        </div>
    );
}
