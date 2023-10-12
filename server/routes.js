import express from 'express';
import { enregistrer, login, logout } from './controllers/authentification.js';
import { modifierUtilisateur, montrerUtilisateur, nouvelUtilisateur, supprimerUtilisateur } from './controllers/CRUD-user.js';
import { modifierVoiture, montrerVoitures, nouvelVoiture, supprimerVoiture } from './controllers/CRUD-voiture.js';

const router = express.Router();

// AUTHENTIFICATION
router.post("/enregistrer", enregistrer);
router.post("/server/login", login)
router.post("/server/logout", logout)

// CRUD UTILISATEUR
router.get("/server/users", montrerUtilisateur)
router.post("/server/users", nouvelUtilisateur)
router.put("/server/users/:id", modifierUtilisateur)
router.delete("/server/users/:id", supprimerUtilisateur)

// CRUD VOITURE
router.get("/server/cars", montrerVoitures)
router.post("/server/cars", nouvelVoiture)
router.put("/server/cars/:id", modifierVoiture)
router.delete("/server/cars/:id", supprimerVoiture)

export default router;