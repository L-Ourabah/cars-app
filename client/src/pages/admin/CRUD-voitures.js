import { useEffect, useState } from "react"
import axios from "axios"

const DisplayAllCars = () => {
    const [data, setData] = useState({})
    const [info, setInfo] = useState({})
    const [images, setImages] = useState({})

    useEffect(() => {
        const fetchAllCars = async () => {
            try {
                // const res = await axios.get("/")
            }
            catch (err) {
                console.log(err)
            }
        }
    }, [])
    return (
        <div className="display-all-cars">
            { }
        </div>
    )
}

export const CrudVoitures = () => {
    return (
        <div>
            <h1>Gérer les voitures</h1>


        </div>
    )
}
