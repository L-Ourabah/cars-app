import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';


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


    app.listen(port, () => {
        console.log('API listening at ' + port)
    })
}