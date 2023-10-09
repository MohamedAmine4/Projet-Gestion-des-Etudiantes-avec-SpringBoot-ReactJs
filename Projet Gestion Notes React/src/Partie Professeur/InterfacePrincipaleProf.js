import imgBtnGestionNotes from "../components/images/gestion_notes.png"
import imgBtnGestionAbsence from "../components/images/AbsenceIcon.png"

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderProfesseur from "../Header and Footer/HeaderProfesseur";
import FooterComponent from "../Header and Footer/FooterComponent";
import { useHistory } from 'react-router-dom';

const InterfaceProfesseur = () => {

  const history = useHistory();

   function lienInterfaceNotes(){
    history.replace("/gestion-notes-prof");
   }  

  function lienInterfaceAbsence(){
    history.replace("/gestion-absences-prof");
  }

  return (
   <div style={{backgroundColor:"gray"}} > 
    <HeaderProfesseur />
    <br/> <br/> <br/>
    <div  className="container"> {/* Ajoutez la classe "offset-2 offset-md-0" pour décaler le bouton de 2 colonnes vers la gauche */}
       <div className="row">    {/*"col-4" : chaque bouton occupe 4 colonnes sur les 12 disponibles */}

{/*------------------------------- Bouton :  "Gestion Notes" ------------------------- */}
      <div className="col-4 offset-3"> 
        <div onClick={lienInterfaceNotes}>
          <ButtonWithImage
            imageUrl={imgBtnGestionNotes}
            label="Gestion Notes"
          /> </div>
        </div>
 {/*------------------------------- Bouton :  "Gestion Absences" ------------------------- */}  
    <div className="col-4"> 
       <div onClick={lienInterfaceAbsence}>
          <ButtonWithImage
            imageUrl={imgBtnGestionAbsence}
            label="Gestion Absences"  />
        </div>
        </div>
 {/*------------------------------- Bouton :  "Notifier Admin" ------------------------- */}  
    {/* <div className="col"> 
       <div onClick={lienInterfaceNotifier}>
          <ButtonWithImage
            imageUrl={imgBtnNotifierAdmin}
            label="Notifier Admin"  />
        </div>
        </div> */}
         
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

export default InterfaceProfesseur;



