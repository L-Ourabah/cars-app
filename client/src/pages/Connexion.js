import React, { useContext, useState } from 'react';
import '../style/connexion.css';
import { AuthContext } from '../context/AuthContext.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/i;
const passwordRegex = /^[a-zA-Z0-9]{4,}$/;


export const Connexion = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState('register'); // Onglet actif par défaut

    const [inputsConnect, setInputsConnect] = useState({
        username: "",
        password: ""
    });

    const [connectError, setConnectError] = useState('');

    const changeConnect = (e) => {
        setConnectError('');
        setInputsConnect((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleConnect = async (e) => {
        e.preventDefault();

        if (!usernameRegex.test(inputsConnect.username) || !passwordRegex.test(inputsConnect.password)) {
            setConnectError('Nom d\'utilisateur ou mot de passe invalide.');
            return;
        }

        try {
            await login(inputsConnect);
            console.log("Vous êtes connecté !");
            navigate("/");
        } catch (err) {
            setConnectError("Une erreur s'est produite lors de la connexion : " + err);
            console.log(err)
        }
    };

    // PARTIE QUI GÈRE L'INSCRIPTION
    const [inputsRegister, setInputsRegister] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [registerError, setRegisterError] = useState('');

    const changeRegister = (e) => {
        setRegisterError('');
        setInputsRegister((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!usernameRegex.test(inputsRegister.username) || !emailRegex.test(inputsRegister.email) || !passwordRegex.test(inputsRegister.password)) {
            setRegisterError('Veuillez remplir correctement tous les champs.');
            return;
        }

        try {
            const res = await axios.post("/enregistrer", inputsRegister);
            console.log(res);
            window.location.reload();
        } catch (err) {
            setRegisterError("Une erreur s'est produite lors de l'inscription : " + err);
        }
    };

    return (
        <div className='log'>
            <div className="connexion">
                <div className="onglets">
                    <button
                        className={activeTab === 'register' ? 'active' : ''}
                        onClick={() => setActiveTab('register')}
                    >
                        S'ENREGISTRER
                    </button>
                    <button
                        className={activeTab === 'connect' ? 'active' : ''}
                        onClick={() => setActiveTab('connect')}
                    >
                        SE CONNECTER
                    </button>
                </div>
                <div className="enregistrer" style={{ display: activeTab === 'register' ? 'block' : 'none' }}>
                    <h1>S'ENREGISTRER</h1>
                    <form className="enregistrer-form">
                        <label>USERNAME</label>
                        <input placeholder="username" name="username" type="text" onChange={changeRegister} />
                        <label>EMAIL</label>
                        <input placeholder="email" name="email" type="email" onChange={changeRegister} />
                        <label>PASSWORD</label>
                        <input placeholder="password" name="password" type="password" onChange={changeRegister} />
                        {registerError && <div className="error-message">{registerError}</div>}
                        <button className="enregistrer-button" onClick={handleRegister}>REGISTER</button>
                    </form>
                </div>
                <div className="connecter" style={{ display: activeTab === 'connect' ? 'block' : 'none' }}>
                    <h1>SE CONNECTER</h1>
                    <form className="connecter-form">
                        <label>USERNAME</label>
                        <input placeholder="username" name="username" type="text" onChange={changeConnect} />
                        <label>PASSWORD</label>
                        <input placeholder="password" name="password" type="password" onChange={changeConnect} />
                        {connectError && <div className="error-message">{connectError}</div>}
                        <button className="connecter-button" onClick={handleConnect}>CONNECT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
