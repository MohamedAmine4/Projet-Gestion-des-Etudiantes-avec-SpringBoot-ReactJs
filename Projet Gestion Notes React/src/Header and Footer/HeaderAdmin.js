import React, {useEffect, useState} from 'react';
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../components/images/logoo.png";
// import { FaFacebook, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import responsableService from '../components/Gestion Responsables/ResponsableService';

function HeaderAdmin () {

       // Pour le test : CIN d'Administrateur : 
    //const cinRespo= localStorage.getItem('cinAdmin'); // Récupérer le CIN depuis le localStorage ;
      const cinRespo = 'CN47852' ; // un seul admin dans l'application avec CIN constant : CN47852

   const [responsable,setResponsable]=useState([]);
    useEffect(() => {
        responsableService.getResponsableById(cinRespo).then((reponse) => {
            setResponsable(reponse.data);
        });
      }, [cinRespo]);

//import { useHistory } from 'react-router-dom';
  const history = useHistory();
  const handleLogout = () => {
      history.replace('/interface-user');
  };
  const AccueilAdmin = () => {
      history.replace('/interface-admin');
  };

      return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height:"120px"}}>
        <div className="container">
          {/* Réseaux sociaux */} 
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <FaFacebook style={{marginRight:"6%"}} size={60} color="#3b5998" /> 
              <FaWhatsapp style={{marginLeft:"8%"}} size={60} color="#25D366" />    
               <FaInstagram style={{marginLeft:"12%"}} size={60} color="#e4405f" /> 
              <FaEnvelope style={{marginLeft:"15%"}} size={60} color="#e74c3c" /> */}
              
              {/* <h5 style={{color:"#696969"}}>CHAHBI Abdessamad, CN51723 </h5> */}
               <h5 style={{color:"#696969"}}>{responsable.nom} { responsable.prenom}, { responsable.cin} </h5>
          </div>
  
          {/* Logo */}
          <div style={{marginLeft:"4%"}} className="navbar-brand">
            <img src={logo} alt="Logo" />
          </div>
  
          {/* Éléments de navigation */}
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="nav-link active" onClick={() => AccueilAdmin()}>
              Accueil
            </div>
            <div className="nav-link" >
              Contact
            </div>
            <div className="nav-link" >
              À propos
            </div>
            <div onClick={() =>handleLogout()} className="nav-link" >
              Déconnexion
            </div>
          </div>
        </div>
      </nav>
    );
}

export default HeaderAdmin;
