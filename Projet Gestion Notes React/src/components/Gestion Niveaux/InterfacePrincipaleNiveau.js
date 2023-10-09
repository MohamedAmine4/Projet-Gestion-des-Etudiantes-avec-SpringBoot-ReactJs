import imgBtnGestionNiveau from "../images/gestion_niveau.png"
import imgBtnGestionFiliere from "../images/gestion_filiere.png"
import imgBtnGestionNivScolaire from "../images/gestion_niveau_scolaire.png"
import imgBtnGestionModule from "../images/gestion_module.png"

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderAdmin from "../../Header and Footer/HeaderAdmin";
// import { Link } from 'react-router-dom';
// import PageTitle from '../PageTitle';
import { useHistory } from 'react-router-dom';

const InterfacePrincipaleNiveau = () => {

  const history = useHistory();

    function lienInterfaceNiveaux(){
      history.replace("/interface-niveau");
        // <PageTitle title="Interface Gestion des Niveaux" /> interface-filiere
    }

    function lienInterfaceFilieres(){
      history.replace("/interface-filiere");
     }

   function lienInterfaceNiveauxScolaires(){
    history.replace("/interface-niveau-scolaire");
   }

   function lienInterfaceModules(){
    history.replace("/interface-module");
   }


  return (
   <div style={{backgroundColor:"gray"}} > 
    <HeaderAdmin />
    <br/> <br/> <br/>
    <div  className="container"> {/* Ajoutez la classe "offset-2 offset-md-0" pour décaler le bouton de 2 colonnes vers la gauche */}
       <div className="row">    {/*"col-4" : chaque bouton occupe 4 colonnes sur les 12 disponibles */}

{/*------------------------------- Bouton :  "Gestion Niveaux"------------------------- */}
        <div className="col-4 offset-1"> {/* Ajoutez la classe "offset-2" pour décaler le bouton de 2 colonnes à droite */}
          <div onClick={lienInterfaceNiveaux}>
          <ButtonWithImage 
            imageUrl={imgBtnGestionNiveau}
            label="Gestion Niveaux"
          /> </div>
        </div>
{/*------------------------------- Bouton :  "Gestion Filières" ------------------------- */}
        <div className="col-4 ">  {/* Ajoutez la classe "mr-3" pour ajouter une marge de 3 colonnes à droite */}
        <div onClick={lienInterfaceFilieres} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ButtonWithImage
            imageUrl={imgBtnGestionFiliere}
            label="Gestion Filières" />  </div>
        </div>
{/*------------------------------- Bouton :  "Gestion Niveaux Scolaires" ------------------------- */}
        <div className="col"> 
        <div onClick={lienInterfaceNiveauxScolaires}>
          <ButtonWithImage
            imageUrl={imgBtnGestionNivScolaire}
            label="Gestion Niveaux Scolaires"
          /> </div>
        </div>
    </div>
{/*------------------------------- ------- Partie II : ------------------------------------- */}
<br/> <br/> <br/> <br/>

   <div className="row"> 
 {/*------------------------------- Bouton :  "Gestion Modules" ------------------------- */}  
      <div className="col-4 offset-1"> 
       <div onClick={lienInterfaceModules}>
          <ButtonWithImage
            imageUrl={imgBtnGestionModule}
            label="Gestion Modules"  />
        </div>
        </div>
 
    </div>  
 </div>

    <br/> <br/> <br/> <br/> <br/> <br/> <br/>
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
        <label style={{marginLeft:"-12%", marginTop:"15%" , fontSize:"110%" , fontWeight: "bold" , whiteSpace: "nowrap"}}> {label}</label>
    </div>
  );
};

export default InterfacePrincipaleNiveau;



