import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../../style/Admin.css'


const AddUserForm = () => {
    const [input, setInput] = useState({
        username: "test",
        email: "test",
        password: ""
    })
    const [message, setMessage] = useState("")
    const handleChange = (e) => {
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/enregistrer", input)
            window.location.reload()
        }
        catch (err) {
            setMessage("Utilisateur déjà existant")
        }
    }
    return (
        <div className="add-user-form">
            <h4>Ajouter un nouveau contact</h4>
            <form className="form-user">
                <input placeholder="username" name="username" type="text" onChange={handleChange} />
                <input placeholder="email" name="email" type="email" onChange={handleChange} />
                <input placeholder='password' name="password" type="password" onChange={handleChange} />
                <button className="form-user button" onClick={handleClick}>Validate</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

const DisplayAllUser = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const res = await axios.get("/users")
                setData(res.data);
            }
            catch (err) {
                console.log(err);
            }

        };
        fetchAllUsers();
    }, [])

    const handleDelete = async (id) => {
        console.log('user id = ' + id)
        try {
            await axios.delete("/users/" + id)
            window.location.reload();
            console.log("Deleted")
        }
        catch (err) {
            console.log(err)
        }
    }
    // console.log(data)
    return (
        <div className="liste-users">

            {data[0] ? data.map(user => (
                <div className="user-unique" key={user.iduser} >
                    <h4>username : {user.username}</h4>
                    <p>email : {user.email}</p>
                    <button className='delete' onClick={() => handleDelete(user.iduser)}>Delete</button>
                    <button className='update'><Link to={`/admin/gestion/users/` + user.iduser} >Update</Link></button>
                </div>
            )) : ''}

        </div >
    )

}

const CrudUser = () => {

    return (
        <div className='utilisateur'>
            <h2>Gérer les utilisateurs</h2>

            < AddUserForm />
            < DisplayAllUser />

        </div>
    )
}

export default CrudUser