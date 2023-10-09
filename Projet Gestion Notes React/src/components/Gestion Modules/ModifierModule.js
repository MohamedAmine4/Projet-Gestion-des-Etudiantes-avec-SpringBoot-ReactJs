import React, { useState, useEffect } from 'react'
import moduleService from "./ModuleService"
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';

function ModifierModule(props) {

  const history = useHistory();

  const [codeNivSco, setCodeNivSco] = useState('');
  const [codeNiv, setCodeNiv] = useState('');
  const [codeFil, setCodeFil] = useState('');
  const [nomMod, setNomMod] = useState('');
  const [codeMod, setCodeMod] = useState('');
  const [nbTps, setNbTps] = useState('');
  const [nbControles, setNbControles] = useState('');
  const [nbExams, setNbExams] = useState('');
  const [coeffTps, setCoeffTps] = useState('');
  const [coeffControles, setCoeffControles] = useState('');
  const [coeffExams, setCoeffExams] = useState('');

  const [niveau, setNiveau] = useState([]);  
  const [filiere, setFiliere] = useState([]); 
  const [niveauScolaire, setNiveauScolaire] = useState([]); 

  //importer les donnes de niveau
  useEffect(() => {
    moduleService.getModuleById(props.match.params.codeMod).then(res => {
      let module = res.data;
      // setCodeNivSco(module.codeNiSco);
      // setCodeFil(module.codeFil);
      
      setCodeMod(module.codeMod);  setNomMod(module.nomMod);
      setNbTps(module.nbTps); setNbControles(module.nbControles); setNbExams(module.nbExams);
      setCoeffTps(module.coeffTps); setCoeffControles(module.coeffControles); setCoeffExams(module.coeffExams);

      setNiveauScolaire(module.niveauScolaire);
      setFiliere(module.niveauScolaire.filiere);
      setNiveau(module.niveauScolaire.filiere.niveau);  
    });
  }, [props.match.params.codeMod]);

      // Fonction de validation du formulaire
      const validateForm = () => {
        return (
          codeMod !== '' && nomMod !== '' &&
          document.getElementById('Selector').value !== '' &&
          document.getElementById('Selectorfil').value !== '' &&
          document.getElementById('Selectore').value !== '' &&
          // codeNiv !== '' && codeFil !== '' && codeNivSco !== '' &&
          nbTps !== '' && nbControles !== '' && nbExams !== '' &&
          coeffTps !== '' && coeffControles !== '' && coeffExams !== ''
        );
      };

  const ModifierModule = (e) => {
    e.preventDefault();
if(validateForm()) {
    let module = {
      codeMod, nomMod, nbTps, nbControles, nbExams, coeffTps, coeffControles, coeffExams, 
         niveauScolaire: {codeNivSco, 
            filiere: {codeFil ,
               niveau: {codeNiv }  } }
    };
    
      moduleService.updateModule(module, props.match.params.codeMod)
        .then(res => {
          window.alert('Module modifié avec succès.');
            history.replace('/interface-module');
        })
  } else {
    toast.error('Veuillez remplir tous les champs.', {
        position: toast.POSITION.TOP_CENTER });
}
  }


  //Modifier les donnes 

  function changeNomModHandler(event) {
    setNomMod(event.target.value);
  }
  function changeNbTpsHandler(event) {
    setNbTps(event.target.value);
  }
  function changeNbCntrlsHandler(event) {
    setNbControles(event.target.value);
  }
  function changeNbExamsHandler(event) {
    setNbExams(event.target.value);
  }
  function changeCoeffTpsHandler(event) {
    setCoeffTps(event.target.value);
  }
  function changeCoeffCntrlsHandler(event) {
    setCoeffControles(event.target.value);
  }
  function changeCoeffExamsHandler(event) {
    setCoeffExams(event.target.value);
  }

  const fonctionAnnuler = () =>{
    setCodeNiv('')
      history.replace('/interface-module');
  }

  return (<div> <HeaderAdmin />
    <div className="container"> <br /><br />
      <div className="row">
        <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
          <h3 className='text-center'>Modifier Module</h3>
          <div className='card-body'>
            <form>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Niveau :</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    id="Selector"
                    placeholder="Niveau"
                    name="niveau"
                    value={codeNiv}
                    onChange={(e) => setCodeNiv(e.target.value)}
                  >
                    <option disabled>-- Sélectionnez un niveau --</option>
                    <option value={niveau.codeNiv}>{niveau.designation}</option>
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
                    onChange={(e) => setCodeFil(e.target.value)}
                  >
                  <option disabled>-- Sélectionnez une Filière --</option>
                    <option value={filiere.codeFil}>{filiere.designation}</option>
                  </select> </div></div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Niveau Scolaire :</label>
                <div className="col-sm-9">
                <select
  className="form-control"
  id="Selectore"
  placeholder="NiveauScolaire"
  name="NiveauScolaire"
  value={codeNivSco}
  onChange={(e) => setCodeNivSco(e.target.value)}
>
<option disabled>-- Sélectionnez un niveau scolaire --</option>
  <option value={niveauScolaire.codeNivSco}>{niveauScolaire.designation}</option>
</select>
 </div></div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Code Module :</label>
                <div className="col-sm-9">
                  <input placeholder="Code Module" className="form-control" value={codeMod} readOnly  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nom Module :</label>
                <div className="col-sm-9">
                  <input placeholder="Nom Module" className="form-control" value={nomMod} onChange={changeNomModHandler} required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nb Tps :</label>
                <div className="col-sm-9">
                  <input placeholder="Nombre Tps" className="form-control" value={nbTps} onChange={changeNbTpsHandler} required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nb Cntrls :</label>
                <div className="col-sm-9">
                  <input placeholder="Nombre Control" className="form-control" value={nbControles} onChange={changeNbCntrlsHandler} required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nb Exams :</label>
                <div className="col-sm-9">
                  <input placeholder="Nombre Exams" className="form-control" value={nbExams} onChange={changeNbExamsHandler} required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Coeff Tps :</label>
                <div className="col-sm-9">
                  <input placeholder="Coeff Tps" className="form-control" value={coeffTps} onChange={changeCoeffTpsHandler} required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Coeff Cntrls :</label>
                <div className="col-sm-9">
                  <input placeholder="Coeff Controles" className="form-control" value={coeffControles} onChange={changeCoeffCntrlsHandler} required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Coeff Exams :</label>
                <div className="col-sm-9">
                  <input placeholder="CoeffExams" className="form-control" value={coeffExams} onChange={changeCoeffExamsHandler} required />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <div className="col-sm-5 offset-sm-8" >
                  <button className="btn btn-success" onClick={ModifierModule}>Enregistrer</button>
                  <button className="btn btn-danger" onClick={ () => fonctionAnnuler()} style={{ marginLeft: "10px" }}>Annuler</button> 
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div><br />
  </div>
  )
}
export default ModifierModule;