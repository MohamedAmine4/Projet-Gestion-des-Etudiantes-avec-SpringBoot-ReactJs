import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import niveauService from '../Gestion Niveaux/NiveauService';
import responsableService from './ResponsableService';
import filierService from '../Gestion Filieres/FilierService';
import { toast } from 'react-toastify';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';


function ModifierAffectationResponsable(props) {

  const [codeFil, setCodeFil] = useState('');
  const [designation, setDesignation] = useState('');
  const [codeNiv, setCodeNiv] = useState('');
  const [cin, setCin] = useState('');
  const [niveauOptions, setNiveauOptions] = useState([]);
  const [responsables, setResponsables] = useState([]);
  const [statut, setStatut] = useState('');
  const [niveau, setNiveau] = useState([]);
  const [filiere, setFiliere] = useState([]);

  const history = useHistory();

  // Importer les données de niveau
  useEffect(() => {
    niveauService.getNiveau().then((reponse) => {
      setNiveauOptions(reponse.data.map(niv => niv.codeNiv));
    });
  }, [responsables]);

  useEffect(() => {
    responsableService.getResponsable().then((reponse) => {
      setResponsables(reponse.data);
    });
  }, []);

  // Importer les données
  useEffect(() => {
    filierService.getFilierById(props.match.params.codeFil).then(res => {
      let filier = res.data;

      setCodeFil(filier.codeFil);
      setDesignation(filier.designation);
      setCodeNiv(filier.niveau.codeNiv);
      setStatut(filier.statut);

     setNiveau(filier.niveau);
     setFiliere(filier);
        setCin(filier.responsable.cin);
    });
  }, [props.match.params.codeFil, niveauOptions]);

      // Fonction de validation du formulaire
      const validateForm = () => {
        return (
          cin !== ''
        );
      };

  const modifierFilier = (e) => {
    e.preventDefault();
 if(validateForm()) {
    let filier = { codeFil, designation, statut, responsable:{cin: cin}, niveau : {codeNiv: codeNiv} };
 // Vérifier si le CIN existe déjà
    let cinExists=[];
    responsableService.getResponsableById(cin).then(res => { cinExists=res.data ; 
    if (cinExists.cin === cin) { 
      filierService.updateFilier(filier, props.match.params.codeFil)
        .then(res => {
          window.alert('Filière modifiée avec succès.');
          history.replace('/interface-affectation-respo'); });
    } else {
        toast.error('La CIN '+ cin +" n'existe pas dans la base de données.", {
            position: toast.POSITION.TOP_CENTER });
    } });    
    } else {
        toast.error('Veuillez remplir tous les champs.', {
            position: toast.POSITION.TOP_CENTER });
    }
  }

  const fonctionAnnuler = () => {
      history.replace('/interface-affectation-respo');
  }



  return (
    <div> <HeaderAdmin />
      <div className="container">
        <br /><br />
        <div className="row">
          <div className="card col-md-7 offset-md-2 offset-md-3">
            <br />
            <h3 className='text-center'>Affecter Responsable</h3>
            <div className='card-body'>
              <form>
              <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Niveau :</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      placeholder="Niveau" readOnly
                    >
                      <option disabled>-- Sélectionnez un niveau --</option>
                      <option >{niveau.designation}</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Code Niveau :</label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      id="Selector"
                      placeholder="Niveau"
                      name="niveau"
                      value={codeNiv}
                      onChange={(e) => setCodeNiv(e.target.value)} readOnly
                    >
                      <option disabled>-- Sélectionnez un niveau --</option>
                      <option value={niveau.codeNiv}>{niveau.codeNiv}</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Filière :</label>
                  <div className="col-sm-9">
                    <input placeholder="Designation" className="form-control" value={filiere.designation} readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Code Filière :</label>
                  <div className="col-sm-9">
                    <input placeholder="Code de Filier" className="form-control" value={codeFil} readOnly />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Responsable :</label>
                  <div className="col-sm-9">
                    <input
                      className="form-control"
                      id="SelectorRes"
                      placeholder="CIN Responsable"
                      name="responsable"
                      value={cin}
                      onChange={(e) => setCin(e.target.value)} />
                      {/* <option disabled>-- Sélectionnez un responsable --</option>
                      <option value={cin}>{cin}</option>
                   {responsableOptions.map(option => (
                  <option key={option.cin} value={option.cin}>{option.nom}</option>
                ))}
             </select> */}
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <div className="col-sm-5 offset-sm-8" >
                    <button className="btn btn-success" onClick={modifierFilier}>Enregistrer</button>
                  <button className="btn btn-danger" onClick={ () => fonctionAnnuler()} style={{ marginLeft: "10px" }}>Annuler</button> 
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

   <br/> <br/>
    </div>
  );
}

export default ModifierAffectationResponsable;
