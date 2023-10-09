import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import HeaderApplication from './components/Gestion Admins/HeaderApplication';
// import FooterComponent from './components/FooterComponent';

// import GestionNotesEtudiants from './components/Gestion Notes/GestionNotes';
import interafceGestionNotesAdmin from './components/Gestion Notes/InterafceGestionNotesAdmin';
import InterfaceAdmin from './components/Gestion Admins/InterfacePrincipaleAdmin';
import InterfaceProfs from './components/Gestion Profs/InterfacePrincipaleProfs';
import ConsulterProfesseur from './components/Gestion Profs/ConsulterProfesseur';
import AjouterModifierProfesseur from './components/Gestion Profs/AjouterModifierProfesseur';
import AffecterProfesseur from './components/Gestion Profs/AffecterProfesseur';
import InterfaceAffecterProfesseur from './components/Gestion Profs/InterfaceAffecterProfesseur';
import InterfaceGestionAbsences from './components/Gestion Absences/InterfaceGestionAbsences';
import InterfaceGestionBulletins from './components/Gestion Bulletins/InterfaceGestionBulletins';
//---------------------------------------------------------------------------------------------------------------------------
import InterfaceEtudiant from './components/Gestion Etudiants/InterfacePrincipaleEtudiant';
import AjouterEtudiant from './components/Gestion Etudiants/AjouterEtudiant';
import ConsulterEtudiant from './components/Gestion Etudiants/ConsulterEtudiant';
import ModifierEtudiant from './components/Gestion Etudiants/ModifierEtudiant';

import InterfacePrincipaleResponsable from './components/Gestion Responsables/InterfacePrincipaleResponsable';
import AjouterResponsable from './components/Gestion Responsables/AjouterResponsable';
import ConsulterResponsable from './components/Gestion Responsables/ConsulterResponsable';
import ModifierResponsable from './components/Gestion Responsables/ModifierResponsable';

import InterfacePrincipaleNiveau from './components/Gestion Niveaux/InterfacePrincipaleNiveau';
import InterfaceNiveaux from './components/Gestion Niveaux/InterfaceNiveaux';
import ModifierNiveau from './components/Gestion Niveaux/ModifierNiveau';

import InterfaceFiliere from './components/Gestion Filieres/InterfaceFiliere';
import ModifierFilier from './components/Gestion Filieres/ModifierFilier';

import InterfaceNiveauScolaire from './components/Gestion Niveaux Scolaires/InterfaceNiveauScolaire';
import ModifierNiveauScolaire from './components/Gestion Niveaux Scolaires/ModifierNiveauScolaire';

import InterfaceModule from './components/Gestion Modules/InterfaceModule';
import ModifierModule from './components/Gestion Modules/ModifierModule';

import InterfaceAffectationResponsable from './components/Gestion Responsables/InterfaceAffectationRespo';
import ModifierAffectationResponsable from './components/Gestion Responsables/ModifierAffectationRespo';

import InterfaceSection from './components/Gestion Sections/InterfaceSection';
import ModifierSection from './components/Gestion Sections/ModifierSection';

import InterfaceSectionFilier from './components/Gestion Sections Filieres/InterfaceSectionFilier';
import InterfacePrincipaleSection from './components/Gestion Sections/InterfacePrincipaleSections';
import InterfaceDateInscription from './components/Gestion Inscription/InterfaceDateInscreption';
import ModifierDateInscription from './components/Gestion Inscription/ModifierDateInscreption';
import InterfaceInscreption from './components/Gestion Inscription/InterfaceInscreption';
// import ImprimerInscription from './components/Gestion Inscription/ImprimerInscription';
import ImprimerInscriptionTest from './components/Gestion Inscription/ImprimerInscriptionTest';
import InterfaceRechercheEtudiant from './components/Gestion Bulletins/InterfaceRechercheEtudiant';
import InterfaceGestionBulletinsTest from './components/Gestion Bulletins/InterfaceGestionBulletins_Test';

