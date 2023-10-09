// window.location.href=`/interface-principale-etudiant/${cin}`;
// N.B : Au lieu de passer le CIN dans l'URL ou d'utiliser un contexte, vous pouvez stocker le CIN dans le stockage local du navigateur (localStorage) lors de l'authentification. Ainsi, le CIN sera accessible depuis n'importe quelle interface tant que vous l'aurez stocké localement.
  // import { AuthContext } from './AuthContext';
  // const { setAuthData } = useContext(AuthContext);


  import React, { useState,useEffect } from 'react';
  import welcomeimg from './logo2.png';
  import './LoginInterface.css';
  import swal from 'sweetalert';
  import { useHistory } from 'react-router-dom';
  import etudiantService from '../Gestion Etudiants/EtudiantService';
  import professeurService from '../Gestion Profs/ProfesseurService';
  import responsableService from '../Gestion Responsables/ResponsableService';
  
  function InterfaceModifierPassword() {
  
    const [cin, setCIN] = useState('');
    const [passval, setpassval] = useState('');
    const [passvalConfirm, setpassvalConfirm] = useState('');
    const [etudiant,setEtudiant]=useState('');
    const [prof,setProf]=useState('');
    const [respo,setRespo]=useState('');
  
    useEffect(() => {
      etudiantService.getEtudiant().then((reponse) => {
          setEtudiant(reponse.data);
      });
    }, []);
    useEffect(() => {
      professeurService.getProfesseurs().then((reponse) => {
          setProf(reponse.data);
      });
    }, []);
    useEffect(() => {
      responsableService.getResponsable().then((reponse) => {
          setRespo(reponse.data);
      });
    }, []);
    const changeCINHandler = (event) => {
      setCIN(event.target.value);
  }
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (window.location.pathname === '/modifier-password-etud') {
        const existingEtudiant = etudiant.find((etud) => etud.cin === cin);
      if (existingEtudiant && passval === passvalConfirm) { 
               const updatedEtudiant = { ...existingEtudiant, password: passval };
                etudiantService.updateEtudiant(updatedEtudiant, cin)
            swal("Le mot de passe a été modifié avec succès.", { icon: "success", });
                // history.replace('/interface-user');
                        setCIN(''); setpassval(''); setpassvalConfirm('');
          }
          else {
            swal("Le CIN ou le mot de passe que vous avez saisi est incorrect. Veuillez réessayer.", {
              icon: "error",
            });        }
      } else if (window.location.pathname === '/modifier-password-respo') {
        const existingRespo = respo.find((etud) => etud.cin === cin);
      if (existingRespo && passval === passvalConfirm) { 
            const updatedRespo = { ...existingRespo, password: passval };
            responsableService.updateResponsable(updatedRespo, cin); 
          swal("Le mot de passe a été modifié avec succès.", { icon: "success", });
                //history.replace('/interface-user');
                setCIN(''); setpassval(''); setpassvalConfirm('');
      }
          else {
            swal("Le CIN ou le mot de passe que vous avez saisi est incorrect. Veuillez réessayer.", {
              icon: "error",
            });        }
      } else if (window.location.pathname === '/modifier-password-prof') {
        const existingProf = prof.find((etud) => etud.cin === cin );
        if (existingProf && passval === passvalConfirm) { 
            const updatedProf = { ...existingProf, password: passval };
            professeurService.updateProfesseur(cin, updatedProf);
             swal("Le mot de passe a été modifié avec succès.", { icon: "success", });
                  //history.replace('/interface-user');
                  setCIN(''); setpassval(''); setpassvalConfirm('');
        }
            else {
              swal("Le CIN ou le mot de passe que vous avez saisi est incorrect. Veuillez réessayer.", {
                icon: "error",
              });        }

      } else if (window.location.pathname === '/modifier-password-admin') {
        const existingAdmin = respo.find((etud) => etud.cin === cin);
        if (existingAdmin && cin === "CN47852" && passval === passvalConfirm) { // CN47852 : CIN de l'Admin : un seul admin existe 
            const updatedAdmin = { ...existingAdmin, password: passval };
            responsableService.updateResponsable(updatedAdmin, cin);
            swal("Le mot de passe a été modifié avec succès.", { icon: "success", });
                  //history.replace('/interface-user');
                  setCIN(''); setpassval(''); setpassvalConfirm('');
        }
            else {
              swal("Le CIN ou le mot de passe que vous avez saisi est incorrect. Veuillez réessayer.", {
                icon: "error",
              });        }
      } 
    };
  
  
    const history = useHistory();
  function HandlerAnnuler() {
      // Naviguer vers la page de connexion
      if (window.confirm("Voulez-vous vraiment annuler ?")) { 
      history.replace('/interface-user'); }
  };
  
    return (
      <div className="main-login">
        <div className="login-contain container ">
          <div className="left-side">
            {/* <div className="img-class">
              <h3>S'identifier</h3>
            </div> */}
            {/* <h4 >Bienvenue sur notre plateforme en ligne !</h4>   */}
            <h4 style={{marginTop:"8%", marginLeft:"10%"}}>Modification de mot de passe</h4>
            <form onSubmit={handleSubmit} style={{marginTop:"10%"}}>
          
              <label className="label-label" htmlFor="text"> <h6> Login :  </h6></label>
              <input
                placeholder="Entrez votre CIN..."
                className="input-login"
                type="text"
                value={cin} 
                onChange={changeCINHandler}
                id="email1"
              />
              <label  className="label-label"  htmlFor="pwd1"> <h6>Password :  </h6></label>
              <input
                placeholder="Veuillez saisir le nouveau mot de passe..."
                className="input-login"      // w-100
                type="password"
                value={passval}
                onChange={(e) => setpassval(e.target.value)}
                id="pwd1"  
              />

             <label  className="label-label"  htmlFor="pwd1"> <h6> Confirm Password :  </h6></label>
              <input
                placeholder="Veuillez confirmer le nouveau mot de passe..."
                className="input-login"      // w-100
                type="password"
                value={passvalConfirm}
                onChange={(e) => setpassvalConfirm(e.target.value)}
                id="pwd1"  
              />

              <button type="submit" id="sub-butt" className="btn btn" style={{marginRight:"-32%", background:"#008B8B"}}>
                Modifier
              </button>
              <button onClick={ () => HandlerAnnuler()} type="button" id="sub-butt" className="btn btn-danger" style={{background:"#DC143C"}}>
                Retour
              </button>
            </form> <br/>

          </div>
          <div className="right-side">
            {/* <div className="welcomeNote">
              <h4 className="wel">Bienvenue</h4>
            </div> */}
            <div className="welcomeimg">
              <img src={welcomeimg} id="wel-img-id" alt="" srcSet="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default InterfaceModifierPassword;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  