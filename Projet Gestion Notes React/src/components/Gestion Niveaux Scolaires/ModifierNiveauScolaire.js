import React, { useState, useEffect } from 'react'
import niveauScolaireService from './NiveauScolaireService'
import niveauService from '../Gestion Niveaux/NiveauService';
import filierService from '../Gestion Filieres/FilierService';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';

function ModifierNiveauScolaire(props) {
  const [codeFil, setCodeFil] = useState('');
  const [designation, setDesignation] = useState('');
  const [codeNiv, setCodeNiv] = useState('');
  const [codeNivSco, setCodeNivSco] = useState('');
  const [niveauOptions, setNiveauOptions] = useState([]);
  const [filierOptions, setFilierOptions] = useState([]);
  const [niveau, setNiveau] = useState([]);
  const [filiere, setFiliere] = useState([]);
  const history = useHistory();

  //importer les donnes de niveau
  useEffect(() => {
    niveauService.getNiveau().then((reponse) => {
      setNiveauOptions(reponse.data.map(niv => niv.codeNiv));
    });
  }, []);

  useEffect(() => {
    filierService.getFilier().then((reponse) => {
      setFilierOptions(reponse.data.map(niv => niv.codeFil));
    });
  }, []);

  //importer les donnes 
  useEffect(() => {
    niveauScolaireService.getNiveauScolaireById(props.match.params.codeNivSco).then(res => {
      let niveauScolaire = res.data;
      setCodeNivSco(niveauScolaire.codeNivSco);
      setDesignation(niveauScolaire.designation);
      // setCodeNiv(niveauScolaire.codeNiv);
      // setCodeFil(niveauScolaire.codeFil);
      setFiliere(niveauScolaire.filiere);    
      setNiveau(niveauScolaire.filiere.niveau);

    });
  }, [props.match.params.codeNivSco, niveauOptions, filierOptions]);

    // Fonction de validation du formulaire
    const validateForm = () => {
      return codeNivSco !== '' && designation !== '' && document.getElementById('Selector').value !== '' && document.getElementById('Selectorfil').value !== '' ;
    };

  const ModifierNiveauScolaire = (e) => {
    e.preventDefault();
 if(validateForm()) {
  let niveauScolaire = { codeNivSco, designation, filiere: {codeFil: document.getElementById('Selectorfil').value, niveau:{codeNiv: document.getElementById('Selector').value}}};
      niveauScolaireService.updateNiveauScolaire(niveauScolaire, props.match.params.codeNivSco)
        .then(res => {
          window.alert('Niveau Scolaire modifié avec succès.');
          history.replace('/interface-niveau-scolaire');
        })
  } else {
    toast.error('Veuillez remplir tous les champs.', {
        position: toast.POSITION.TOP_CENTER });
}
  }


  function changeDesignationHandler(event) {
    setDesignation(event.target.value);
  }

  const fonctionAnnuler = () =>{
      history.replace('/interface-niveau-scolaire');
  }

  return (<div> <HeaderAdmin />
    <div className="container"> <br /><br />
      <div className="row">
        <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
          <h3 className='text-center'>Modifier Niveau Scolaire</h3>
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
                    placeholder="Filière"
                    name="filier"
                    value={codeFil}
                    onChange={(e) => setCodeFil(e.target.value)}
                  >
                <option disabled>-- Sélectionnez une Filière --</option>
                    <option value={filiere.codeFil}>{filiere.designation}</option>
                    {/* {niveauOptions.map(option => (
    <option key={option} value={option}>{option}</option>
  ))} */}
                  </select>
                </div></div>

              <div className="form-group row">
                <label  style={{whiteSpace: "nowrap"}} className="col-sm-3 col-form-label">Code Niv Scolaire :</label>
                <div className="col-sm-9">
                  <input placeholder="Code du Niv Scolaire" className="form-control" value={codeNivSco} required readOnly/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Designation :</label>
                <div className="col-sm-9">
                  <input placeholder="Designation" className="form-control" value={designation} onChange={changeDesignationHandler} required />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-5 offset-sm-8" >
                  <button className="btn btn-success" onClick={ModifierNiveauScolaire}>Enregistrer</button>
                  <button className="btn btn-danger" onClick={ () => fonctionAnnuler()} style={{ marginLeft: "10px" }}>Annuler</button>           </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div><br /><br />

  </div>
  )
}
export default ModifierNiveauScolaire;