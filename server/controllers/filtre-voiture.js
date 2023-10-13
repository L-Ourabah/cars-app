import { db } from "../db.js";

// Cette fonction permet de filtrer les voitures en fonction d'un filtre fourni dans l'URL.
export const filtreVoiture = (req, res) => {
    const filtre = req.params.filtre + '%'; // Ajout du caractère "%" pour effectuer une recherche de correspondance partielle
    // Construction de la requête SQL pour filtrer les voitures en fonction du filtre
    const query = `SELECT * FROM car
        LEFT JOIN details ON car.id = details.id_car
        JOIN cars.info ON cars.car.id = info.id_car
        WHERE type LIKE ? OR name LIKE ? OR brand LIKE ? OR year LIKE ?`;

    // Exécution de la requête SQL avec les valeurs de filtre
    db.query(query, [filtre, filtre, filtre, filtre], (err, data) => {
        if (err) return res.status(400).json(err); // En cas d'erreur, renvoie une réponse d'erreur
        return res.json(data); // Renvoie les données filtrées au format JSON
    });
}

// Cette fonction permet de récupérer les dix premières voitures en fonction de leur classement.
export const topDixVoiture = (req, res) => {
    // Construction de la requête SQL pour récupérer les voitures avec un classement inférieur à 20
    const query = `SELECT * FROM car
        LEFT JOIN details ON car.id = details.id_car
        JOIN cars.info ON cars.car.id = info.id_car
        WHERE car.classement < 20`;

    // Exécution de la requête SQL pour obtenir les dix premières voitures
    db.query(query, (err, data) => {
        if (err) return res.status(400).json(err); // En cas d'erreur, renvoie une réponse d'erreur
        return res.json(data); // Renvoie les données au format JSON
    });
}
