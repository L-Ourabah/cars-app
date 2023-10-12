import { db } from '../db.js'

export const nouvelVoiture = (req, res) => {

}
export const supprimerVoiture = (req, res) => {

}

export const modifierVoiture = (req, res) => {
    const tableId = req.params.id;

    const carValue = [
        req.body.type,
        req.body.name,
        req.body.brand,
        req.body.year,
        req.body.image,
        req.body.logo,
        req.body.information,
        req.body.classement,
        req.body.description,
        req.body.video
    ]

    const infoValue = [
        req.body.exemplaire,
        req.body.puissance,
        req.body.prix
    ]

    const query_car = `UPDATE cars.car SET type=?,
    name=?, brand=?, year=?, image=?, logo=?, information=?, classement=?, description=?, video=? WHERE cars.car.id=${tableId}`

    const query_info = `UPDATE cars.info SET exemplaire=?, puissance=?, prix=? WHERE cars.info.id_car =${tableId}`

    const query_details = `UPDATE cars.details SET vitesse_max=${req.body.vitesse_max}, zero_cent=${req.body.zero_cent}, poids=${req.body.poids} WHERE cars.details.id_car=${tableId}`

    db.query(query_car, [...carValue], (err, data) => {
        if (err) return res.status(400).json(err)
        // return res.status(200).json("PROUT PROUT")
    })
    db.query(query_details, (err, data) => {
        if (err) return res.status(400).json(err)
        // return res.status(200).json("PROUT PROUT DETAILS")
    })
    db.query(query_info, [...infoValue], (err, data) => {
        if (err) return res.status(400).json(err)
        // return res.status(200).json("PROUT PROUT INFO")
    })
    return (res.status(200).json("INFORMATIONS BIEN MISES A JOUR POUR LES VOITURES"))

}

export const montrerVoitures = (req, res) => {
    const query = `SELECT * FROM car LEFT JOIN details ON car.id = details.id_car`
    db.query(query, (err, data) => {
        if (err) return res.status(400).json(err)
        return res.json(data)
    })
}

export const montrerVoiture = (req, res) => {

    const carId = req.params.id;

    const query = `SELECT * FROM cars.car JOIN cars.details ON cars.car.id = cars.details.id_car JOIN cars.info ON cars.car.id = info.id_car WHERE cars.car.id = ${carId} AND cars.details.id_car = ${carId} AND cars.info.id_car= ${carId}`

    db.query(query, (err, data) => {
        if (err) return res.status(400).json(err)
        return res.json(data)
    })
}
