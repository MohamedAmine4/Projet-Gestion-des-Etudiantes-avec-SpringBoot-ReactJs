import React, { useState, useEffect } from 'react';
// import {Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import etudiantService from "./EtudiantService";
import moment from 'moment';
import filierService from '../Gestion Filieres/FilierService';
import niveauService from '../Gestion Niveaux/NiveauService';
import { toast } from 'react-toastify';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';

function ModifierEtudiant(props) {
  const [cin, setCIN] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [nationalite, setNationalite] = useState('');
  const [ville, setVille] = useState('');
  const [sexe, setSexe] = useState('');
  const [statut, setStatut] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [codeFil, setFilier] = useState('');
  const [section, setSection] = useState('');
  const [filierOptions, setFilierOptions] = useState([]);
  const [niveau, setNiveau] = useState([]);
  const [filiere, setFiliere] = useState([]);
  const [niveauOptions, setNiveauOptions] = useState([]);
  const [codeNiv, setCodeNiv] = useState([]);
  const [enable, setEnable] = useState(true);
  const history = useHistory();

  useEffect(() => {
    niveauService.getNiveau().then((reponse) => {
        setNiveauOptions(reponse.data);
    });
}, []);
useEffect(() => {
    filierService.getFilierNiveau(codeNiv).then((reponse) => {
        setFilierOptions(reponse.data);
    });

}, [codeNiv]);
const handleChange = (e) => {
    const codeNive2 = e.target.value;
     setCodeNiv(codeNive2);
    if (codeNive2 !== '' && enable === true) {
        filierService.getFilierNiveau(codeNive2).then((reponse) => {
            setFilierOptions(reponse.data);
        });
        setEnable(false);
    } else {
        setEnable(true);
    }
};

  useEffect(() => {
  etudiantService.getEtudiantById(props.match.params.cin).then(res => {
  let etudiant = res.data;
  setCIN(etudiant.cin);
  setNom(etudiant.nom);
  setPrenom(etudiant.prenom);
   // Convertir la date de naissance en objet de type Date
   const dateNaissanceObj = new Date(etudiant.dateNaissance);
   // Formater la date dans le format ISO
   const dateNaissanceISO = moment(dateNaissanceObj).format('YYYY-MM-DD');
   setDateNaissance(dateNaissanceISO);
  setTelephone(etudiant.telephone);
  setEmail(etudiant.email);
 setNationalite(etudiant.nationalite);
  setVille(etudiant.ville);
  setSexe(etudiant.sexe);
setStatut(etudiant.statut);
  setLogin(etudiant.login);
  setPassword(etudiant.password);
  setCodeNiv(etudiant.filiere.niveau.codeNiv);
  setFilier(etudiant.filiere.designation);
  setNiveau(etudiant.filiere.niveau);
  setFiliere(etudiant.filiere);
  setSection(etudiant.section);
  });
  }, [props.match.params.cin, filierOptions, niveauOptions]);

  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
      setFormIsValid(
          cin !== '' && nom !== '' && prenom !== '' && dateNaissance !== '' &&
          telephone !== '' && email !== '' && nationalite !== '' && ville !== '' &&
          sexe !== '' && statut !== '' && login !== '' && password !== '' &&
          section !== '' && codeFil !== '' && codeNiv !== ''
      );
      }, [cin, nom, prenom, dateNaissance, telephone, email, nationalite, ville, sexe, statut, login, password, section, codeFil, codeNiv]);

  const ModifierEtudiant = (e) => {
    e.preventDefault();

    if ( formIsValid) {
        let etudiant = { cin, nom, prenom, dateNaissance, telephone, email, nationalite, ville, sexe, statut, login, password, filiere : {codeFil :codeFil , niveau : {codeNiv}}, section };
        
      etudiantService.updateEtudiant(etudiant,props.match.params.cin)
        .then(res => {
          window.alert('Etudiant modifié avec succès.');
          history.replace('/consulter-etudiant');
        });        
} else {
    toast.error('Veuillez remplir tous les champs.', {
        position: toast.POSITION.TOP_CENTER });
}
  }
  function changeCodeFil(e){
    setFilier(e.target.value)
;}
 const changeCINHandler= (event) => {
      setCIN(event.target.value);
  }

  function changeNomHandler(event) {
      setNom(event.target.value);
  }

 function changePrenomHandler(event) {
      setPrenom(event.target.value);
  }

  const changeNaissanceHandler= (event) => {
      setDateNaissance(event.target.value);
  }

  function changeTelephoneHandler(event) {
      setTelephone(event.target.value);
  }

 function changeEmailHandler(event) {
      setEmail(event.target.value);
  }

  function changeNationaliteHandler(event) {
      setNationalite(event.target.value);
  }
  function changeVilleHandler(event) {
    setVille(event.target.value);
}
 
  function changeStatutHandler(event) {
      setStatut(event.target.value);
  }
  function changeLoginHandler(event) {
    setLogin(event.target.value);
}
  function changePasswordHandler(event) {
      setPassword(event.target.value);
  }
  function changeSectionHandler(event) {
    setSection(event.target.value);
}

