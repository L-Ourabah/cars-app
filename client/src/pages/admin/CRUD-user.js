import { useState } from 'react'
import '../../style/Admin.css'
import axios from 'axios'

const AddUserForm = () => {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [message, setMessage] = useState("")
    const handleChange = (e) => {
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/enregistrer", input)
            setMessage("User registered")
        }
        catch (err) {
            setMessage("An error occured")
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

    return (
        <div>

            <button className="update">UPDATE</button>
            <button className="delete">DELETE</button>
        </div>
    )

}

const CrudUser = () => {

    return (
        <div>

            < AddUserForm />
            < DisplayAllUser />

        </div>
    )
}

export default CrudUser