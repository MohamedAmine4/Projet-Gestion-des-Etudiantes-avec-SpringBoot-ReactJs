import imgBtnGestionNotes from "../components/images/consulter_notes.png"
import imgBtnGestionAbsence from "../components/images/consulter_absence.png"
import imgBtnRelvesNotes from "../components/images/releves_notes.png"

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderEtudiant from "../Header and Footer/HeaderEtudiant";
import FooterComponent from "../Header and Footer/FooterComponent";
import { useHistory } from 'react-router-dom';

const InterfacePrincipaleEtudiants = () => {

  const history = useHistory();

   function lienInterfaceNotes(){
    history.replace("/consulter-notes-etud");
   }  

   function lienInterfaceBulletins(){
    history.replace("/releves-notes-etud");
   } 

  function lienInterfaceAbsence(){
    history.replace("/consulter-absences-etud");
  }

  return (
   <div style={{backgroundColor:"gray"}} >
     <HeaderEtudiant />
     <br/> <br/> <br/>
    <div  className="container"> {/* Ajoutez la classe "offset-2 offset-md-0" pour décaler le bouton de 2 colonnes vers la gauche */}
       <div className="row">    {/*"col-4" : chaque bouton occupe 4 colonnes sur les 12 disponibles */}

{/*------------------------------- Bouton :  "Consulter Notes" ------------------------- */}
      <div className="col-4 offset-1"> 
        <div onClick={lienInterfaceNotes}>
          <ButtonWithImage
            imageUrl={imgBtnGestionNotes}
            label="Consulter Notes"
          /> </div>
        </div>

 {/*------------------------------- Bouton :  "Relevés de notes" ------------------------- */}  
 <div className="col-4"> 
       <div onClick={lienInterfaceBulletins}>
          <ButtonWithImage
            imageUrl={imgBtnRelvesNotes}
            label="Relevés de notes"  />
        </div>
        </div>

 {/*------------------------------- Bouton :  "Consulter Absences" ------------------------- */}  
    <div className="col"> 
       <div onClick={lienInterfaceAbsence}>
          <ButtonWithImage
            imageUrl={imgBtnGestionAbsence}
            label="Consulter Absences"  />
        </div>
        </div>

         
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

export default InterfacePrincipaleEtudiants;



