import imgBtnGestionNivScolaire from "../components/images/gestion_niveau_scolaire.png"
import imgBtnGestionModule from "../components/images/gestion_module.png"
import imgBtnGestionAbsence from "../components/images/AbsenceIcon.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderResponsable from "../Header and Footer/HeaderResponsable";
import FooterComponent from "../Header and Footer/FooterComponent";
// import React , { useEffect, useContext } from 'react';
// import { AuthContext } from "../components/Gestion Admins/AuthContext";
import { useHistory } from 'react-router-dom';


const InterfaceResponsable = () => {

  const history = useHistory();

    function lienInterfaceAbsence(){
      // window.location.href = "/gestion-absences-respo";
      history.replace('/gestion-absences-respo'); 
  }

  function lienInterfaceNiveauxScolaires(){
       history.replace("/interface-niveau-scolaire-respo");
   }

   function lienInterfaceModules(){
        history.replace("/interface-module-respo");
   }

  //  const { cin } = useContext(AuthContext);
  // const cin = localStorage.getItem('cin'); // Récupérer le CIN depuis le localStorage

 

  return (
   <div style={{backgroundColor:"gray"}} >  
    <HeaderResponsable />
   <br/> <br/> <br/>
    <div  className="container"> {/* Ajoutez la classe "offset-2 offset-md-0" pour décaler le bouton de 2 colonnes vers la gauche */}
       <div className="row">    {/*"col-4" : chaque bouton occupe 4 colonnes sur les 12 disponibles */}

{/*------------------------------- Bouton :  "Gestion Niveaux Scolaires" ------------------------- */}
      <div className="col-4 offset-1"> 
        <div onClick={lienInterfaceNiveauxScolaires}>
          <ButtonWithImage
            imageUrl={imgBtnGestionNivScolaire}
            label="Gestion Niveaux Scolaires"
          /> </div>
        </div>
 {/*------------------------------- Bouton :  "Gestion Modules" ------------------------- */}  
    <div className="col-4"> 
       <div onClick={lienInterfaceModules}>
          <ButtonWithImage
            imageUrl={imgBtnGestionModule}
            label="Gestion Modules"  />
        </div>
        </div>
 {/*------------------------------- Bouton :  "Gestion d'Absences" ------------------------- */}  
 <div className="col"> 
       <div onClick={lienInterfaceAbsence}>
          <ButtonWithImage
            imageUrl={imgBtnGestionAbsence}
            label="Gestion Absences"  />
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

export default InterfaceResponsable;



