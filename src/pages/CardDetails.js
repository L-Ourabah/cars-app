import React from 'react';
import { useParams } from 'react-router-dom';
import CardData from './CardData';
import '../style/CardDetails.css'

export default function CarDetails() {
    // Utilisez useParams pour obtenir l'ID de la voiture depuis l'URL
    const { id } = useParams();

    // Recherchez la voiture correspondante dans CardData en utilisant l'ID
    const car = CardData.find((car) => car.id === parseInt(id, 10));

    if (!car) {
        // Si la voiture n'est pas trouvée, vous pouvez afficher un message d'erreur ou une redirection
        return <div>Voiture non trouvée</div>;
    }
    console.log(id)
    // Affichez les détails de la voiture
    return (
        <div className="contenaire">

            <div className='details'>

                <div className="title">
                    <h2>{car.name}</h2>
                </div>
                <div className="contenu">
                    <div className="image">
                        <img src={car.img} alt="" />
                    </div>

                    <div className="info">
                        <div>
                        <p>Informations: {car.description}</p>
                        </div>
                        <p>Type: {car.type}</p>
                        <p>Année: {car.year}</p>
                        <p>Marque: {car.brand}</p>
                        
                    </div>
                </div>

            </div>
            <div className="contenu-video">
                <div className="title2">
                    <h2>{`Essai de la ${car.name}`}</h2>
                </div>

                <video
                    src={car.video} controls
                ></video>
            </div>

            {/* Affichez d'autres détails de la voiture ici */}

        </div>
    );
}

