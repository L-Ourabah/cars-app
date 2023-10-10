import '../style/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { hideSidebar } from '../redux/actions/sidebar-action.js';

// import { useContext } from 'react';
// import { AuthContext } from '../context/authContext';

import { FaCartArrowDown, FaUser } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { VscLibrary } from 'react-icons/vsc';
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

    // const { currentUser, logout } = useContext(AuthContext);

    const handleLogout = async () => {
        // await logout(AuthContext);
        navigate("/");
        handleClick();
        console.log("deconnexion et redirection navbar responsive!");
    }

    return (
        <div className="sidebar" id={sidebar ? "display-sidebar" : "hide-sidebar"}>

            <div className="sidebar-close"><ImCross onClick={() => handleClick()} /></div>

            <div className="sidebar-links-list">

                <Link className="sidebar-link" to="/" onClick={() => handleClick()}>< VscLibrary /> Les livres</Link>

                {/* {currentUser && currentUser.role === "admin" ? <Link className="sidebar-link" to="/admin/gestion" onClick={() => handleClick()}><AiFillSetting />Gérer les livres</Link> : ""} */}

                {/* {currentUser ?
                    <Link className="sidebar-link" onClick={() => handleLogout()}> <RiLogoutCircleRFill /> Se déconnecter</Link>
                    :
                    <Link className="sidebar-link" to="/signin" onClick={() => handleClick()}> <FaUser /> Se connecter</Link>} */}

                <Link className="sidebar-link" to="/" onClick={() => handleClick()}><FaCartArrowDown /> Panier</Link>
                <Link className="sidebar-link" to="/About" onClick={() => handleClick()}> About</Link>

            </div>
        </div>
    )
}