const fonctionAnnuler = () =>{
    history.replace('/consulter-etudiant');
}

  return (
      <div style={{backgroundColor:""}}> <HeaderAdmin />
          <div className="container"> <br /><br />
              <div className="row">
                  <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
                      {/* {getTitle()} */}
                      <h3 className="text-center">Modifier Etudiant</h3>
                      <div className='card-body'>
  
                          <form>
                              <div className="form-group row">
                                  <label className="col-sm-3 col-form-label">CIN :</label>
                                  <div className="col-sm-9">
                                      <input placeholder="Votre CIN"className="form-control"
                                          value={cin} onChange={changeCINHandler} required readOnly />
                                  </div>
                              </div>
                              <div className="form-group row">
                                  <label className="col-sm-3 col-form-label">Nom :</label>
                                  <div className="col-sm-9">
                                      <input placeholder="Votre Nom" className="form-control"
                                          value={nom} onChange={changeNomHandler} required />
                                  </div>
                              </div>
                              <div className="form-group row">
                                  <label className="col-sm-3 col-form-label">Prenom :</label>
                                  <div className="col-sm-9">
                                      <input placeholder="Votre Prenom" className="form-control"
                                          value={prenom} onChange={changePrenomHandler} required />
                                  </div>
                              </div>
                              <div className="form-group row">
                                    <label style={{whiteSpace: "nowrap"}} className="col-sm-3 col-form-label">Date de naissance :</label>
                                    <div className="col-sm-9">
                                        <input type='date' placeholder="La date de naissance"  className="form-control"
                                            value={dateNaissance} onChange={changeNaissanceHandler} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Téléphone :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Votre Téléphone" className="form-control"
                                            value={telephone} onChange={changeTelephoneHandler} required />
                                    </div>
                                </div>
                              <div className="form-group row">
                                  <label className="col-sm-3 col-form-label">Email :</label>
                                  <div className="col-sm-9">
                                      <input placeholder="Votre Email" className="form-control"
                                          value={email} onChange={changeEmailHandler} required />
                                  </div>
                              </div>
                              <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Nationalité :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Votre Nationalité" className="form-control"
                                            value={nationalite} onChange={changeNationaliteHandler} required />
                                    </div></div>
                                    <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Ville :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Votre Ville" className="form-control"
                                            value={ville} onChange={changeVilleHandler} required />
                                    </div>
                                </div>
                              <div className="form-group row">
                                  <label className="col-sm-3 col-form-label">Statut :</label>
                                  <div className="col-sm-9">
                        <select className="form-control" placeholder="Statut"
                            value={statut} onChange={changeStatutHandler}
                           >
                              <option >Statut</option>
                          <option value="En cours">En cours</option>
                          <option value="Quitter">Quitter</option>
                          <option value="Terminer">Terminer</option>{" "}
                        </select> </div></div>
                        <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Login :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Utilisateur" className="form-control"
                                            value={login} onChange={changeLoginHandler} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Password :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Le mot de passe" className="form-control"
                                            value={password} onChange={changePasswordHandler} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Niveau :</label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-control"
                                            id="Selector"
                                            placeholder="Niveau"
                                            name="niveau"
                                            value={codeNiv}
                                            onChange={(e) => handleChange(e)} readOnly
                                        >
                                            <option disabled>Sélectionner un niveau</option>
                                            {/* <option></option> */}
                                            {/* {niveauOptions.map(option => ( */}
                                                <option key={niveau.codeNiv} value={niveau.codeNiv}>{niveau.designation}</option>
                                            {/* ))} */}
                                        </select>
                                    </div></div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Filière :</label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-control"
                                            id="Selectorfil"
                                            placeholder="Filier"
                                            name="filier"
                                            value={codeFil}
                                            onChange={changeCodeFil} readOnly >
                                            <option disabled>Sélectionner une filière</option>
                                            {/* <option>{codeFil}</option> */}
                                            {/* {filierOptions.map(option => ( */}
                                                <option key={filiere.codeFil} value={filiere.codeFil}>{filiere.designation}</option>
                                            {/* ))} */}
                                            </select>
                                    </div></div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Section :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Votre Section" className="form-control"
                                            value={section} onChange={changeSectionHandler} required readOnly/>
                                    </div>
                                </div>
                                <br />
                              <div className="form-group row">
                                  <div className="col-sm-5 offset-sm-8" >
                                      <button className="btn btn-success"  onClick={ModifierEtudiant}>Enregistrer</button>                              
                                      <button className="btn btn-danger" onClick={ () => fonctionAnnuler()} style={{ marginLeft: "10px" }}>Annuler</button>                             
                                   </div>
                              </div>
                              
                          </form>
  
                      </div>
                  </div>
              </div>
          </div>
          <br /> <br /><br />
      </div>
  );
  

}
export default ModifierEtudiant;