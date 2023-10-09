import React, { useState, useEffect } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import niveauService from './NiveauService';
import { toast } from 'react-toastify';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
import { useHistory } from 'react-router-dom';

 function InterfaceNiveaux() {
const [codeNiv,setCodeNiv]=useState('');
  const [designation,setDesignation]=useState('');
  const [statut,setStatut]=useState('');
  const [niveau, setNiveau] = useState([]);
  const history = useHistory();

//Modifier les donnes 

 function modifierNiveau(codeNiv){
  if (window.confirm('Voulez-vous vraiment mettre à jour ce Niveau ?')) {
    history.replace(`/modifier-niveau/${codeNiv}`); }
  }

  function deleteNiveau(codeNiveau){
    if (window.confirm('Voulez-vous vraiment supprimer ce Niveau ?')) {
      niveauService.deleteNiveau(codeNiveau).then(reponse => {
     setNiveau(niveau.filter(niiiveau => niiiveau.codeNiv !== codeNiveau)); });
          toast.success('Niveau supprimé avec succès !', {
             position: toast.POSITION.TOP_CENTER }); }
  }



  //importer les donnes 
  useEffect(() => {
     niveauService.getNiveau().then((reponse) => {
         setNiveau(reponse.data);
     });
   }, []);

  // La verification des champs : 
   const [formIsValid, setFormIsValid] = useState(false);
   useEffect(() => {
    setFormIsValid(
       codeNiv !== '' && designation !== '' && statut !== ''
    );
    }, [codeNiv, designation, statut]);

   //Ajouter les donnes 
   const saveNiveau = (e) => {
    e.preventDefault();
    if ( formIsValid) { 
    let niveau = { codeNiv, designation ,statut};
  // Vérifier si le code existe
  let codeExists=[];
    niveauService.getNiveauById(codeNiv).then(res => { codeExists=res.data ; 
      if (codeExists.codeNiv !== codeNiv) { 
    niveauService.createNiveau(niveau).then(res => {
      window.alert('Niveau ajouté avec succès.');  
           history.replace('/interface-niveau');   
    });
  } else {
    toast.error('Ce Niveau '+ codeNiv +" existe déjà dans la base de données.", {
        position: toast.POSITION.TOP_CENTER });
   } });
  } else {
    toast.error('Veuillez remplir tous les champs.', {
        position: toast.POSITION.TOP_CENTER });
}
  };
   function changeCodeNivHandler(event) {
    setCodeNiv(event.target.value);
}
  function changeDesignationHandler(event) {
      setDesignation(event.target.value);
  }
  function changeStatutHandler(event) {
    setStatut(event.target.value);
}
  function HandlerAnnuler() {
      setCodeNiv('')
      setDesignation('')
      setStatut('')   
  }

  function Retour(){
    history.replace('/interface-principale-niveaux'); 
    // onClick={ () => Retour()}
}

  return (<div> <HeaderAdmin />
    <div className="container"> <br /><br />
    <div className="row">
        <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
            <h3 className="text-center">Ajouter Niveau</h3>
            <div className='card-body'>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Code Niveau :</label>
                        <div className="col-sm-9">
                            <input placeholder="Code de Niveau"className="form-control"  value={codeNiv} onChange={changeCodeNivHandler} required />
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
                                        <button className="btn btn-success" onClick={saveNiveau}>Enregistrer</button>
                                        
                                        <button className="btn btn-danger" onClick={HandlerAnnuler}  style={{ marginLeft: "5px" }}>Annuler</button>
                                  
                                     </div>
                                </div>
                </form>
                </div>
                </div>
                  </div>
                  </div><br/><br/>
  <div className='container'>
      <table className='table table-striped table-bordered'>
            <thead >
              <th>Code Niveau</th>
              <th>Designation</th>
              <th>statut</th>
              <th style={{width:"13%"}}>Actions</th>
            </thead>
           
            <tbody> 
   {niveau.length === 0 ? (
      <tr>
        <td colSpan="4" className="text-center">
          Aucun Niveau disponible
        </td>
      </tr>
    ) : (  
                    niveau.map(
                       niveau =>
                       <tr key={niveau.codeNiv}>
                          <td> {niveau.codeNiv}</td>
                           <td> {niveau.designation}</td>
                            <td> {niveau.statut}</td>
              <td>
                    <EditOutlined style={{color: "green" , cursor: 'pointer', marginLeft:"20px" , fontSize: '22px'  }}
                      onClick={() => modifierNiveau(niveau.codeNiv)}
                    />
                    <DeleteOutlined
                      onClick={() => deleteNiveau(niveau.codeNiv)}
                      style={{ color: "red",  cursor: 'pointer' , marginLeft:"30px" , fontSize: '22px' }}
                    />
                  </td>
              </tr>
              ))}
              </tbody>
              </table> 
              <div className="form-group row">
                    <div className="col-sm-5 offset-sm-10" >
                    <div onClick={ () => Retour()}>
                        <button style={{width:"30%", fontSize:"110%"}} className="btn btn-info">Retour</button> </div>                          
                      </div>
                </div>
        </div>
    </div>
  )
}
export default InterfaceNiveaux;