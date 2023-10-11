import express from 'express';
import { enregistrer, login, logout } from './controllers/authentification.js';
import { modifierUtilisateur, montrerUtilisateur, nouvelUtilisateur, supprimerUtilisateur } from './controllers/CRUD-user.js';

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
router.get("/server/cars")
router.post("/server/cars")
router.put("/server/cars/:id")
router.delete("/server/cars/:id")

export default router;