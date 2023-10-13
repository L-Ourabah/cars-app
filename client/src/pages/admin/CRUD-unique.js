import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

// Composant pour gérer la mise à jour d'un utilisateur unique
export const CrudOneUser = () => {
    const [data, setData] = useState({}); // État local pour stocker les données de l'utilisateur
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: ""
    });

    const location = useLocation();
    const getId = location.pathname.split("/")[4]; // Extraire l'ID de l'URL

    const navigate = useNavigate();

    // Récupérer les données de l'utilisateur à mettre à jour
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("/users/" + getId);
                setData(res.data[0]);
                setUser({
                    username: res.data[0].username,
                    password: res.data[0].password,
                    email: res.data[0].email
                });
            }
            catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [getId]);

    // Gérer les modifications des champs du formulaire
    const handleChange = (e) => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    // Gérer la mise à jour de l'utilisateur
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put("/users/" + getId, user); // Envoyer une requête PUT pour mettre à jour l'utilisateur
            console.log("Mise à jour de l'utilisateur réussie");
            navigate("/admin/gestion"); // Rediriger vers la page de gestion des utilisateurs
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="contenaire-u">
            <div className="single-user-form">
                <label>Username :</label>
                <input placeholder="username" defaultValue={data.username} onChange={handleChange} type="text" name="username" />
                <label>Email :</label>
                <input placeholder="email" defaultValue={data.email} onChange={handleChange} type="email" name="email" />
                <label>Password :</label>
                <input placeholder="new password" onChange={handleChange} type="password" name="password" />
                <button className="submit-unique" onClick={handleClick}>Submit</button>
            </div>
        </div>
    )
}

// Composant pour gérer la mise à jour d'une voiture unique
export const CrudOneCar = () => {
    const [info, setInfo] = useState({}); // État local pour stocker les données de la voiture
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
    });

    const navigate = useNavigate();
    const location = useLocation();
    const getCarId = location.pathname.split("/")[4]; // Extraire l'ID de la voiture depuis l'URL

    // Récupérer les données de la voiture à mettre à jour
    useEffect(() => {
        const fetchInfoCar = async () => {
            try {
                const res = await axios.get("/cars/" + getCarId);
                setInfo(res.data[0]);
                setInputs({
                    type: res.data[0].type,
                    name: res.data[0].name,
                    brand: res.data[0].brand,
                    year: res.data[0].year,
                    image: res.data[0].image,
                    logo: res.data[0].logo,
                    information: res.data[0].information,
                    classement: res.data[0].classement,
                    description: res.data[0].description,
                    video: res.data[0].video,
                    exemplaire: res.data[0].exemplaire,
                    puissance: res.data[0].puissance,
                    prix: res.data[0].prix,
                    vitesse_max: res.data[0].vitesse_max,
                    zero_cent: res.data[0].zero_cent,
                    poids: res.data[0].poids
                });
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchInfoCar();
    }, [getCarId]);

    // Gérer les modifications des champs du formulaire
    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    // Gérer la mise à jour de la voiture
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put("/cars/" + getCarId, inputs); // Envoyer une requête PUT pour mettre à jour la voiture
            navigate("/admin/gestion"); // Rediriger vers la page de gestion des voitures
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="upcar">
                {/* Champs de formulaire pour les données de la voiture à mettre à jour */}
                <label>Type : </label>
                <input placeholder="type" defaultValue={info.type} name="type" type="text" onChange={handleChange} />
                <label>Name : </label>
                <input placeholder="name" defaultValue={info.name} name="name" type="text" onChange={handleChange} />
                <label>Brand : </label>
                <input placeholder="brand" defaultValue={info.brand} name="brand" type="text" onChange={handleChange} />
                <label>Year :</label>
                <input placeholder="year" defaultValue={info.year} name="year" type="number" onChange={handleChange} />
                <label>Image :</label>
                <input placeholder="url image" defaultValue={info.image} name="image" type="text" onChange={handleChange} />
                <label>Logo : </label>
                <input placeholder="url logo" defaultValue={info.logo} name="logo" type="text" onChange={handleChange} />
                <label>Information :</label>
                <input placeholder="information" defaultValue={info.information} name="information" type="text" onChange={handleChange} />
                <label>Classement :</label>
                <input placeholder="classement" defaultValue={info.classement} name="classement" type="number" onChange={handleChange} />
                <label>Description :</label>
                <input placeholder="description" defaultValue={info.description} name="description" type="text" onChange={handleChange} />
                <label>Video :</label>
                <input placeholder="url video" defaultValue={info.video} name="video" type="text" onChange={handleChange} />
                <label>Exemplaire :</label>
                <input placeholder="exemplaire" defaultValue={info.exemplaire} name="exemplaire" type="number" onChange={handleChange} />
                <label>Puissance :</label>
                <input placeholder="puissance" defaultValue={info.puissance} name="puissance" type="number" onChange={handleChange} />
                <label>Prix :</label>
                <input placeholder="prix" defaultValue={info.prix} name="prix" type="number" onChange={handleChange} />
                <label>Vitesse max :</label>
                <input placeholder="vitesse max" defaultValue={info.vitesse_max} name="vitesse_max" type="number" onChange={handleChange} />
                <label>0 à 100 :</label>
                <input placeholder="zero à cent" defaultValue={info.zero_cent} name="zero_cent" type="number" onChange={handleChange} />
                <label>Poids </label>
                <input placeholder="poids" defaultValue={info.poids} name="poids" type="number" onChange={handleChange} />
                <button className="form-user button" onClick={handleClick}>Submit</button>
            </div>
        </div>
    )
}
