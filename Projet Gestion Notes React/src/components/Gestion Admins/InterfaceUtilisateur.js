import {React , useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment";
import dateInscriptionService from '../Gestion Inscription/DateInsciprtionService';
// import Carousel from 'react-bootstrap/Carousel';
import { useHistory } from 'react-router-dom'

import imgBtnGestionAdmins from "../images/interface_admin.png"
import imgBtnGestionRespos from "../images/interface_responsable.png"
import imgBtnGestionProfs from "../images/interface_prof.png"
import imgBtnGestionEtudiants from "../images/interface_etudiant.png"

function InterfaceUser(props) {

  const history = useHistory();

function lienInterfaceAdmins(){
    // window.location.href = "/loginAdmin";
    history.replace('/loginAdmin');  
}

function lienInterfaceResponsables(){
  history.replace('/loginResponsable');
  }

function lienInterfaceProfs(){
  history.replace('/loginProfesseur');
  }

function lienInterfaceEtudiants(){
history.replace('/loginEtudiant');
}

function lienInterfaceInscription(){
  history.replace('/interface-inscription');
  }


  const [dateInscreption, setDateInscription] = useState('');
  useEffect(() => {
  dateInscriptionService.getDateById(36).then(res => {
    let date = res.data;

    // console.log(JSON.stringify(date));
   
    // Convertir la date de naissance en objet de type Date
    const dateNaissanceObj = new Date(date.dateInscreption);

    // Formater la date dans le format ISO
    // const dateNaissanceISO = moment(dateNaissanceObj).format('YYYY-MM-DD');
    // const dateNaissanceISO = moment(dateNaissanceObj).format('DD MMMM YYYY');
    const dateNaissanceISO = moment(dateNaissanceObj).format('DD/MM/YYYY');
    setDateInscription(dateNaissanceISO);
  });
}, []);

// const today = moment().format('YYYY-MM-DD');
//   const twoMonthsAgo = moment(dateInscreption).subtract(2, 'months').format('YYYY-MM-DD');
//   const showInscrireMaintenant = today < twoMonthsAgo;

// Afficher la notification uniquement si la date actuelle est antérieure (inferieure) à la date d'inscription :

const today = moment().format('YYYY-MM-DD');
const inscriptionDate = moment(dateInscreption, 'DD/MM/YYYY');
const showInscrireMaintenant = moment(today).isBefore(inscriptionDate);

  //Une variable showInscrireMaintenant est déclarée et initialisée avec une valeur booléenne qui indique si la date actuelle (today) est antérieure à la date d'inscription moins deux mois (twoMonthsAgo). Si la condition est vraie, cela signifie que deux mois se sont écoulés depuis la date d'inscription,

  return (
    <div style={{backgroundColor:"#DCDCDC"}} >  <br/> <br/> 
    
     <div  className="container">
   
     {/* {showInscrireMaintenant && <h6 onClick={lienInterfaceInscription} style={{marginLeft:"3%"}} >L'École Polytechnique des Génies vous propose des cours en présentiel ainsi que des cours à distance. La dernière date d'inscription est le {dateInscreption}. Inscrivez-vous dès maintenant !</h6>} */}

     {showInscrireMaintenant && <h6 className='text-center' onClick={lienInterfaceInscription} style={{marginLeft:"0%", cursor:"pointer"}} >La dernière date d'inscription est le {dateInscreption}. Inscrivez-vous dès maintenant !</h6>}
  
   <br/> <br/>      
       <div className="row">
 
 {/*------------------------------- Bouton :  "Gestion Admins"------------------------- */}
         <div className="col-6 offset-1"> 
           <div onClick={lienInterfaceAdmins}>
           <ButtonWithImage 
             imageUrl={imgBtnGestionAdmins} />
           </div>
         </div>
 {/*------------------------------- Bouton :  "Gestion Responsables" ------------------------- */}
         <div className="col"> 
         <div onClick={lienInterfaceResponsables}>
           <ButtonWithImage
             imageUrl={imgBtnGestionRespos} /> 
          </div>
         </div>
     </div>
 {/*------------------------------- ------- Partie II : ------------------------------------- */}
 <br/> <br/> <br/>
 
    <div className="row"> 
  {/*------------------------------- Bouton :  "Gestion Professeurs" ------------------------- */}  
       <div className="col-6 offset-1"> 
        <div onClick={lienInterfaceProfs}>
           <ButtonWithImage
             imageUrl={imgBtnGestionProfs} />
         </div>
         </div>
 {/*------------------------------- Bouton :  "Gestion Etudiants" ------------------------- */}     
         <div className="col"> 
         <div onClick={lienInterfaceEtudiants}>
           <ButtonWithImage
             imageUrl={imgBtnGestionEtudiants} /> 
          </div>
         </div>
     </div>     
  </div>
   
     <br/> <br/> <br/> <br/>    <br/> <br/> <br/> <br/> 

     <header style={{backgroundColor:"#DCDCDC"}}>
     
     </header>

  </div> 
   );
 };
 
 const ButtonWithImage = ({ imageUrl }) => {
   return (
     // <div className="text-center">
       <div 
         className="text-center" //text-center rounded-circle border border-danger p-3
         style={{ width: '280px', height: '230px'}}>
         <img src={imageUrl} alt="" style={{ borderRadius:"50%", maxWidth: '100%', maxHeight: '100%' }} />
     </div>    
   );
 };

export default InterfaceUser;
