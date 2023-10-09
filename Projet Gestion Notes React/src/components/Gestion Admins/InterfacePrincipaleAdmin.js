// InterfaceAdmin
// style={{backgroundColor:"gray"}}   backgroundColor: "transparent"

import imgBtnGestionRespos from "../images/gestion_responsable.png"
import imgBtnGestionEtudiants from "../images/gestion_etudiant 1.png"
import imgBtnGestionProfs from "../images/affecterProfIcon.jpg"
import imgBtnGestionNotes from "../images/gestion_notes.png"
import imgBtnGestionAbsence from "../images/AbsenceIcon.png"
import imgBtnGestionBulletin from "../images/gestion_bulletinIcon.png"
import imgBtnGestionNiveaux from "../images/gestion_niveaux.png"
import imgBtnGestionSection from "../images/gestion_section.png"
import imgBtnDateInscription from "../images/dateInscription.png"
import { useHistory } from 'react-router-dom';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PageTitle from '../PageTitle';
import HeaderAdmin from "../../Header and Footer/HeaderAdmin"
import FooterComponent from "../../Header and Footer/FooterComponent"

const InterfaceAdmin = () => {

   const history = useHistory();

    function lienInterfaceNotes(){
        // window.location.href = "/gestion-notes";
        // <PageTitle title="Interface Gestion des Notes" />
        history.replace('/gestion-notes');
    }

    function lienInterfaceAbsence(){
      history.replace('/gestion-absences');
  }

  function lienInterfaceEtudiants(){
    history.replace('/interface-etudiant');  
   }

   function lienInterfaceResponsables(){
    history.replace('/interface-responsable'); 
   }

   function lienInterfaceNiveaux(){
    history.replace('/interface-principale-niveaux');
   }

   function lienInterfaceSection(){
    history.replace('/interface-principale-section');
}

function lientInterfaceBulletin(){
  history.replace('/recherche-etudiant-bulletin'); 
  // onClick={ () => lientInterfaceBulletin()}
}

function lientInterfaceProf(){
  history.replace('/interface-prof'); 
  // onClick={ () => lientInterfaceProf()}
}

function lientInterfaceDateInscrip(){
  history.replace('/interface-date-inscription'); 
  // onClick={ () => lientInterfaceDateInscrip()}
}


  return (
   <div style={{backgroundColor:"gray"}} > 
    <HeaderAdmin />
    <br/> <br/> <br/>
    <div  className="container"> {/* Ajoutez la classe "offset-2 offset-md-0" pour décaler le bouton de 2 colonnes vers la gauche */}
       <div className="row">    {/*"col-4" : chaque bouton occupe 4 colonnes sur les 12 disponibles */}

{/*------------------------------- Bouton :  "Gestion Responsables"------------------------- */}
        <div className="col-4 offset-1"> {/* Ajoutez la classe "offset-2" pour décaler le bouton de 2 colonnes à droite */}
          <div onClick={lienInterfaceResponsables}>
          <ButtonWithImage 
            imageUrl={imgBtnGestionRespos}
            label="Gestion Responsables"
          /> </div>
        </div>
{/*------------------------------- Bouton :  "Gestion Professeurs" ------------------------- */}
        <div className="col-4 ">  {/* Ajoutez la classe "mr-3" pour ajouter une marge de 3 colonnes à droite */}
        <div onClick={ () => lientInterfaceProf()} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ButtonWithImage
            imageUrl={imgBtnGestionProfs}
            label="Gestion Professeurs" />  </div>
        </div>
{/*------------------------------- Bouton :  "Gestion Etudiants" ------------------------- */}
        <div className="col"> 
        <div onClick={lienInterfaceEtudiants}>
          <ButtonWithImage
            imageUrl={imgBtnGestionEtudiants}
            label="Gestion Etudiants"
          /> </div>
        </div>
    </div>
{/*------------------------------- ------- Partie II : ------------------------------------- */}
<br/> <br/> <br/> <br/>

   <div className="row"> 
 {/*------------------------------- Bouton :  "Gestion Notes" ------------------------- */}  
      <div className="col-4 offset-1"> 
       <div onClick={lienInterfaceNotes}>
          <ButtonWithImage
            imageUrl={imgBtnGestionNotes}
            label="Gestion Notes"  />
        </div>
        </div>
 {/*------------------------------- Bouton :  "Gestion d'Absences" ------------------------- */}  
      <div className="col-4"> 
       <div onClick={lienInterfaceAbsence}>
          <ButtonWithImage
            imageUrl={imgBtnGestionAbsence}
            label="Gestion Absences"  />
        </div>
        </div>
{/*------------------------------- Bouton :  "Gestion Bulletins" ------------------------- */}
       <div onClick={ () => lientInterfaceBulletin()} style={{ textDecoration: 'none', color: 'inherit' }}> 
        <div className="col"> 
          <ButtonWithImage
            imageUrl={imgBtnGestionBulletin}
            label="Gestion Bulletins"
          />
        </div> </div>
        </div>
{/*------------------------------- ------- Partie III : ------------------------------------- */}
<br/> <br/> <br/> <br/>

   <div className="row"> 
 {/*------------------------------- Bouton :  "Gestion Niveaux" ------------------------- */}  
      <div className="col-4 offset-1"> 
       <div onClick={lienInterfaceNiveaux}>
          <ButtonWithImage
            imageUrl={imgBtnGestionNiveaux}
            label="Gestion Niveaux"  />
        </div>
        </div>

 {/*------------------------------- Bouton :  "Gestion Sections" ------------------------- */}  
      <div className="col-4"> 
       <div onClick={lienInterfaceSection}>
          <ButtonWithImage
            imageUrl={imgBtnGestionSection}
            label="Gestion Sections"  />
        </div>
        </div>

{/*------------------------------- Bouton :  "Gestion date d'inscription" ------------------------- */}
<div onClick={ () => lientInterfaceDateInscrip()} style={{ textDecoration: 'none', color: 'inherit' }}> 
        <div className="col"> 
          <ButtonWithImage
            imageUrl={imgBtnDateInscription}
            label="Date Inscription"
          />
        </div> </div>

    </div>  
 </div>

 

    <br/> <br/> <br/> <br/> <br/> 
    <FooterComponent />
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

export default InterfaceAdmin;



