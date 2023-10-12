import { useContext, useState } from 'react';
import '../style/connexion.css';
import { AuthContext } from '../context/AuthContext.js';
import axios from 'axios';

export const Connexion = () => {
    const { login } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState('register'); // Onglet actif par défaut

    const [inputsConnect, setInputsConnect] = useState({
        username: "",
        password: ""
    });

    const changeConnect = (e) => {
        setInputsConnect(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleConnect = async (e) => {
        e.preventDefault();
        try {
            await login(inputsConnect)
            console.log("yay t'es connecté")
        }
        catch (err) {
            console.log('bah ça se connecte pas oupsi + ' + err);
        }
    }

    // PARTIE QUI GERE L'INSCRIPTION
    const [inputsRegister, setInputsRegister] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await axios.post("/enregistrer", inputsRegister)
            console.log("je crois que t'es enregistré mais j'sais pas")
        }
        catch (err) {
            console.log('handle register err: ' + err)
        }
    }

    const changeRegister = (e) => {
        setInputsRegister(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

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
                    <button className="enregistrer-button" onClick={handleRegister}>REGISTER</button>
                </form>
            </div>
            <div className="connecter" style={{ display: activeTab === 'connect' ? 'block' : 'none' }}>
                <h1>SE CONNECTER</h1>
                <form className="connecter-form">
                    <label>USERNAME</label>
                    <input placeholder="username" name="username" type="text" onChange={changeConnect} />
                    <label>Password</label>
                    <input placeholder="password" name="password" type="password" onChange={changeConnect} />
                    <button className="connecter-button" onClick={handleConnect}>CONNECT</button>
                </form>
            </div>
        </div>
        </div>
    )
}

