import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgBtnAddStudents from "../images/addStudentIcon 1.png";
import imgBtnConsulterStudents from "../images/consulterEtudiantIcon.png";
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
import { useHistory } from 'react-router-dom';

const InterfacePrincipaleEtudiant = () => {
  // const [showAddProfesseurModal, setShowAddProfesseurModal] = React.useState(false);

  const history = useHistory();
  function addEtudiant(){
     history.replace('/ajouter-etudiant');
  }

  function consulterEtudiant(){
    history.replace('/consulter-etudiant');
 }

  return (
   <div style={{backgroundColor:"gray", color:'gray'}} > 
    <HeaderAdmin />
    <br/> <br/> <br/>
    <div  className="container"> {/* Ajoutez la classe "offset-2 offset-md-0" pour décaler le bouton de 2 colonnes vers la gauche */}
       <div className="row">    {/*"col-4" : chaque bouton occupe 4 colonnes sur les 12 disponibles */}

{/*------------------------------- Bouton :  "Ajouter Etudiant"------------------------- */}
        <div className="col-4 offset-3"> {/* Ajoutez la classe "offset-2" pour décaler le bouton de 2 colonnes à droite */}
         <div  >
         <div onClick={addEtudiant}>
          <ButtonWithImage 
            imageUrl={imgBtnAddStudents}
            label="Ajouter Etudiant"
            style={{border:'none', color:"black"}}
          />   </div>
          </div>

          </div>
        
{/*------------------------------- Bouton :  "Consulter Etudiant" ------------------------- */}
        <div className="col-4 ">  {/* Ajoutez la classe "mr-3" pour ajouter une marge de 3 colonnes à droite */}
         <div onClick={consulterEtudiant} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ButtonWithImage
            imageUrl={imgBtnConsulterStudents}
            label="Consulter Etudiant" /></div> 
        </div>
    </div>
 </div>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/>
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

export default InterfacePrincipaleEtudiant;



