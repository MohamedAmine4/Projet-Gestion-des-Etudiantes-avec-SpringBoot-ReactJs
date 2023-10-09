import React, { useState, useEffect } from 'react'
import inscreptionService from './InscreptionService'
import niveauService from '../Gestion Niveaux/NiveauService';
import filierService from '../Gestion Filieres/FilierService';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

function InterfaceInscreption() {
  const [cin,setCin]=useState('');
  const [codeNiv,setCodeNiv]=useState('');
  const [codeFil,setCodeFil]=useState('');
  const [prenom,setPrenom]=useState('');
  const [filierOptions, setFilierOptions] = useState([]);
  const [niveauOptions, setNiveauOptions] = useState([]);
const [dateNaissance,setDateNaissance]=useState('');
const [nom,setNom]=useState('');
const [enable,setEnable]=useState(true);

   //importer les donnes de niveau
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


  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
      setFormIsValid(
          cin !== '' && nom !== '' && prenom !== '' && dateNaissance !== '' &&
            codeFil !== '' && codeNiv !== ''
      );
      }, [cin, nom, prenom, dateNaissance, codeFil, codeNiv]);

  // Ajouter les données
  const saveInscreption = (e) => {
    e.preventDefault();
if ( formIsValid) {  
    let inscreption = { cin,nom, prenom,dateNaissance, filier :{codeFil:codeFil, niveau :{codeNiv :codeNiv}} };
    inscreptionService.createInscreption(inscreption).then(res => {
      window.alert('Inscription ajoutée avec succès.');
        history.replace(`/imprimer-inscription-test/${cin}`);});
  } else {
    toast.error('Veuillez remplir tous les champs.', {
        position: toast.POSITION.TOP_CENTER });
   }
  } 


function changeCinHandler(event) {
  setCin(event.target.value);
}
function changeNomHandler(event) {
    setNom(event.target.value);
}
function changePrenomHandler(event) {
  setPrenom(event.target.value);
}
function changeDateNaissanceHandler(event) {
  setDateNaissance(event.target.value);
}
const handleChange = (e) => {
  const codeNive2 = e.target.value;
  setCodeNiv(codeNive2);
  if (codeNive2 !== '') {
    filierService.getFilierNiveau(codeNive2).then((reponse) => {
      setFilierOptions(reponse.data);
    });
    setEnable(false);
  } else {
    setEnable(true);
  }
}; 
 

function changeCodeFil(e){
  setCodeFil(e.target.value);
}

const history = useHistory();
function HandlerAnnuler() {
    // Naviguer vers la page de connexion
    if (window.confirm("Voulez-vous vraiment annuler l'inscription ?")) { 
    history.replace('/interface-user'); }
};

  return (<div>
    <div className="container"> <br /><br />
      <div className="row">
        <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
          <h3 className='text-center'>Inscription</h3>
          <div className='card-body'>
            <form>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">CIN:</label>
                <div className="col-sm-9">
                  <input placeholder="CIN" className="form-control" value={cin} onChange={changeCinHandler}  required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nom :</label>
                <div className="col-sm-9">
                  <input placeholder="nom" className="form-control" value={nom} onChange={changeNomHandler}  required />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Prénom :</label>
                <div className="col-sm-9">
                  <input placeholder="prénom" className="form-control" value={prenom} onChange={changePrenomHandler}  required />
                </div>
              </div>
             
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Date naissance :</label>
                <div className="col-sm-9">
                  <input type="date" placeholder="dateNaissance" className="form-control" value={dateNaissance} onChange={changeDateNaissanceHandler}  required />
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
  onChange={(e)=>handleChange(e)}
>
<option value="">Sélectionner un niveau</option>
  {niveauOptions.map(option => (
    <option key={option.codeNiv} value={option.codeNiv}>{option.designation}</option>
  ))}
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
      onChange={changeCodeFil}
      disabled={enable}
    >
<option value="">Sélectionner une filière</option>
     {filierOptions.map(option => (
  <option key={option.codeFil} value={option.codeFil}>{option.designation}</option>
))}
    </select> </div></div><br/>
             
              <div className="form-group row">
                <div className="col-sm-5 offset-sm-8" >
                  <button className="btn btn-success" onClick={saveInscreption}>Enregistrer</button>
                  <button className="btn btn-danger" onClick={ () => HandlerAnnuler()} style={{ marginLeft: "5px" }}>Annuler</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div><br /><br />
  
    <br />
  </div>
  )
}
export default InterfaceInscreption;