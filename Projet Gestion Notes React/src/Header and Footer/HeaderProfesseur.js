import React, {useEffect, useState} from 'react';
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../components/images/logoo.png";
// import { FaFacebook, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import professeurService from '../components/Gestion Profs/ProfesseurService';

function HeaderProfesseur () {

       // Pour le test : CIN du Professeur:
   const cinProf= localStorage.getItem('cinProfesseur'); // Récupérer le CIN depuis le localStorage ;

   const [professeur,setProfesseur]=useState([]);
    useEffect(() => {
        professeurService.getProfesseurById(cinProf).then((reponse) => {
            setProfesseur(reponse.data);
        });
      }, [cinProf]);

//import { useHistory } from 'react-router-dom';
  const history = useHistory();
  const handleLogout = () => {
      history.replace('/interface-user');
  };
  const AccueilProf = () => {
      history.replace('/interface-principale-professeur');
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
               <h5 style={{color:"#696969"}}>{professeur.nom} { professeur.prenom}, { professeur.cin} </h5>
          </div>
  
          {/* Logo */}
          <div style={{marginLeft:"4%"}} className="navbar-brand">
            <img src={logo} alt="Logo" />
          </div>
  
          {/* Éléments de navigation */}
          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="nav-link active" onClick={() =>AccueilProf()}>
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

export default HeaderProfesseur;
