import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../style/Gallery.css';

export default function Gallery() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [filterType, setFilterType] = useState(''); // Filtre par type de voiture
    const [filterBrand, setFilterBrand] = useState(''); // Filtre par marque
    const [filterName, setFilterName] = useState(''); // Filtre par nom
    const [typeOptions, setTypeOptions] = useState([]); // Options de filtre pour le type
    const [brandOptions, setBrandOptions] = useState([]); // Options de filtre pour la marque
    const [nameOptions, setNameOptions] = useState([]); // Options de filtre pour le nom
    const [top10Cars, setTop10Cars] = useState([]); // Les 10 meilleures voitures

    useEffect(() => {
        // Effectuer un appel à l'API pour obtenir les 10 meilleures voitures
        fetch('/server/cars/top10')
            .then(response => response.json())
            .then(data => {
                setTop10Cars(data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des 10 meilleures voitures : ', error);
            });
    }, []); // Effectuer l'appel à l'API au chargement de la page

    useEffect(() => {
        // Effectuer un appel à l'API pour obtenir les options de filtre pour le type, la marque et le nom
        fetch('/server/cars/filter-options')
            .then(response => response.json())
            .then(data => {
                setTypeOptions(data.types);
                setBrandOptions(data.brands);
                setNameOptions(data.names);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options de filtre : ', error);
            });
    }, []); // Effectuer l'appel à l'API au chargement de la page

    useEffect(() => {
        // Effectuer un appel à l'API pour obtenir les voitures en fonction des filtres
        fetch(`/server/cars?query=${searchQuery}&type=${filterType}&brand=${filterBrand}&name=${filterName}`)
            .then(response => response.json())
            .then(data => {
                setSearchResults(data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des voitures : ', error);
            });
    }, [searchQuery, filterType, filterBrand, filterName]);

    return (
        <div className='contenaire-gallery'>
            <h1>Gallery</h1>
            <input
                type="text"
                placeholder="Rechercher par nom de voiture"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className='filter'>
                <label>Filtrer par type :</label>
                <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                    <option value="">Tous</option>
                    {typeOptions.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
                <label>Filtrer par marque :</label>
                <select value={filterBrand} onChange={(e) => setFilterBrand(e.target.value)}>
                    <option value="">Tous</option>
                    {brandOptions.map((brand, index) => (
                        <option key={index} value={brand}>{brand}</option>
                    ))}
                </select>
                <label>Filtrer par nom :</label>
                <select value={filterName} onChange={(e) => setFilterName(e.target.value)}>
                    <option value="">Tous</option>
                    {nameOptions.map((name, index) => (
                        <option key={index} value={name}>{name}</option>
                    ))}
                </select>
            </div>
            <div className="card-container">
                {searchResults.length > 0 ? (
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
