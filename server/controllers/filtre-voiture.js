import { db } from "../db.js";

export const filtreVoiture = (req, res) => {
    const filtre = req.params.filtre + '%'
    // console.log(filtre)
    const query = `SELECT * FROM car  LEFT JOIN details ON car.id = details.id_car JOIN cars.info ON cars.car.id = info.id_car WHERE type LIKE ? OR name LIKE ? OR brand LIKE ? OR year LIKE ? `
    db.query(query, [filtre, filtre, filtre, filtre], (err, data) => {
        if (err) return res.status(400).json(err)
        return res.json(data)
    })
}

export const topDixVoiture = (req, res) => {
    const query = `SELECT * FROM car  LEFT JOIN details ON car.id = details.id_car JOIN cars.info ON cars.car.id = info.id_car WHERE car.classement < 10`
    db.query(query, (err, data) => {
        if (err) return res.status(400).json(err)
        return res.json(data)
    })
}