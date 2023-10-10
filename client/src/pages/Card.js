import React from 'react';
import '../style/Card.css';
import {useNavigate } from 'react-router-dom'; // Importez Link et useNavigate

export default function Card({ car }) {
  console.log(car.type);

 
  const navigate = useNavigate();

  // Fonction pour gérer la navigation vers les détails de la voiture
  const handleCardSelect = (car) => {
    navigate(`/CarData/${car.id}`); 
  };

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
            <img className ='img-logo' src={car.logo} alt=""/>
          </div>
          <div className="year">
            <p>{car.year}</p>
          </div>
        </div>
      </div>
      {/* Utilisez la fonction handleCardSelect pour gérer le clic sur la carte */}
      <div className="card-image" onClick={() => handleCardSelect(car)}>
        <img src={car.img} alt="" />
      </div>
      <div className="card-details">
        <div className="info">
          <p>{car.info}</p>
        </div>
      </div>

      <div className="card-set">
        {car.setDetails.map((detail, index) => (
          <div className="set-details" key={index}>
            <div className="label">
              <h2>{detail.label}</h2>
            </div>
            <div className="cost">
              <p>{detail.cost}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card-info">
        {car.cardInfo.map((info, index) => (
          <div className="set-info" key={index}>
            <div className="label">
              <h2>{info.label}</h2>
            </div>
            <div className="cost">
              <p>{info.cost}</p>
            </div>
          </div>
        ))}
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
