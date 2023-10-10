import React from 'react';
import '../style/About.css'; // Assurez-vous d'avoir les styles CSS dans un fichier séparé.
  import  ourabah from '../images/ou.jpg';



function About() {
  return (
    <div className="contenaire">
      <div className="card-pro">
        <div className="front">
          <div className="star">
            <a href="" target="_blank">⭐</a>
          </div>

          <img src={ourabah} alt="logo" />

          <h1>ourabah</h1>
        </div>

        <div className="back">
          <div className="container-info">
            <h2>Développeur Padawan</h2>

            <div className="container-social">
              <a href="" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="" target="_blank">
                <i className="fab fa-github-square"></i>
              </a>

              <a href="" target="_blank">
                <i className="fab fa-youtube-square"></i>
              </a>

              <a href="" target="_blank">
                <i className="fab fa-discord"></i>
              </a>
            </div>

            <hr />

            <h3>Drancy, France</h3>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default About;
