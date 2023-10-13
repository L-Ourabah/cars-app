import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const AddCarForm = () => {

    const [inputs, setInputs] = useState({
        type: "",
        name: "",
        brand: "",
        year: 2023,
        image: "",
        logo: "",
        information: "",
        classement: 0,
        description: "",
        video: "",
        exemplaire: 0,
        puissance: 0,
        prix: 0,
        vitesse_max: 0,
        zero_cent: 0,
        poids: 150
    })
    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/cars", inputs)
            // window.location.reload()
            console.log("woah une nouvelle voiture, le chemin de la richesse")
        }
        catch (err) {
            console.log(err)
        }

    }
    console.log(inputs)
    return (
        <div className="add-car-form">
            <h4>Ajouter une nouvelle voiture</h4>
            <form className="form-car">
                <input placeholder="type" name="type" type="text" onChange={handleChange} />
                <input placeholder="name" name="name" type="text" onChange={handleChange} />
                <input placeholder="brand" name="brand" type="text" onChange={handleChange} />
                <input placeholder="year" name="year" type="number" onChange={handleChange} />
                <input placeholder="url image" name="image" type="text" onChange={handleChange} />
                <input placeholder="url logo" name="logo" type="text" onChange={handleChange} />
                <input placeholder="information" name="information" type="text" onChange={handleChange} />
                <input placeholder="classement" name="classement" type="number" onChange={handleChange} />
                <input placeholder="description" name="description" type="text" onChange={handleChange} />
                <input placeholder="url video" name="video" type="text" onChange={handleChange} />
                <input placeholder="exemplaire" name="exemplaire" type="number" onChange={handleChange} />
                <input placeholder="puissance" name="puissance" type="number" onChange={handleChange} />
                <input placeholder="prix" name="prix" type="number" onChange={handleChange} />
                <input placeholder="vitesse max" name="vitesse_max" type="number" onChange={handleChange} />
                <input placeholder="zero à cent" name="zero_cent" type="number" onChange={handleChange} />
                <input placeholder="poids" name="poids" type="number" onChange={handleChange} />
                <button className="form-user button" onClick={handleClick}>Valider</button>
            </form>
        </div>
    )
}
const DisplayAllCars = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchAllCars = async () => {
            try {
                const res = await axios.get("/cars")
                setData(res.data)
            }
            catch (err) {
                console.log(err)
            }
        };
        fetchAllCars();
    }, [])
    console.log(data)

    const handleDelete = async (id) => {
        try {
            await axios.delete("/cars/" + id)
            window.location.reload()
            console.log("VOITURE SUPPRIMEE")
        }
        catch (err) {
            console.log(err)
        }
        // window.location.reload()
    }

    return (
        <div className="liste-cars">
            {data[0] ? data.map(car => (
                <div className="car-unique" key={car.id}>
                    <h4>Name : {car.name}</h4>
                    <p>Type : {car.type}</p>
                    <p>Brand : {car.brand}</p>
                    <p>Poids : {car.poids}</p>
                    <p>Année : {car.year}</p>
                    <p>Classement : {car.classement}</p>
                    <button className="delete" onClick={() => handleDelete(car.id)}>Delete</button>
                    <button className="update"><Link to={`/admin/gestion/cars/` + car.id}>Update</Link></button>
                </div>
            )
            ) : ""}
        </div>
    )
}

export const CrudVoitures = () => {
    return (
        <div className="voiture">
            <h2>Gérer les voitures</h2>

            <AddCarForm />

            <DisplayAllCars />
        </div>
    )
}
