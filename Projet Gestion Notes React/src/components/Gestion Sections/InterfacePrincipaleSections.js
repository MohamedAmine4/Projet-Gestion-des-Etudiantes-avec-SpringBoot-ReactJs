import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgBtnLesSections from "../images/gestion_section.png";
import imgBtnSectionFiliere from "../images/section_filiere.png";
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
  import { useHistory } from 'react-router-dom';

const InterfacePrincipaleSection = () => {
  // const [showAddProfesseurModal, setShowAddProfesseurModal] = React.useState(false);
  const history = useHistory();

  function gestionSection(){
    history.replace("/interface-section");
  }

  function gestionSectionFiliere(){
    history.replace("/interface-section-filiere");
  }

  return (
   <div style={{backgroundColor:"gray", color:'gray'}} > 
    <HeaderAdmin />
    <br/> <br/> <br/>
    <div  className="container"> {/* Ajoutez la classe "offset-2 offset-md-0" pour décaler le bouton de 2 colonnes vers la gauche */}
       <div className="row">    {/*"col-4" : chaque bouton occupe 4 colonnes sur les 12 disponibles */}

{/*------------------------------- Bouton :  "Gestion Sections"------------------------- */}
        <div className="col-4 offset-3"> {/* Ajoutez la classe "offset-2" pour décaler le bouton de 2 colonnes à droite */}
         <div  >
         <div onClick={gestionSection}>
          <ButtonWithImage 
            imageUrl={imgBtnLesSections}
            label="Les Sections"
            style={{border:'none', color:"black"}}
          />   </div>
          </div>

          </div>
        
{/*------------------------------- Bouton :  "Gestions Sections & Filières" ------------------------- */}
        <div className="col-4 ">  {/* Ajoutez la classe "mr-3" pour ajouter une marge de 3 colonnes à droite */}
         <div onClick={gestionSectionFiliere} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ButtonWithImage
            imageUrl={imgBtnSectionFiliere}
            label="Sections - Filières" /></div> 
        </div>
    </div>
 </div>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
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
        <label style={{marginTop:"15%" , fontSize:"110%" , fontWeight: "bold" , whiteSpace: "nowrap",color:'black'}}> {label}</label>
    </div>
  );
};

export default InterfacePrincipaleSection;



