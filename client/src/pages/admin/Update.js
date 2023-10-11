import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export const Update = () => {

    const location = useLocation();

    const bookId = location.pathname.split("/")[3];

    const [currentData, setCurrentData] = useState([])

    useEffect(() => {
        const fetchBookInfo = async () => {
            try {
                // const res = await axios.get("/books/")
                // setCurrentData(res.data)
                // console.log(res.data)
            }
            catch (err) {
                console.log("oopsie l'erreur de data :" + err)
            }
        }
        fetchBookInfo();
    }, [])


    const [car, setCar] = useState({
        type: "",
        brand: "",
        book_desc: "",
        book_price: null,
        book_cover: "",
        book_quantite: null,
        cat: "divers"
    })

    const handleChange = (e) => {
        setCar((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            // const res = await axios.put(`/books/${bookId}`, book)
            // console.log(res.data);
            // navigate("/");
            console.log("awouuuu")
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="form update">

            <h2>Modifier livre</h2>

            <input type="text" placeholder='titre' onChange={handleChange} name="book_title"></input>

            <input type="text" placeholder='auteur' onChange={handleChange} name="book_author" />

            <input type="text" placeholder='description' onChange={handleChange} name="book_desc" />

            <input type="number" placeholder='prix' onChange={handleChange} name="book_price" />

            {/* <input type="file" accept="image/png, image/jpeg" placeholder='cover' onChange={handleChange} name="book_cover" /> */}

            <input type="number" placeholder='quantite' onChange={handleChange} name="book_quantite" />

            <select name="cat" onChange={handleChange}>
                <option value="divers">Divers</option>
                <option value="fantastique">Fantastique</option>
                <option value="jeunesse">Jeunesse</option>
                <option value="roman">Roman</option>
            </select>
            <button onClick={handleClick}>Modifier</button>

        </div >
    )
}
