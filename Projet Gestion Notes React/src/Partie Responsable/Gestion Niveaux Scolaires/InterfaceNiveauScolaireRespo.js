import React, { useState, useEffect } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import niveauScolaireService from './NiveauScolaireService';
import { toast } from 'react-toastify';
import { Pagination } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import _ from 'lodash';
// import niveauService from '../../components/Gestion Niveaux/NiveauService';
import filierService from '../../components/Gestion Filieres/FilierService';
import HeaderResponsable from '../../Header and Footer/HeaderResponsable';
// import { AuthContext } from '../../components/Gestion Admins/AuthContext';
import { useHistory } from 'react-router-dom';

function InterfaceNiveauScolaireRespo() {

  const history = useHistory();

  const [codeNivSco,setCodeNivSco]=useState('');
  const [codeNiv,setCodeNiv]=useState('');
  // const [codeFil,setCodeFil]=useState('');
  const [designation,setDesignation]=useState('');
  const [niveauScolaire, setNiveauScolaire] = useState([]);
  const [filierOptions, setFilierOptions] = useState([]);
  const [niveauOptions, setNiveauOptions] = useState([]);
  const [enable,setEnable]=useState(true);

  // Pour le test : CIN du Responsable :
  // const cinRespo = 'CN12345' ;
  const cinRespo = localStorage.getItem('cinResponsable'); // Récupérer le CIN depuis le localStorage ;

   //importer les donnes de niveau
   useEffect(() => {
    // niveauService.getNiveau().then((reponse) => {
      // setNiveauOptions(reponse.data);
    filierService.getAllFiliereByCinRespo(cinRespo).then((reponse) => {
      const filieresRespo = reponse.data;
      const niveauxRespo = filieresRespo.map((filiere) => filiere.niveau);
      const uniqueNiveauxRespo = _.uniqBy(niveauxRespo, 'codeNiv'); // Supprimer les doublons
            //  setNiveauOptions(niveauxRespo);
            setNiveauOptions(uniqueNiveauxRespo);
    });
  }, [cinRespo]);
  
  
  useEffect(() => {
      filierService.getFilierNiveau(codeNiv).then((reponse) => {
        setFilierOptions(reponse.data);
      });
    
  }, [codeNiv]);
  
       
// ---------------- Pagination -------------------------------------------------------------------------------------  
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 15; // Le nombre de lignes 
const totalPages = Math.ceil(niveauScolaire.length / itemsPerPage);
const handlePageChange = (page) => {
  setCurrentPage(page);
};
const displayedNiveauxScolaires = niveauScolaire.length !== 0 ? niveauScolaire.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];
// ----------------------------------------------------------------------------------------------------------------


 //importer les donnes de filier
 useEffect(() => {
  niveauScolaireService.getNiveauScolaire().then((reponse) => {
   // filtrer les données en fonction de la valeur de cinRespo : 
      const niveauxScolairesRespo = reponse.data.filter((niveauScol) => niveauScol.filiere.responsable.cin === cinRespo);   
          setNiveauScolaire(niveauxScolairesRespo);
  });
}, [cinRespo]);

  // Fonction de validation du formulaire
  const validateForm = () => {
    return codeNivSco !== '' && designation !== '' && document.getElementById('Selector').value !== '' && document.getElementById('Selectorfil').value !== '' ;
  };

  // Ajouter les données
  const saveNiveauScolaire = (e) => {
    e.preventDefault();
  if(validateForm()) {
    let niveauScolaire = { codeNivSco, designation, filiere: {codeFil: document.getElementById('Selectorfil').value, niveau:{codeNiv: document.getElementById('Selector').value}}};
    // Vérifier si le code existe
    let codeExists=[];
    niveauScolaireService.getNiveauScolaireById(codeNivSco).then(res => { codeExists=res.data ; 
        if (codeExists.codeNivSco !== codeNivSco) { 
    niveauScolaireService.createNiveauScolaire(niveauScolaire).then(res => {
      window.alert('Niveau Scolaire ajouté avec succès.');
          history.replace('/interface-niveau-scolaire-respo');
    });
  } else {
    toast.error('Ce Niveau Scolaire '+ codeNivSco +" existe déjà dans la base de données.", {
        position: toast.POSITION.TOP_CENTER });
   } });
  } else {
    toast.error('Veuillez remplir tous les champs.', {
        position: toast.POSITION.TOP_CENTER });
}
  } 

//Modifier les donnes 
 function modifierNiveauScolaire(codeNivSco){
  if (window.confirm('Voulez-vous vraiment mettre à jour ce Niveau Scolaire ?')) {
    history.replace(`/modifier-niveau-scolaire-respo/${codeNivSco}`); }
}

function deleteNiveauScolaire(codNivSco){
  if (window.confirm('Voulez-vous vraiment supprimer ce Niveau Scolaire ?')) {
    niveauScolaireService.deleteNiveauScolaire(codNivSco).then(reponse => {
   setNiveauScolaire(niveauScolaire.filter(niveauScol => niveauScol.codeNivSco !== codNivSco)); });
        toast.success('Niveau Scolaire supprimé avec succès !', {
           position: toast.POSITION.TOP_CENTER }); }
}

