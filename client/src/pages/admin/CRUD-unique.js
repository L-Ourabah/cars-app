import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
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
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("/users/" + getId)
                setData(res.data[0])
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