import InterfaceUser from './components/Gestion Admins/InterfaceUtilisateur';
// import Login from './components/Login/Login';
import LoginInterfaceAdmin from './components/Gestion Admins/LoginInterface';
import LoginInterfaceRespo from './components/Gestion Admins/LoginInterface';
import LoginInterfaceProf from './components/Gestion Admins/LoginInterface';
import LoginInterfaceEtud from './components/Gestion Admins/LoginInterface';
import InterfaceModifierPasswordAdmin from './components/Gestion Admins/InterfaceModifierPassword';
import InterfaceModifierPasswordRespo from './components/Gestion Admins/InterfaceModifierPassword';
import InterfaceModifierPasswordProf from './components/Gestion Admins/InterfaceModifierPassword';
import InterfaceModifierPasswordEtud from './components/Gestion Admins/InterfaceModifierPassword';

import { AuthProvider } from './components/Gestion Admins/AuthContext';

/*----------------- II- Partie Responsable --------------------------------------------------------------------*/
import InterfaceResponsable from './Partie Responsable/InterfacePrincipaleResponsable';
import InterfaceNiveauScolaireRespo from './Partie Responsable/Gestion Niveaux Scolaires/InterfaceNiveauScolaireRespo';
import ModifierNiveauScolaireRespo from './Partie Responsable/Gestion Niveaux Scolaires/ModifierNiveauScolaireRespo';
import InterfaceModuleRespo from './Partie Responsable/Gestion Modules/InterfaceModuleRespo';
import ModifierModuleRespo from './Partie Responsable/Gestion Modules/ModifierModuleRespo';
import InterfaceGestionAbsencesRespo from './Partie Responsable/Gestion Absences/InterfaceGestionAbsencesRespo';
/*----------------- III- Partie Professeur --------------------------------------------------------------------*/
import InterfaceProfesseur from './Partie Professeur/InterfacePrincipaleProf';
import InterfaceGestionAbsencesProf from './Partie Professeur/Gestion Absences/InterfaceGestionAbsencesProf';
import GestionNotesProf from './Partie Professeur/Gestion Notes/GestionNotesProf';
/*----------------- IIII- Partie Etudiant --------------------------------------------------------------------*/
import InterfacePrincipaleEtudiants from './Partie Etudiant/InterfacePrincipaleEtudiants';
import InterfaceConsulterAbsencesEtud from './Partie Etudiant/Consulter Absences/InterfaceConsulterAbsencesEtud';
import InterfaceConsulterBulletinsEtud from './Partie Etudiant/Consulter Bulletins/InterfaceConsulterBulletinsEtud';
import ConsulterNotesEtud from './Partie Etudiant/Consulter Notes/ConsulterNotesEtud';


