// InterfaceAdmin
// style={{backgroundColor:"gray"}}   backgroundColor: "transparent"

import imgBtnAjouterProf from "../images/addProffesortIcon 1.jpg"
import imgBtnConsulterProf from "../images/consulterProfessorIcon.jpg"
import imgBtnAffecterProf from "../images/affecterProfIcon.jpg"
// import AjouterModifierProfesseur from './AjouterModifierProfesseur'

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderAdmin from "../../Header and Footer/HeaderAdmin";
// import { Link } from 'react-router-dom';
// import PageTitle from '../PageTitle';
// import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const InterfaceProfs = () => {
  // const [showAddProfesseurModal, setShowAddProfesseurModal] = React.useState(false);
   const history = useHistory();

  function addProfesseur(){
    history.replace("/ajouter-modifier-prof/_add");  // _add : c'est nom quelconque pour distinguer entre Ajoutre ou Modifier Professeur 
    // setShowAddProfesseurModal(true); 
  }

  function affecterProf(){
    history.replace("/interface-affecter-prof");
  }

  function consulterProf(){
    history.replace("/consulter-prof");
  }


  return (
   <div style={{backgroundColor:"gray"}} >
     <HeaderAdmin />
     <br/> <br/> <br/>
    <div  className="container"> {/* Ajoutez la classe "offset-2 offset-md-0" pour décaler le bouton de 2 colonnes vers la gauche */}
       <div className="row">    {/*"col-4" : chaque bouton occupe 4 colonnes sur les 12 disponibles */}

{/*------------------------------- Bouton :  "Ajouter Professeur"------------------------- */}
        <div className="col-4 offset-1"> {/* Ajoutez la classe "offset-2" pour décaler le bouton de 2 colonnes à droite */}
         <div onClick={addProfesseur}>
          <ButtonWithImage 
            imageUrl={imgBtnAjouterProf}
            label="Ajouter Professeur"
          /> </div>
        </div>
{/*------------------------------- Bouton :  "Consulter Professeur" ------------------------- */}
        <div className="col-4 ">  {/* Ajoutez la classe "mr-3" pour ajouter une marge de 3 colonnes à droite */}
         <div onClick={consulterProf} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ButtonWithImage
            imageUrl={imgBtnConsulterProf}
            label="Consulter Professeur" /> </div> 
        </div>
{/*------------------------------- Bouton :  "Affecter Professeur" ------------------------- */}
        <div className="col" onClick={affecterProf}> 
          <ButtonWithImage
            imageUrl={imgBtnAffecterProf}
            label="Affecter Professeur"
          />
        </div>
    </div>
 </div>

  {/* <Modal show={showAddProfesseurModal} onHide={() => setShowAddProfesseurModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter Professeur</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AjouterModifierProfesseur />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowAddProfesseurModal(false)}>Fermer</Button>
        <Button variant="primary">Enregistrer</Button>
      </Modal.Footer>
    </Modal>  */}


    <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/><br/><br/>
 </div> 
  );
};

const ButtonWithImage = ({ imageUrl, label }) => {
  return (
    // <div className="text-center">
      <div 
        className="text-center rounded-circle border-danger p-3" //text-center rounded-circle border border-danger p-3
        style={{ width: '180px', height: '170px', border: "2px solid"}}
      >
        <img src={imageUrl} alt="" style={{ borderRadius:"50%", maxWidth: '100%', maxHeight: '100%' }} />
      {/* </div> */} <br/>
        <label style={{marginTop:"15%" , fontSize:"110%" , fontWeight: "bold" , whiteSpace: "nowrap"}}> {label}</label>
    </div>
  );
};

export default InterfaceProfs;



