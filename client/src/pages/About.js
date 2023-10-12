import React from 'react';
import '../style/About.css'; // Assurez-vous d'avoir les styles CSS dans un fichier séparé.
import ourabah from '../images/ou.jpg';
import melanie from '../images/melanie1.jpeg';



function About() {
  return (
    <div className="contenaire-about">
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
          <p>En tant que padawan du développement, j'apprends auprès d'un développeur expérimenté pour devenir un professionnel compétent.</p>

            <hr />

            <h3>Drancy, France</h3>
          </div>
        </div>
      </div>


      <div className="card-pro">
        <div className="front">
          <div className="star">
            <a href="" target="_blank">⭐</a>
          </div>

          <img src={melanie} alt="logo" />

          <h1>Melanie</h1>
        </div>

        <div className="back">
          <div className="container-info">
            <h2>Développeur Jedi</h2>
            <p>En tant que spécialiste du backend, je crée des composants techniques d'applications, assurant leur performance et leur sécurité en collaboration avec les développeurs frontend.</p>         

            <hr />

            <h3>Paris, France</h3>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