function App() { 

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
  //     // Effectuer les actions de déconnexion ici
  //     // Réinitialiser les fonctionnalités de l'application
  //     // Effacer les données en cache
  //     // etc.
  //     // Vous pouvez également afficher une boîte de dialogue de confirmation si nécessaire
  //     // Pour éviter que la boîte de dialogue ne s'affiche, vous pouvez retourner une chaîne vide ici
  //     return '';
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

 // Pour exclure le header de l'interface "/interface-user" : 
  //const currentPath = window.location.pathname;
 // const shouldIncludeHeader = currentPath !== "/interface-user" && currentPath !== "/loginAdmin" && currentPath !== "/loginResponsable" && currentPath !== "/loginProfesseur" && currentPath !== "/loginEtudiant" && currentPath !== "/interface-inscription" ;

  return (
 <AuthProvider>

    <div style={{backgroundColor:""}}>
     <ToastContainer />   
     {/* {shouldIncludeHeader && <HeaderApplication />} */}
        <Router>  
 {/* {shouldIncludeHeader &&  <Route path = "/" component = {HeaderApplication} ></Route>}   */}
 {/* {shouldIncludeHeader &&  <Route path = "/" component  ></Route>}   */}
 <Route path = "/interface-user" exact component = {InterfaceUser} ></Route>
 <Route path = "/loginAdmin" exact component = {LoginInterfaceAdmin} ></Route>
 <Route path = "/loginResponsable" exact component = {LoginInterfaceRespo} ></Route>
 <Route path = "/loginProfesseur" exact component = {LoginInterfaceProf} ></Route>
 <Route path = "/loginEtudiant" exact component = {LoginInterfaceEtud} ></Route>
 <Route path = "/modifier-password-admin" exact component = {InterfaceModifierPasswordAdmin} ></Route>
 <Route path = "/modifier-password-respo" exact component = {InterfaceModifierPasswordRespo} ></Route>
 <Route path = "/modifier-password-prof" exact component = {InterfaceModifierPasswordProf} ></Route>
 <Route path = "/modifier-password-etud" exact component = {InterfaceModifierPasswordEtud} ></Route>
                    <Switch> 

 <Route exact path="/"> <Redirect to="/interface-user" /> </Route>

                        <Route path = "/interface-admin" exact component = {InterfaceAdmin} ></Route>
                        <Route path = "/interface-prof" exact component = {InterfaceProfs} ></Route> 
                        <Route path = "/ajouter-modifier-prof/:CINProf" exact component = {AjouterModifierProfesseur} ></Route> 
                        <Route path = "/consulter-prof" exact component = {ConsulterProfesseur} ></Route> 
                        <Route path = "/interface-affecter-prof" exact component = {InterfaceAffecterProfesseur} ></Route> 
                        <Route path = "/affecter-prof/:cinProfMod/:ProfCodeMod" exact component = {AffecterProfesseur} ></Route> 
                         <Route path = "/gestion-absences" exact component = {InterfaceGestionAbsences} ></Route> 
                         <Route path = "/recherche-etudiant-bulletin" exact component = {InterfaceRechercheEtudiant} ></Route> 
                         <Route path = "/gestion-bulletins/:CinStudent" exact component = {InterfaceGestionBulletins} ></Route> 
                         <Route path = "/gestion-bulletins-test/:CinStudent" exact component = {InterfaceGestionBulletinsTest} ></Route> 
                         <Route path = "/gestion-notes" exact component = {interafceGestionNotesAdmin}></Route>
{/*-------------------------------------------------------------------------------------------------------------*/}
                  <Route path = "/interface-etudiant" exact component = {InterfaceEtudiant} ></Route>
                  <Route path = "/ajouter-etudiant" exact component = {AjouterEtudiant} ></Route>
                  <Route path = "/consulter-etudiant" exact component = {ConsulterEtudiant} ></Route>
                  <Route path = "/modifier-etudiant/:cin" exact component = {ModifierEtudiant} ></Route>

                  <Route path = "/interface-responsable" exact component = {InterfacePrincipaleResponsable} ></Route>
                  <Route path = "/ajouter-responsable" exact component = {AjouterResponsable} ></Route>
                  <Route path = "/consulter-responsable" exact component = {ConsulterResponsable} ></Route>
                  <Route path = "/modifier-responsable/:cin" exact component = {ModifierResponsable} ></Route>
                  <Route path = "/interface-affectation-respo" exact component={InterfaceAffectationResponsable} ></Route>
                  <Route path = "/modifier-affectation-respo/:codeFil" exact component={ModifierAffectationResponsable} ></Route>

                  <Route path = "/interface-principale-niveaux" exact component = {InterfacePrincipaleNiveau} ></Route>
                  <Route path = "/interface-niveau" exact component = {InterfaceNiveaux} ></Route>
                  <Route path = "/modifier-niveau/:codNiv" exact component = {ModifierNiveau} ></Route>

                  <Route path = "/interface-filiere" exact component = {InterfaceFiliere} ></Route>
                  <Route path = "/modifier-filiere/:codeFil" exact component = {ModifierFilier} ></Route>

                  <Route path = "/interface-niveau-scolaire" exact component = {InterfaceNiveauScolaire} ></Route>
                  <Route path = "/modifier-niveau-scolaire/:codeNivSco" exact component = {ModifierNiveauScolaire} ></Route>

                  <Route path = "/interface-module" exact component = {InterfaceModule} ></Route>
                  <Route path = "/modifier-module/:codeMod" exact component = {ModifierModule} ></Route>
                  
                  <Route path = "/interface-principale-section" exact component = {InterfacePrincipaleSection} ></Route>
                  <Route path = "/interface-section" exact component = {InterfaceSection} ></Route>
                  <Route path = "/modifier-section/:codeSec" exact component = {ModifierSection} ></Route>

                  <Route path = "/interface-section-filiere" exact component = {InterfaceSectionFilier} ></Route>

                  <Route path = "/interface-date-inscription" exact component = {InterfaceDateInscription} ></Route>
                  <Route path = "/modifier-date-inscription/:id" exact component = {ModifierDateInscription} ></Route>
                  <Route path = "/interface-inscription" exact component = {InterfaceInscreption} ></Route>
                  {/* <Route path = "/imprimer-inscription/:cin" exact component = {ImprimerInscription} ></Route> */}
                  <Route path = "/imprimer-inscription-test/:cin" exact component = {ImprimerInscriptionTest} ></Route>

{/*-------------------------------------------------------------------------------------------------------------*/}
 {/* <Route path="/Login" exact component={Login}></Route> */}                    
    {/* <Route path="/Register" > <Register/> </Route> */}
    {/* <Route path="/User" exact> <User/> </Route>
    <Route path="/Inscreption" exact><Inscreption/> </Route>
    <Route path="/Imprimer/:cin" exact component = {Imprimer} /> 
    <Route path="/form" exact> <Form/> </Route>
{/*----------------- II- Partie Responsable --------------------------------------------------------------------*/}
              <Route path = "/interface-principale-responsable" exact component = {InterfaceResponsable} ></Route>

              <Route path = "/interface-niveau-scolaire-respo" exact component = {InterfaceNiveauScolaireRespo} ></Route>
              <Route path = "/modifier-niveau-scolaire-respo/:codeNivSco" exact component = {ModifierNiveauScolaireRespo} ></Route>

              <Route path = "/interface-module-respo" exact component = {InterfaceModuleRespo} ></Route>
              <Route path = "/modifier-module-respo/:codeMod" exact component = {ModifierModuleRespo} ></Route>

              <Route path = "/gestion-absences-respo" exact component = {InterfaceGestionAbsencesRespo} ></Route> 
{/*-------------------------------------------------------------------------------------------------------------*/}

{/*----------------- III- Partie Professeur --------------------------------------------------------------------*/}
                  <Route path = "/interface-principale-professeur" exact component = {InterfaceProfesseur} ></Route>
                  <Route path = "/gestion-notes-prof" exact component = {GestionNotesProf}></Route>
                  <Route path = "/gestion-absences-prof" exact component = {InterfaceGestionAbsencesProf} ></Route> 
{/*-------------------------------------------------------------------------------------------------------------*/}

{/*----------------- IIII- Partie Etudiant --------------------------------------------------------------------*/}
                  <Route path = "/interface-principale-etudiant" exact component = {InterfacePrincipaleEtudiants} ></Route>
                  <Route path = "/consulter-notes-etud" exact component = {ConsulterNotesEtud} ></Route>
                  <Route path = "/releves-notes-etud" exact component = {InterfaceConsulterBulletinsEtud} ></Route>
                  <Route path = "/consulter-absences-etud" exact component = {InterfaceConsulterAbsencesEtud}  ></Route> 
{/*-------------------------------------------------------------------------------------------------------------*/}

                    </Switch>
                {/* </div> */}
              {/* <FooterComponent /> */}
      
        </Router>
        
    </div>

</AuthProvider>    
  );
}

export default App;
