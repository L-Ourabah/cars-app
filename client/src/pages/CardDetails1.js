import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../style/CardDetails.css'
import ReactPlayer from 'react-player';

export default function CarDetails() {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        // Effectuez un appel à l'API pour obtenir les détails de la voiture par ID
        fetch(`/server/cars/${id}`)
            .then(response => response.json())
            .then(data => {
                setCar(data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des détails de la voiture : ', error);
            });
    }, [id]);

    if (!car) {
        return <div>Chargement en cours...</div>;
    }

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
                        <img src={car.img} alt="" />
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
        </div>
    );
}
