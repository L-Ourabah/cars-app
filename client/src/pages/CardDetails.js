import React from 'react';
import { useParams } from 'react-router-dom';
import CardData from './CardData';
import '../style/CardDetails.css'
import ReactPlayer from 'react-player'

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
                            <p> {car.description}</p>
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
                        url={car.video} controls ="true"

                    />
                </div>
            </div>

            {/* Affichez d'autres détails de la voiture ici */}

        </div>
    );
}

