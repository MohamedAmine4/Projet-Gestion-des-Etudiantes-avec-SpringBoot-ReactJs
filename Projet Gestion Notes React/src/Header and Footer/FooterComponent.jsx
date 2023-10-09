import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaFacebook } from "@fortawesome/fa"
// import logo from './logoo.png'
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaMobileAlt, FaPhone, FaEnvelope } from "react-icons/fa";
class FooterComponent extends Component {

    constructor(props){
        super(props)
    
        this.state={
            
        }
        
      }

    render() {
        return (
            <div>
 <footer style={{maxWidth:"100%"}} className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
          <h5 className="mb-3 ligne ">À PROPOS DE NOUS</h5>
            {/* <img src={logo} alt="Logo" className="mb-3 logo-footer" /> */}
            <p className="mb-3">L'Ecole Polytechnique des Génies (EPG) est une société, entreprise et agence de services informatiques basée à Fès, au Maroc. Elle propose également des formations supérieures dans le domaine de l'informatique, ainsi que des cours de soutien et des certifications pour les professionnels.</p>
          </Col>
          <Col style={{marginLeft:"4%"}} lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 className="mb-3">CONTACTEZ-NOUS</h5>
            <p className="mb-3"> <FaMapMarkerAlt size={25} color="#1da1f2" /> 22, Rue Mohammed El Hayani, V.N Fès, 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4éme Etage, Appt 20 Imm Hazzaz Fes - Maroc</p> 
            <p className="mb-3"> <FaEnvelope size={25} color="#3B82F6" />&nbsp; contact@epg.ma</p> 
            <p className="mb-3"> <FaMobileAlt size={25} color="#1da1f2" />&nbsp;  (+212) 06 60 77 73 82</p> 
            <p className="mb-3"> <FaPhone size={25} color="#1da1f2" /> &nbsp; (+212) 05 35 62 18 65</p> 
          </Col>
          <Col style={{marginLeft:"1%"}} lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="mb-3">LIENS UTILES</h5>
            <ul style={{marginLeft:"6%"}} className="list-unstyled">
              <li className="mb-2"><div className="text-white">Accueil</div></li>
              {/* <li className="mb-2"><a href="/interface-admin" className="text-white">Accueil</a></li> */}
              <li className="mb-2"><div className="text-white">À propos</div></li>
              <li className="mb-2"><div className="text-white">Contact</div></li>
              <li className="mb-2"><div className="text-white">Gestion des Admins</div></li>
              <li className="mb-2"><div className="text-white">Gestions des Respos</div></li>
              <li className="mb-2"><div className="text-white">Gestion des Profs</div></li>
              <li className="mb-2"><div className="text-white">Deconnexion</div></li>
            </ul>
          </Col>
          <Col style={{marginLeft:"-11%"}} >
            <h5 style={{marginLeft:"33%"}} className="mb-4">SUIVEZ NOUS</h5>
              {/* Facebook - Whatsapp - Instagram - Twitter - Linkdien - Email */}
              <FaFacebook style={{marginLeft:"35%"}} size={40} color="#3b5998" /> 
              <FaWhatsapp style={{marginLeft:"20%"}} size={40} color="#25D366" />
               <br/> <br/>
               <FaInstagram style={{marginLeft:"35%"}} size={40} color="#e4405f" /> 
              <FaTwitter style={{marginLeft:"20%"}} size={40} color="#1da1f2" /> 
              <br/> <br/>
              <FaLinkedin style={{marginLeft:"35%"}} size={40} color="#0077b5" />
              <FaEnvelope style={{marginLeft:"20%"}} size={40} color="#e74c3c" />
               <br/> <br/>

              
          </Col>
        </Row>
      </Container>
      {/* <div  className="bg-dark text-white py-4"> */}
        <Container >
       <br/>   <p style={{borderTop:"2px solid white", paddingTop:"1.5%" , marginBottom:"-10%"}} className="text-center mb-0">&copy; 2013 - {new Date().getFullYear()} Ecole polytechnique des génies. Tous droits réservés.</p>
        </Container>
      {/* </div> */}
    </footer>
            </div>
        );
    }
}

export default FooterComponent;