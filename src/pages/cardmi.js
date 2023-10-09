import React from 'react';
import '../style/Card.css';
import Img from '../images/laferrari.jpg'


const Cardmi = () => {
  return (
    <div className="card">

      <div className="card-header">

        <div className="type">
          <p>Auto légendaire</p>
        </div>
        <div className="name">
          <p>La Ferrari</p>
        </div>
        <div className="year">
          <p>2013</p>
        </div>

      </div>

      <div className="card-image">
        <img
          src={Img}
          alt=""
        />
      </div>

      <div className="card-details">

        <div className="info">
          <p> La Ferrari est une voiture de sport emblématique de la marque italienne Ferrari, connue pour sa puissance, son design et son prestige.
          </p>
        </div>

      </div>

      {/* set de la carte */}
      <div className="card-set">

        <div className="set-details">
          <div className="label">
            <h2>Vitesse Max</h2>
          </div>
          <div className="cost">
            <p>350 km/h</p>
          </div>

        </div>
        <div className="set-details">
          <div className="label">
            <h2>0 à 100</h2>
          </div>
          <div className="cost">
            <p>3.1 sec</p>
          </div>
        </div>

        <div className="set-details">
          <div className="label">
            <h2>Poids</h2>
          </div>

          <div className="cost">
            <p>1780 Kg</p>
          </div>
        </div>

      </div>


      {/* info de la carte */}
      <div className="card-info">

        <div className="exemplaire">
          <div className="label">
            <h2>Exemplaire</h2>
          </div>
          <div className="cost">
            <p>499</p>
          </div>
        </div>


        <div className="vue">
          <div className="label">
            <h2>Vue</h2>
          </div>
          <div className="cost">
            <p>1 millions</p>
          </div>
        </div>


        <div className="prix">
          <div className="label">
            <h2>Prix</h2>
          </div>
          <div className="cost">
            <p>1.250.000 €</p>
          </div>
        </div>

      </div>

      {/* Pied de page de la carte */}
      <div className="card-footer">

        <div className="card-classement">
          <h2>Classement : </h2>
        </div>
        <div className="cost">
          <p> 1 er</p>
        </div>
      </div>

    </div>
  );
};

export default Cardmi;


