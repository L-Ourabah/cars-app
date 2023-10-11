import React, { useEffect, useState } from 'react';
import '../style/home.css';
import ve from '../video/b.mp4';
import img1 from '../images/diabloSv.jpg'; // Remplacez par le chemin de votre image
import img2 from '../images/laferrari.jpg'; // Remplacez par le chemin de votre image


export default function Home() {
  const [isParallax, setIsParallax] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsParallax(true);
      } else {
        setIsParallax(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Section vidéo d'ouverture */}
      <section className="video-section">
        <video autoPlay muted loop>
          <source src={ve} type="video/mp4" />
          Votre navigateur ne prend pas en charge la lecture de vidéos.
        </video>
        <div className="video-overlay">
          <h1>Voitures de Légende</h1>
        </div>
      </section>

      {/* Section de contenu avec effet de parallaxe */}
      <div className={`content-section ${isParallax ? 'parallax' : ''}`}>
        <div className="parallax-image">
          <img src={img1} alt="Image 1" />
        </div>
        <div className="parallax-text">
          <h2>Titre de la section</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            libero vel metus vehicula dignissim. Nulla facilisi. Integer non
            justo eget ligula cursus sagittis.
          </p>
        </div>
      </div>

      <div className={`content-section ${isParallax ? 'parallax' : ''}`}>
        <div className="parallax-image">
          <img src={img2} alt="Image 2" />
        </div>
        <div className="parallax-text">
          <h2>Autre titre</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            libero vel metus vehicula dignissim. Nulla facilisi. Integer non
            justo eget ligula cursus sagittis.
          </p>
        </div>
      </div>
    </div>
  );
}

