import { db } from '../db.js'

export const nouvelVoiture = (req, res) => {

}
export const supprimerVoiture = (req, res) => {

}
export const modifierVoiture = (req, res) => {
    const tableId = req.params.id;

    // const carValue = [req.body.type, req.body.name, req.body.brand, req.body.year, req.body.image, req.body.logo, req.body.information, req.body.classement, req.body.description, req.body.video]

    const query_car = `UPDATE cars.car SET type = ${req.body.type}, name = ${req.body.name}, brand = ${req.body.brand}, year = ${req.body.year}, image = ${req.body.image}, logo = ${req.body.logo}, information = ${req.body.information}, classement = ${req.body.classement}, description = ${req.body.description}, video = ${req.body.video} WHERE car.id= ${tableId}`

    const infoValue = [
        req.body.exemplaire,
        req.body.puissance,
        req.body.prix
    ]
    const query_info = "UPDATE cars.info SET `exemplaire` = ?, `puissance` = ?, `prix` = ? WHERE cars.info.id_car =?"

}
export const montrerVoitures = (req, res) => {
    const query = "SELECT * FROM car LEFT JOIN details ON car.id = details.id_car"
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
