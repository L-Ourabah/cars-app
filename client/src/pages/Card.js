import React from 'react';
import '../style/Card.css';
import { useNavigate } from 'react-router-dom'; // Importez Link et useNavigate

// Composant fonctionnel Card prenant une voiture (car) comme propriété
export default function Card({ car }) {
  const navigate = useNavigate(); // Utilisation de la fonction useNavigate pour la navigation

  // Fonction pour gérer la navigation vers les détails de la voiture
  const handleCardSelect = (car) => {
    navigate(`/CarData/${car.id}`);
  };

  return (
    <div className={`card ${car.type}`}>
      <div className="card-header">
        <div className="left">
          <div className="type">
            <p>{car.type}</p> {/* Type de voiture */}
          </div>
          <div className="name">
            <p>{car.name}</p> {/* Nom de la voiture */}
          </div>
        </div>

        <div className="right">
          <div className="logo">
            <div className="marque"> {car.brand} </div> {/* Marque de la voiture */}
            <img className='img-logo' src={car.logo} alt="" /> {/* Logo de la voiture */}
          </div>
          <div className="year">
            <p>{car.year}</p> {/* Année de fabrication de la voiture */}
          </div>
        </div>
      </div>
      {/* Utilisez la fonction handleCardSelect pour gérer le clic sur la carte et naviguer vers les détails de la voiture */}
      <div className="card-image" onClick={() => handleCardSelect(car)}>
        <img src={car.image} alt="" /> {/* Image de la voiture */}
      </div>
      <div className="card-details">
        <div className="info">
          <p>{car.information}</p> {/* Informations sur la voiture */}
        </div>
      </div>

      <div className="card-set">
        {car
          ? (
            <div className="set-details" key={car.id}>

              <div className="cost-info">
                <div>
                  <h2> vitesse max</h2>
                </div>
                <div>
                  <p>{car.vitesse_max}</p> {/* Vitesse maximale de la voiture */}
                </div>
              </div>
              <div className="cost-info">
                <div>
                  <h2> 0 à 100</h2>
                </div>
                <div>
                  <p>{car.zero_cent} s</p> {/* Temps de 0 à 100 km/h de la voiture */}
                </div>
              </div>
              <div className="cost-info">
                <div>
                  <h2> poids</h2>
                </div>
                <div>
                  <p>{car.poids} kg</p> {/* Poids de la voiture en kilogrammes */}
                </div>
              </div>
            </div>
          ) : ''}
      </div>

      <div className="card-info">
        {car
          ? (
            <div className="set-info" key={car.id}>

              <div className="cost-info">
                <div >
                  <h2> exemplaire</h2>
                </div>
                <div >
                  <p>{car.exemplaire} pc</p> {/* Nombre d'exemplaires disponibles de la voiture */}
                </div>
              </div>
              <div className="cost-info"></div>
              <div className="cost-info">
                <div >
                  <h2> puissance</h2>
                </div>
                <div >
                  <p>{car.puissance} cv</p> {/* Puissance de la voiture en chevaux-vapeur (CV) */}
                </div>
              </div>
              <div className="cost-info">
                <div >
                  <h2> prix </h2>
                </div>
                <div >
                  <p>{car.prix} €</p> {/* Prix de la voiture en euros (€) */}
                </div>
              </div>
            </div>
          ) : ''}
      </div>

      <div className="card-footer">
        <div className="card-classement">
          <h2>Classement : </h2>
        </div>
        <div className="cost">
          <p>{car.classement}</p> {/* Classement de la voiture */}
        </div>
      </div>
    </div>
  );
}

