import React, { useState, useEffect } from 'react';
import niveauService from './NiveauService'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';

 function ModifierNiveau(props) {
const [codeNiv,setCodeNiv]=useState('');
  const [designation,setDesignation]=useState('');
  const [statut,setStatut]=useState('');
  // const [niveau, setNiveau] = useState([]);
  const history = useHistory();

  //importer les donnes 
  useEffect(() => {
    niveauService.getNiveauById(props.match.params.codNiv).then(res => {
      console.log(props.match.params.codNiv);
    let niveau= res.data;
   
    setCodeNiv(niveau.codeNiv);
    setDesignation(niveau.designation);
    setStatut(niveau.statut);
   
    });
    }, [props.match.params.codNiv]);

 // La verification des champs : 
    const [formIsValid, setFormIsValid] = useState(false);
    useEffect(() => {
     setFormIsValid(
        codeNiv !== '' && designation !== '' && statut !== ''
     );
     }, [codeNiv, designation, statut]);

    const ModifierNiveau = (e) => {
      e.preventDefault();
 if ( formIsValid) {        
      let niveau={ codeNiv, designation ,statut};
        niveauService.updateNiveau(niveau,props.match.params.codNiv)
          .then(res => {
            window.alert('Niveau modifié avec succès.');
              history.replace('/interface-niveau');
          })
    } else {
      toast.error('Veuillez remplir tous les champs.', {
          position: toast.POSITION.TOP_CENTER });
  }
    }

   function changeCodeNivHandler(event) {
    setCodeNiv(event.target.value);
}
  function changeDesignationHandler(event) {
      setDesignation(event.target.value);
  }
  function changeStatutHandler(event) {
    setStatut(event.target.value);
}

const fonctionAnnuler = () =>{
    history.replace('/interface-niveau');
}
 

  return (<div> <HeaderAdmin />
    <div className="container"> <br /><br />
    <div className="row">
        <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
        <h3 className="text-center">Modifier Niveau</h3>
            <div className='card-body'>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Code Niveau :</label>
                        <div className="col-sm-9">
                            <input placeholder="Code de Niveau"className="form-control"  value={codeNiv} onChange={changeCodeNivHandler} required readOnly/>
                        </div>
                    </div>
                     <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Designation :</label>
                        <div className="col-sm-9">
                            <input placeholder="Designation"className="form-control"  value={designation} onChange={changeDesignationHandler} required />
                        </div>
                    </div>
                    <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Statut :</label>
                                    <div className="col-sm-9">
                          <select className="form-control" placeholder="Statut"
                              value={statut} onChange={changeStatutHandler}
                             >
                             <option value="">Sélectionnez un statut</option>
                            <option value="En cours">En cours</option>
                            <option value="En réparation">En réparation</option>
                            <option value="Fermer">Fermer</option>{" "}
                          </select> </div></div>
                    <br/>
                    <div className="form-group row">
                                    <div className="col-sm-5 offset-sm-8" >
                                        <button className="btn btn-success" onClick={ModifierNiveau}>Enregistrer</button>
                                        <button className="btn btn-danger" onClick={ () => fonctionAnnuler()} style={{ marginLeft: "10px" }}>Annuler</button>                                
                                     </div>
                                </div>
                </form>
                </div>
                </div>
                  </div>
                  </div><br/><br/>
     
              <br/>
    </div>
  )
}
export default ModifierNiveau;