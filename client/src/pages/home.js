import React from 'react';
import '../style/home.css';
import ve from '../video/intro.mp4';



export default function Home() {

  return (
    <div>
      {/* Section vidéo d'ouverture */}
      <section className="video-section">
        <video autoPlay loop>
          <source src={ve} type="video/mp4" />
          Votre navigateur ne prend pas en charge la lecture de vidéos.
        </video>
        <div className="video-overlay">
          <h1>Voitures de Légende</h1>
        </div>
      </section>
      <section className="section">
  <div className="home" class="box1"></div>
  <div className="about" class="box2"></div>
  <div className="service" class="box3"></div>
  <div className="contact" class="box4"></div>
</section>

   
    </div>
  );
}