function changeCodeNivScoHandler(event) {
  setCodeNivSco(event.target.value);
}
function changeDesignationHandler(event) {
    setDesignation(event.target.value);
}
const handleChange = (e) => {
  const codeNive2 = e.target.value;

  if (codeNive2 !== '') {
    filierService.getFilierNiveau(codeNive2).then((reponse) => {
      setFilierOptions(reponse.data);
    });
    setEnable(false);
  } else {
    setEnable(true);
  }
}; 
 

function HandlerAnnuler() {
    setCodeNiv('')
    setCodeNivSco('')
    setDesignation('')  
}

function Retour(){
  history.replace('/interface-principale-responsable'); 
  // onClick={ () => Retour()}
}


  return (<div> <HeaderResponsable />
    <div className="container"> <br /><br />
      <div className="row">
        <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
          <h3 className='text-center'>Ajouter Niveau Scolaire</h3>
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
  onChange={(e)=>handleChange(e)}
>
   <option value="">Sélectionner un niveau </option>
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
      placeholder="Filière"
      name="filier"
      disabled={enable}
    >
    <option value="">Sélectionner une filière </option>
     {filierOptions.map(option => ( option.responsable.cin === cinRespo &&
  <option key={option.codeFil} value={option.codeFil}>{option.designation}</option>
))}
    </select> </div></div>
              <div className="form-group row">
                <label style={{whiteSpace: "nowrap"}} className="col-sm-3 col-form-label">Code Niv Scolaire :</label>
                <div className="col-sm-9">
                  <input placeholder="Code de Niveau Scolaire" className="form-control" value={codeNivSco} onChange={changeCodeNivScoHandler}  required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Designation :</label>
                <div className="col-sm-9">
                  <input placeholder="Designation" className="form-control" value={designation} onChange={changeDesignationHandler}  required />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-5 offset-sm-8" >
                  <button className="btn btn-success" onClick={saveNiveauScolaire}>Enregistrer</button>
                  <button className="btn btn-danger"  onClick={HandlerAnnuler} style={{ marginLeft: "5px" }}>Annuler</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div><br /><br />
 <div className='container'>
    <table className='table table-striped table-bordered'>
      <thead >
    
        <th>Niveau</th>
        <th>Filière</th>
        <th style={{width:"20%"}}>code Niveau Scolaire</th>
        <th>Designation</th>
        <th style={{width:"13%"}}>Actions</th>
      </thead>
      <tbody> 

  {niveauScolaire.length === 0 ? (
    <tr>
      <td colSpan="5" className="text-center">
        Aucun Niveau Scolaire disponible
      </td>
    </tr>
  ) : (    
                  /* niveauScolaire.map( */
                 displayedNiveauxScolaires.map(
                       niveauScolaire =>
                       <tr key={ niveauScolaire.codeNivSco}>
                        <td> { niveauScolaire.filiere.niveau.designation}</td>
                          <td> { niveauScolaire.filiere.designation}</td>
                          <td> { niveauScolaire.codeNivSco}</td>
                           <td> { niveauScolaire.designation}</td>                   
              <td>
                    <EditOutlined style={{color: "green" , cursor: 'pointer', marginLeft:"20px" , fontSize: '22px'  }}
                      onClick={() => modifierNiveauScolaire(niveauScolaire.codeNivSco)}
                    />
                    <DeleteOutlined
                      onClick={() => deleteNiveauScolaire(niveauScolaire.codeNivSco)}
                      style={{ color: "red",  cursor: 'pointer' , marginLeft:"30px" , fontSize: '22px' }}
                    />
                  </td>
              </tr>
              ))}
              </tbody>
    </table>  
    <div className="form-group row">
                    <div className="col-sm-4 offset-sm-10" >
                    <div onClick={ () => Retour()}>
                        <button style={{width:"30%", fontSize:"110%"}} className="btn btn-info">Retour</button> </div>                          
                      </div>
                
 <Pagination prevLabel="" nextLabel="" style={{marginTop:"-3.3%", marginLeft:"3%"}}>
<Pagination.Prev disabled={currentPage === 1} prevLabel=""
                  onClick={() => handlePageChange(currentPage - 1)}> <FaChevronLeft/> </Pagination.Prev>
  
  {Array.from({ length: totalPages }, (_, index) => (
    <Pagination.Item
      key={index + 1}
      active={index + 1 === currentPage}
      onClick={() => handlePageChange(index + 1)}
    >
      {index + 1}
    </Pagination.Item>
  ))}

  <Pagination.Next disabled={currentPage === totalPages} 
                   onClick={() => handlePageChange(currentPage + 1)}> <FaChevronRight/> </Pagination.Next>
</Pagination> 

                </div>
           </div>
 </div> 
  )
}
export default InterfaceNiveauScolaireRespo;