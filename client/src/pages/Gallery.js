import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import '../style/Gallery.css'; // Importation des feuilles de style

export default function Gallery() {
    const [searchQuery, setSearchQuery] = useState(''); // État local pour la requête de recherche
    const [searchResults, setSearchResults] = useState([]); // État local pour stocker les résultats de la recherche
    const [top10Cars, setTop10Cars] = useState([]); // État local pour stocker les 10 premières voitures

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

    return (
        <div className='contenaire-gallery'>
            <h1>Gallery</h1>
            <input
                type="text"
                placeholder="Rechercher par nom, type, marque ou année"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Gérer les modifications de la requête de recherche
            />
            <div className="card-container">
                {searchResults.length > 0 && top10Cars[0] && searchResults[0] ? (
                    // Affichez les résultats de la recherche si la recherche est effectuée et qu'il y a des résultats
                    searchResults.map((car) => (
                        <Card key={car.id} car={car} /> // Affichez chaque voiture sous forme de carte
                    ))
                ) : (
                    // Sinon, affichez les 10 premières voitures
                    top10Cars.map((car) => (
                        <Card key={car.id} car={car} /> // Affichez chaque voiture sous forme de carte
                    ))
                )}
            </div>
        </div>
    );
}
