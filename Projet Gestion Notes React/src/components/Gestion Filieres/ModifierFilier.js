import React, { useState, useEffect } from 'react'
import filierService from './FilierService'
import niveauService from '../Gestion Niveaux/NiveauService';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';

function ModifierFilier(props) {

  const [codeFil,setCodeFil]=useState('');
  const [designation,setDesignation]=useState('');
 const[codeNiv,setCodeNiv]=useState('');
 const[niveau,setNiveau]=useState([]);
 const [niveauOptions, setNiveauOptions] = useState([]);
const [statut,setStatut]=useState('');
const history = useHistory();

 //importer les donnes de niveau
 useEffect(() => {
  niveauService.getNiveau().then((reponse) => {
    setNiveauOptions(reponse.data.map(niv => niv.codeNiv));
  });
}, [niveauOptions]);



 //importer les donnes 
 useEffect(() => {
  filierService.getFilierById(props.match.params.codeFil).then(res => {
  let filier= res.data;
 
  setCodeFil(filier.codeFil);
  setDesignation(filier.designation);
  // setCodeNiv(filier.niveau.codeNiv);
  setNiveau(filier.niveau);
  setStatut(filier.statut);
  });
  }, [props.match.params.codeFil]);

    // Fonction de validation du formulaire
    const validateForm = () => {
      return codeFil !== '' && designation !== '' && statut !== '' && document.getElementById('Selector').value !== '' ;
    };

  const ModifierFilier = (e) => {
    e.preventDefault();
  if(validateForm()) {     
    let filier={ codeFil, designation,statut , niveau: {codeNiv : document.getElementById('Selector').value} };
      filierService.updateFilier(filier,props.match.params.codeFil)
        .then(res => {
          window.alert('Filière modifiée avec succès.');
            history.replace("/interface-filiere"); 
        })
  } else {
    toast.error('Veuillez remplir tous les champs.', {
        position: toast.POSITION.TOP_CENTER });
}
  }

function changeCodeFilHandler(event) {
  setCodeFil(event.target.value);
}
function changeDesignationHandler(event) {
    setDesignation(event.target.value);
}
function changeStatutHandler(event) {
  setStatut(event.target.value);
}

const fonctionAnnuler = () =>{
    history.replace('/interface-filiere');
}


  return (<div>  <HeaderAdmin />
    <div className="container"> <br /><br />
      <div className="row">
        <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
        <h3 className="text-center">Modifier Filière</h3>
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
  {/* {niveauOptions.map(option => (
    <option key={option} value={option}>{option}</option>
  ))} */}
</select>
</div></div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Code Filière :</label>
                <div className="col-sm-9">
                  <input placeholder="Code de Filière" className="form-control" value={codeFil} onChange={changeCodeFilHandler}  required readOnly/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Designation :</label>
                <div className="col-sm-9">
                  <input placeholder="Designation" className="form-control" value={designation} onChange={changeDesignationHandler}  required />
                </div>
              </div>
              <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Statut :</label>
                                    <div className="col-sm-9">
                          <select className="form-control" placeholder="Statut"
                              value={statut} 
                              onChange={changeStatutHandler}
                             >
                             <option value="">Sélectionnez un statut</option>
                            <option value="En cours">En cours</option>
                            <option value="En réparation">En réparation</option>
                            <option value="Fermer">Fermer</option>{" "}
                          </select> </div></div>
              <br />
              <div className="form-group row">
                <div className="col-sm-5 offset-sm-8" >
                  <button className="btn btn-success" onClick={ModifierFilier}>Enregistrer</button>
                  <button className="btn btn-danger" onClick={ () => fonctionAnnuler()} style={{ marginLeft: "10px" }}>Annuler</button>                 </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div><br /><br />
   
  </div>
  )
}
export default ModifierFilier;