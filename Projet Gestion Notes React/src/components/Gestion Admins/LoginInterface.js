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

function LoginInterface() {

  const [cin, setCIN] = useState('');
  const [passval, setpassval] = useState('');
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

    if (window.location.pathname === '/loginEtudiant') {
      const existingEtudiant = etudiant.find((etud) => etud.cin === cin && etud.password === passval);
    if (existingEtudiant) { 
      localStorage.setItem('cinEtudiant', cin); // Stocker le CIN dans le localStorage  // !!!!! important important !!!!!!!
      history.replace('/interface-principale-etudiant'); 
        }
        else {
          swal("Le CIN ou le mot de passe que vous avez saisi est incorrect. Veuillez réessayer.", {
            icon: "error",
          });        }
    } else if (window.location.pathname === '/loginResponsable') {
      const existingRespo = respo.find((etud) => etud.cin === cin && etud.password === passval);
    if (existingRespo) { 
      // setAuthData(cin); // Définir le CIN dans le contexte
 //------------------------------------------------------------------------------------------------------------------     
      localStorage.setItem('cinResponsable', cin); // Stocker le CIN dans le localStorage  // !!!!! important important !!!!!!!
 //------------------------------------------------------------------------------------------------------------------
      history.replace('/interface-principale-responsable');
    }
        else {
          swal("Le CIN ou le mot de passe que vous avez saisi est incorrect. Veuillez réessayer.", {
            icon: "error",
          });        }
    } else if (window.location.pathname === '/loginProfesseur') {
      const existingProf = prof.find((etud) => etud.cin === cin && etud.password === passval);
      if (existingProf) { 
        localStorage.setItem('cinProfesseur', cin); // Stocker le CIN dans le localStorage  // !!!!! important important !!!!!!!
        history.replace('/interface-principale-professeur');
      }
          else {
            swal("Le CIN ou le mot de passe que vous avez saisi est incorrect. Veuillez réessayer.", {
              icon: "error",
            });        }
    } else if (window.location.pathname === '/loginAdmin') {
      const existingAdmin = respo.find((etud) => etud.cin === cin && etud.password === passval);
      // localStorage.setItem('cinAdmin', cin); // Stocker le CIN dans le localStorage  // !!!!! important important !!!!!!!
      if (existingAdmin && cin === "CN47852") { // CN47852 : CIN de l'Admin
        //localStorage.setItem('cin', cin); // Stocker le CIN dans le localStorage  // !!!!! important important !!!!!!!
        history.replace('/interface-admin');
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

function ModifierPasswordUser(){
if (window.confirm("Voulez-vous vraiment modifier le mot de passe ?")) {   
  if(window.location.pathname === '/loginAdmin') {
           history.replace('/modifier-password-admin'); 
  } else if(window.location.pathname === '/loginResponsable') {
           history.replace('/modifier-password-respo') 
  } else if(window.location.pathname === '/loginProfesseur') {
           history.replace('/modifier-password-prof') 
  } else if(window.location.pathname === '/loginEtudiant') {
           history.replace('/modifier-password-etud')
  } }
}

  return (
    <div className="main-login">
      <div className="login-contain container ">
        <div className="left-side">
          {/* <div className="img-class">
            <h3>S'identifier</h3>
          </div> */}
          <h4 >Bienvenue sur notre plateforme en ligne !</h4>  
          <form onSubmit={handleSubmit} style={{marginTop:"15%"}}>
        
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
              placeholder="Entrez votre mot de passe..."
              className="input-login"      // w-100
              type="password"
              value={passval}
              onChange={(e) => setpassval(e.target.value)}
              id="pwd1"  
            />
            <button type="submit" id="sub-butt" className="btn btn" style={{marginRight:"-32%", background:"#008B8B"}}>
              Vérifier
            </button>
            <button onClick={ () => HandlerAnnuler()} type="button" id="sub-butt" className="btn btn-danger" style={{background:"#DC143C"}}>
              Retour
            </button>
          </form> <br/>
          <div className="text-center mt-3">
           <h6 style={{cursor:"pointer"}}>  <div onClick={ () => ModifierPasswordUser()} >Mot de passe oublié ?</div> </h6> 
            </div>
          {/* <div className="footer"> */}
            {/* <br /> */}
            {/* <h6>
              Don't have an Account? <Link className="Link" to="/Register">Register Now</Link>
            </h6> */}
          {/* </div> */}
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

export default LoginInterface;



















/*

import React,{useState} from 'react';
import "./Login.css";
import {Link} from 'react-router-dom'
import welcomeimg from "./logo2.png"
function Login()  {

const [emailval,setemailval]=useState("");
const [passval,setpassval]=useState("");


  const handlesubmit=(event)=>{
event.preventDefault();

  }
  return (

 <div style={{background:"lightgray"}}>
  <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow p-4">
            <h3 className="card-title text-center mb-4">Sign In</h3>
            <form onSubmit={handlesubmit}>
              <div className="form-group">
                <label htmlFor="email1">Email</label>
                <input
                  className="form-control"
                  type="email"
                  value={emailval}
                  onChange={(e) => {
                    setemailval(e.target.value);
                  }}
                  id="email1"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd1">Password</label>
                <input
                  className="form-control"
                  type="password"
                  value={passval}
                  onChange={(e) => {
                    setpassval(e.target.value);
                  }}
                  id="pwd1"
                  placeholder="Enter password"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </div>
        </div>
        
         <div className="col-md-0 col-lg-4">
          <div className="card bg-light">
              <h4 className="card-title text-center mb-0">Welcome Back!</h4>
              <div className="text-center">
                <img src={welcomeimg} id="wel-img-id" alt="" className="img-fluid rounded-circle" />
              </div>
          </div>
        </div> 

      </div>
    </div>
</div>

  );
}

export default Login;


*/