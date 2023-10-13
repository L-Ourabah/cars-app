import React from 'react';
import '../style/Footer.css'; // Assurez-vous d'importer le CSS approprié ici
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-contenaire"> 
         
      <div className="link-des">
    <Link to="/" className="footer-links">
        Home
    </Link>
    <Link to="/about" className="footer-links">
        About
    </Link>
    <Link to="/gallery" className="footer-links">
        Gallery
    </Link>
</div>
        

      
      </div>
      <div className="copyright">
        <hr />
        <p>© Copyright 2023 Cars App | Melanie Ourabah</p>
      </div>
    </footer>
  );
}

export default Footer;
