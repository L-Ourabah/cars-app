import '../style/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { hideSidebar } from '../redux-store/actions/sidebar-action';

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';




// Les logos
import { FcAutomotive } from 'react-icons/fc';
import { FaUser } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';

import { AiFillSetting } from 'react-icons/ai';

import { RiLogoutCircleRFill } from 'react-icons/ri';
import { ImCross } from 'react-icons/im';

export default function Sidebar() {

    const dispatch = useDispatch();

    const sidebar = useSelector((state) => state.sidebar);

    const navigate = useNavigate();

    const handleClick = () => {
        console.log("prout")
        dispatch(hideSidebar());
    }

    const { currentUser, logout } = useContext(AuthContext);

    const handleLogout = async () => {
        await logout(AuthContext);
        navigate("/");
        handleClick();
        console.log("deconnexion et redirection navbar responsive!");
    }

    return (
        <div className="sidebar" id={sidebar ? "display-sidebar" : "hide-sidebar"}>

            <div className="sidebar-close"><ImCross onClick={() => handleClick()} /></div>

            <div className="sidebar-links-list">

               

                {currentUser && currentUser.role === "admin" ? <Link className="sidebar-link" to="/admin/gestion" onClick={() => handleClick()}><AiFillSetting /></Link> : ""}

                {currentUser ?
                    <Link className="sidebar-link" onClick={() => handleLogout()}> <RiLogoutCircleRFill /> </Link>
                    :
                    <Link className="sidebar-link" to="/connexion" onClick={() => handleClick()}> <FaUser /> </Link>}

                <Link className="sidebar-link" to="/Gallery" onClick={() => handleClick()}><FcAutomotive /> </Link>
                <Link className="sidebar-link" to="/About" onClick={() => handleClick()}> <FcAbout/></Link>

            </div>
        </div>
    )
}