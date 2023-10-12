import React from 'react';
import '../style/Footer.css'; // Assurez-vous d'importer le CSS approprié ici

function Footer() {
  return (
    <footer>
      <div className="footer-contenaire"> 
         
          <div className="link-des">
            <a href="#" className="footer-links">Home</a>
            <a href="#" className="footer-links">About</a>
            
            
            <a href="#" className="footer-links">Contact</a>
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
