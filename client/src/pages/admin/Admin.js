import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import CrudUser from "./CRUD-user";
import { CrudVoitures } from "./CRUD-voitures.js";
import Error from "../error.js";

export const Admin = () => {
    axios.defaults.withCredentials = true;
    const { currentUser } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState("users"); // Par défaut, l'onglet "Utilisateurs" est actif

    if (currentUser && currentUser.role === "admin") {
        return (
            <div className="admin">
                <div>
                    <h2>Bienvenue {currentUser?.username}</h2>
                </div>

                <div className="admin1">
                    <div className="tabs">
                        <button
                            onClick={() => setActiveTab("users")}
                            className={activeTab === "users" ? "active" : ""}
                        >
                            Gérer les Utilisateurs
                        </button>
                        <button
                            onClick={() => setActiveTab("vehicles")}
                            className={activeTab === "vehicles" ? "active" : ""}
                        >
                            Gérer les Véhicules
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === "users" && <CrudUser />}
                        {activeTab === "vehicles" && <CrudVoitures />}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Error />
        </div>
    );
};
