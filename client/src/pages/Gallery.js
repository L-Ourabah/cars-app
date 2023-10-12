import React, { useState } from 'react';
import Card from './Card';
import CardData from './CardData';
import '../style/Gallery.css';

export default function Gallery() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showAll, setShowAll] = useState(false); // Ne pas afficher toutes les voitures par défaut

    // Afficher les 10 meilleures voitures au classement initialement
    const top10Cars = CardData.slice(0, 100);

    // Fonction pour gérer la recherche
    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setShowAll(false); // Affiche les 10 meilleures au lieu de toutes les voitures
            setSearchResults([]);
        } else {
            const results = CardData.filter((car) =>
                car.type.toLowerCase().includes(query.toLowerCase()) ||
              
                car.name.toLowerCase().includes(query.toLowerCase()) ||
                car.year.toLowerCase().includes(query.toLowerCase()) ||
                car.brand.toLowerCase().includes(query.toLowerCase()) // Recherche par marque
            );
            setShowAll(true);
            setSearchResults(results);
        }
    };

    // Fonction pour gérer l'appui sur la touche "Entrée"
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(searchQuery);
        }
    };

    return (
        <div className='contenaire-gallery'>
            <h1>Gallery</h1>
            <input
                type="text"
                placeholder="Rechercher par type, nom, année ou marque"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyPress} // Gestion de l'appui sur "Entrée"
            />
            <button onClick={() => handleSearch('')}>Afficher tout</button>
            <div className="card-container">
                {showAll ? (
                    searchResults.map((car) => (
                        <Card key={car.id} car={car} />
                    ))
                ) : (
                    top10Cars.map((car) => (
                        <Card key={car.id} car={car} />
                    ))

                )
                }
            </div>
        </div>
    );
}




