import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import '../style/Gallery.css';

export default function Gallery() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [top10Cars, setTop10Cars] = useState([]);

    useEffect(() => {
        // Récupérez les dix premières voitures au démarrage
        axios.get('/top/10')
            .then(response => {
                setTop10Cars(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des dix premières voitures : ', error);
            });
    }, []);

    useEffect(() => {
        // Effectuer une requête de recherche par filtre lorsque searchQuery change
        axios.get(`http://localhost:8800/server/filtre/${searchQuery}`)
            .then(response => {
                setSearchResults(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données de recherche : ', error);
            });
    }, [searchQuery]);
  console.log(top10Cars)
    return (
        <div className='contenaire-gallery'>
            <h1>Gallery</h1>
            <input
                type="text"
                placeholder="Rechercher par nom, type, marque ou année"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="card-container">
                {searchResults.length > 0 && top10Cars[0] && searchResults[0]? (
                    searchResults.map((car) => (
                        <Card key={car.id} car={car} />
                    ))
                ) : (
                    top10Cars.map((car) => (
                        <Card key={car.id} car={car} />
                    ))
                )}
            </div>
        </div>
    );
}

