import React from 'react';
import '../style/Card.css';
import { useNavigate } from 'react-router-dom'; // Importez Link et useNavigate

export default function Card({ car }) {
  console.log(car.type);


  const navigate = useNavigate();

  // Fonction pour gérer la navigation vers les détails de la voiture
  const handleCardSelect = (car) => {
    navigate(`/CarData/${car.id}`);
  };
  console.log('bonbon')
  console.log(car)
  return (
    <div className={`card ${car.type}`}>
      <div className="card-header">
        <div className="left">
          <div className="type">
            <p>{car.type}</p>
          </div>
          <div className="name">
            <p>{car.name}</p>
          </div>
        </div>

        <div className="right">
          <div className="logo">
            <div className="marque"> {car.brand} </div>
            <img className='img-logo' src={car.logo} alt="" />
          </div>
          <div className="year">
            <p>{car.year}</p>
          </div>
        </div>
      </div>
      {/* Utilisez la fonction handleCardSelect pour gérer le clic sur la carte */}
      <div className="card-image" onClick={() => handleCardSelect(car)}>
        <img src={car.image} alt="" />
      </div>
      <div className="card-details">
        <div className="info">
          <p>{car.information}</p>
        </div>
      </div>

      <div className="card-set">
        {car
          ? (
            <div className="set-details" key={car.id}>

              <div className="cost">
                <div className="cost-info">
                  <h2> vitesse max</h2>
                  <p>{car.vitesse_max}</p>
                </div>

                <div className="cost-info">
                  <h2> 0 à 100</h2>
                  <p>{car.zero_cent} s</p>
                </div>

                <div className="cost-info">
                  <h2> poids</h2>
                  <p>{car.poids} kg</p>

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
                  <p>{car.exemplaire} pc</p>
                </div>
              </div>
              <div className="cost-info"></div>

              <div className="cost-info">
                <div >

                  <h2> puissance</h2>
                </div>
                <div >
                  <p>{car.puissance} cv</p>
                </div>

              </div>

              <div className="cost-info">

                <div >
                  <h2> prix </h2>
                </div>
                <div >
                  <p>{car.prix} €</p>
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
          <p>{car.classement}</p>
        </div>
      </div>
    </div>
  );
}
