import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';
import { enregistrer, login, logout } from './controllers/authentification.js';
import { modifierUtilisateur, montrerUnUtilisateur, montrerUtilisateur, nouvelUtilisateur, supprimerUtilisateur } from './controllers/CRUD-user.js';
import { modifierVoiture, montrerVoiture, montrerVoitures, nouvelVoiture, supprimerVoiture } from './controllers/CRUD-voiture.js';
import { filtreVoiture, topDixVoiture } from './controllers/filtre-voiture.js';


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
    app.get("/server/users/:id", montrerUnUtilisateur)
    app.put("/server/users/:id", modifierUtilisateur)
    app.delete("/server/users/:id", supprimerUtilisateur)

    // CRUD VOITURES - CATEGORIE + SOUS CATEGORIE 2
    app.get("/server/cars", montrerVoitures)
    app.post("/server/cars", nouvelVoiture)
    app.get("/server/cars/:id", montrerVoiture)
    app.put("/server/cars/:id", modifierVoiture)
    app.delete("/server/cars/:id", supprimerVoiture)

    // AUTHENTIFICATION - LOGIN / LOGOUT / REGISTER
    app.post("/server/enregistrer", enregistrer)
    app.post("/server/login", login)
    app.post("/server/logout", logout)

    // FILTRE VOITURE
    app.get("/server/filtre/:filtre", filtreVoiture)
    app.get("/server/top/10", topDixVoiture)

    app.get('/cors', (req, res) => {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.send({ "msg": "This has CORS enabled 🎈" })
    })

    app.listen(port, () => {
        console.log('API listening at ' + port)
    })

    app.get("/server", (req, res) => {
        res.json("Salut t'es là ?")
    })
}