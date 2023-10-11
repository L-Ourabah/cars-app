import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const nouvelUtilisateur = (req, res) => {

    const q = "SELECT * FROM user WHERE email = ? OR username = ?";
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.status(409).json(err);
        if (data.length > 0) {
            return res.status(409).json("L'utilisateur existe déjà.")
        }
    })

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const value = [
        req.body.username,
        req.body.email,
        hash
    ]
    const query = "INSERT INTO user (`username`, `email`, `password`) VALUE(?)"

    db.query(query, [value], (err, data) => {
        if (err) return res.status(400).json(err)
        return res.status(200).json("User registered")

    })
}

export const supprimerUtilisateur = (req, res) => {
    const userId = req.params.id;
    const query = "DELETE FROM `cars`.`user` WHERE (`iduser` = ?);"
    db.query(query, userId, (err, data) => {
        if (err) return res.status(400).json(err)
        return res.status(200).json("Utilisateur supprimé")
    })
}

export const modifierUtilisateur = (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const value = [
        req.body.username,
        req.body.email,
        hash
    ]

    const userId = req.params.id;
    const query = "UPDATE `cars`.`user` SET `username` = ?, `email`=?, `password` = ? WHERE iduser= ?";
    db.query(query, [...value, userId], (err, data) => {
        if (err) return res.status(400).json(err)
        return res.status(200).json("Utilisateur bien modifié")
    })
}

export const montrerUtilisateur = (req, res) => {
    const query = "SELECT * FROM `cars`.`user` WHERE role='user' "
    db.query(query, (err, data) => {
        if (err) return res.status(400).json(err)
        return res.json(data)
    })
}

export const montrerUnUtilisateur = (req, res) => {
    const query = "SELECT * FROM `cars`.`user` WHERE iduser = ?";
    const userId = req.params.id;
    db.query(query, userId, (err, data) => {
        if (err) return res.status(400).json(err)
        return res.json(data)
    })
}