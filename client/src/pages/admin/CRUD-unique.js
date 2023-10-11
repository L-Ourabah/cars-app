import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

export const CrudOneUser = () => {

    const [data, setData] = useState({})
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: ""
    })

    const location = useLocation()
    const getId = location.pathname.split("/")[3]

    const navigate = useNavigate()
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("/users/" + getId)
                setData(res.data[0])
                setUser({
                    username: res.data[0].username,
                    password: res.data[0].password,
                    email: res.data[0].email
                })
            }
            catch (err) {
                console.log(err)
            }
        }
        getData();
    }, [])
    const handleChange = (e) => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put("/users/" + getId, user)
            console.log("update unique user SUCCESSS")
            navigate("/admin/gestion")
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="single-user-form">
            <label>Username :</label>
            <input placeholder="username" defaultValue={data.username} onChange={handleChange} type="text" name="username" />
            <label>Email :</label>
            <input placeholder="email" defaultValue={data.email} onChange={handleChange} type="email" name="email" />
            <label>Password :</label>
            <input placeholder="new password" onChange={handleChange} type="password" name="password" />
            <button className="submit-unique" onClick={handleClick}>Submit</button>
        </div>
    )
}

export const CrudOneCar = () => {
    return (
        <div>CrudOneCar</div>
    )
}
