import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import CrudUser from "./CRUD-user";
import { CrudVoitures } from "./CRUD-voitures.js";

export const Admin = () => {

    axios.defaults.withCredentials = true;

    const { currentUser } = useContext(AuthContext);

    return (
        <div>
            <div>
                <h2>Bienvenue {currentUser?.username}</h2>
            </div>

            <div>
                <CrudUser />
            </div>

            <div>
                < CrudVoitures />

            </div>
        </div >
    )

}