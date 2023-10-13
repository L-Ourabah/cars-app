import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Cette fonction permet de créer un nouvel utilisateur.
export const nouvelUtilisateur = (req, res) => {
    // Requête SQL pour vérifier si l'utilisateur existe déjà.
    const q = "SELECT * FROM user WHERE email = ? OR username = ?";
    
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.status(409).json(err);

        // Si un utilisateur avec le même e-mail ou nom d'utilisateur existe, renvoie un conflit.
        if (data.length > 0) {
            return res.status(409).json("L'utilisateur existe déjà.");
        }
    })

    // Génération d'un sel et hachage du mot de passe avant l'insertion dans la base de données.
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const value = [
        req.body.username,
        req.body.email,
        hash
    ]

    // Requête SQL pour insérer le nouvel utilisateur dans la base de données.
    const query = "INSERT INTO user (`username`, `email`, `password`) VALUE(?)"

    db.query(query, [value], (err, data) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json(data);
    })
}

// Cette fonction permet de supprimer un utilisateur en fonction de son ID.
export const supprimerUtilisateur = (req, res) => {
    const userId = req.params.id;

    // Requête SQL pour supprimer un utilisateur en fonction de son ID.
    const query = "DELETE FROM `cars`.`user` WHERE (`iduser` = ?);"

    db.query(query, userId, (err, data) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json("Utilisateur supprimé");
    })
}

// Cette fonction permet de modifier les informations d'un utilisateur en fonction de son ID.
export const modifierUtilisateur = (req, res) => {
    // Génération d'un sel et hachage du nouveau mot de passe.
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const value = [
        req.body.username,
        req.body.email,
        hash
    ]

    const userId = req.params.id;

    // Requête SQL pour mettre à jour les informations de l'utilisateur en fonction de son ID.
    const query = "UPDATE `cars`.`user` SET `username` = ?, `email`=?, `password` = ? WHERE iduser= ?";

    db.query(query, [...value, userId], (err, data) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json("Utilisateur bien modifié");
    })
}

// Cette fonction permet de récupérer la liste des utilisateurs avec le rôle 'user'.
export const montrerUtilisateur = (req, res) => {
    // Requête SQL pour récupérer la liste des utilisateurs avec le rôle 'user'.
    const query = "SELECT * FROM `cars`.`user` WHERE role='user' "

    db.query(query, (err, data) => {
        if (err) return res.status(400).json(err);
        return res.json(data);
    })
}

// Cette fonction permet de récupérer les données d'un utilisateur en fonction de son ID.
export const montrerUnUtilisateur = (req, res) => {
    // Requête SQL pour récupérer les données d'un utilisateur en fonction de son ID.
    const query = "SELECT * FROM `cars`.`user` WHERE iduser = ?";
    const userId = req.params.id;

    db.query(query, userId, (err, data) => {
        if (err) return res.status(400).json(err);
        return res.json(data);
    })
}
