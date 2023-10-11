import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';
import { enregistrer, login, logout } from './controllers/authentification.js';
import { modifierUtilisateur, montrerUtilisateur, nouvelUtilisateur, supprimerUtilisateur } from './controllers/CRUD-user.js';


export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cars'
})

db.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('MySQL connecté');
});


export function createBackend(port) {

    const app = express();
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());

    // CRUD UTILISATEURS - AJOUTER / SUPPRIMER / MODIFIER / MONTRER LA DATA
    // MONTRER 1 UTILISATEUR - MODIFIE SON PROFIL / SUPPRIMER
    app.post("/server/users", nouvelUtilisateur)
    app.get("/server/users", montrerUtilisateur)
    app.put("/server/users/:id", modifierUtilisateur)
    app.delete("/server/user/:id", supprimerUtilisateur)

    // CRUD VOITURES - CATEGORIE + SOUS CATEGORIE 2
    // 4 * CATEGORIES
    // PAR VOITURE - MONTRER INFO D'UNE VOIUTRE
    // MONTRER

    // AUTHENTIFICATION - LOGIN / LOGOUT / REGISTER
    app.post("/server/enregistrer", enregistrer)
    app.post("/server/login", login)
    app.post("/server/logout", logout)

    app.listen(port, () => {
        console.log('API listening at ' + port)
    })

    app.get("/server", (req, res) => {
        res.json("Salut t'es là ?")
    })
}