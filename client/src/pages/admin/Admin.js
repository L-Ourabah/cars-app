import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import CrudUser from "./CRUD-user";
import { CrudVoitures } from "./CRUD-voitures.js";
import Error from "../error.js";

export const Admin = () => {

    axios.defaults.withCredentials = true;

    const { currentUser } = useContext(AuthContext);

    if (currentUser && currentUser.role === "admin") {
        return (
            <div className="admin">

                <div>
                    <h2>Bienvenue {currentUser?.username}</h2>
                </div>

                <div className="admin1">
                    <div className="user">
                        <CrudUser />
                    </div>

                    <div className="voitures">
                        < CrudVoitures />

                    </div>
                </div >

            </div>
        )
    }
    return (
        <div>
            < Error />
        </div>
    )
}