import '../style/navbar.css';
import { Link, useNavigate } from 'react-router-dom';

import CarsLogo from '../images/CarsLogo.gif'

// Pour la barre de navigation en mobile
import { useDispatch } from 'react-redux';
import { showSidebar } from '../redux-store/actions/sidebar-action';

// Pour checker si l'utilisateur est connecté ou non
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';

// Les logos
import { FcAutomotive } from 'react-icons/fc';
import { FaUser } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';


import { GiHamburgerMenu } from 'react-icons/gi';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import { AiFillSetting } from 'react-icons/ai';

export default function Navbar() {

    const dispatch = useDispatch();
    const handleClick = () => {
        console.log('patatoe')
        dispatch(showSidebar());
    }
    const navigate = useNavigate();

    const { currentUser, logout } = useContext(AuthContext)

    const handleLogout = async () => {
        await logout(AuthContext);
        navigate("/");
        console.log("deconnexion et redirection !");
    }

    return (
        <div className="navbar color">

            <div className="navbar-wrapper">

                <Link className="logo-book" to="/"> <img src={CarsLogo} alt="" /></Link>



                <div className="navbar-content">




                    {currentUser && currentUser.role === "admin" ? <Link className="navbar-links" to="/admin/gestion"><AiFillSetting /></Link> : ""}

                    {currentUser ?
                        (<span className="navbar-links" onClick={handleLogout}> < RiLogoutCircleRFill /></span>)
                        : (<Link className="navbar-links" to="/connexion"><FaUser /></Link>)}


                    <Link className="navbar-links" to="/Gallery"><FcAutomotive /></Link>
                    <Link className="navbar-links" to="/About"><FcAbout /></Link>

                </div>

                <div onClick={() => handleClick()} className="burger-menu"><GiHamburgerMenu /></div>

            </div>
        </div >
    )
}