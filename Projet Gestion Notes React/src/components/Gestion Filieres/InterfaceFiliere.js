import React, { useState, useEffect } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import filierService from './FilierService';
import niveauService from '../Gestion Niveaux/NiveauService';
import { toast } from 'react-toastify';
import { Pagination } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
import { useHistory } from 'react-router-dom';


function InterfaceFiliere() {

  const [codeFil,setCodeFil]=useState('');
  const [designation,setDesignation]=useState('');
  const [filier, setFilier] = useState([]);
  const [niveauOptions, setNiveauOptions] = useState([]);
const [statut,setStatut]=useState('');
const history = useHistory();

   //importer les donnes de niveau
   useEffect(() => {
    niveauService.getNiveau().then((reponse) => {
      // setNiveauOptions(reponse.data.map(niv => niv.codeNiv));
           setNiveauOptions(reponse.data);
    });
  }, []);

         
// ---------------- Pagination -------------------------------------------------------------------------------------  
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 15; // Le nombre de lignes 
const totalPages = Math.ceil(filier.length / itemsPerPage);
const handlePageChange = (page) => {
  setCurrentPage(page);
};
const displayedFilieres = filier.length !== 0 ? filier.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];
// ----------------------------------------------------------------------------------------------------------------

 
// const [initialFilier, setInitialFilier] = useState([]);
 //importer les donnes de filier
 useEffect(() => {
  filierService.getFilier().then((reponse) => {
      setFilier(reponse.data);
      // setInitialFilier(reponse.data);
  });
}, []);

// const [formIsValid, setFormIsValid] = useState(false);
// useEffect(() => {
//  setFormIsValid(
//    codeFil !== '' &&
//     designation !== '' &&
//      statut !== '' &&
//      document.getElementById('Selector').value !== ''
//  );
//  }, [codeFil, designation, statut]);

  // Fonction de validation du formulaire
  const validateForm = () => {
    return codeFil !== '' && designation !== '' && statut !== '' && document.getElementById('Selector').value !== '' ;
  };

  // Ajouter les données
  const saveFilier = (e) => {
    e.preventDefault();
   if (validateForm()) {
    let filier = { codeFil, designation, niveau: {codeNiv: document.getElementById('Selector').value} ,statut};
    // Vérifier si le code existe
    let codeExists=[];
    filierService.getFilierById(codeFil).then(res => { codeExists=res.data ; 
        if (codeExists.codeFil !== codeFil) {  
    filierService.createFilier(filier).then(res => {
      window.alert('Filière ajoutée avec succès.');
      history.replace('/interface-filiere'); 
    });
  } else {
    toast.error('Cette Filière '+ codeFil +" existe déjà dans la base de données.", {
        position: toast.POSITION.TOP_CENTER });
   } });
  } else {
    toast.error('Veuillez remplir tous les champs.', {
        position: toast.POSITION.TOP_CENTER });
}
  } 

//Modifier les donnes 
 function modifierFilier(codeFil){
  if (window.confirm('Voulez-vous vraiment mettre à jour cette Filière ?')) {
    history.replace(`/modifier-filiere/${codeFil}`); }
}

function deleteFilier(codFil){
  if (window.confirm('Voulez-vous vraiment supprimer cette Filière ?')) {
    filierService.deleteFiliere(codFil).then(reponse => {
   setFilier(filier.filter(filiere => filiere.codeFil !== codFil)); });
        toast.success('Filière supprimée avec succès !', {
           position: toast.POSITION.TOP_CENTER }); }
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
function HandlerAnnuler() {
    setCodeFil('')
    setDesignation('')
    setStatut('')
}

  // -----------------------------------------------------------------------------------------------------------
  const [searchTerm, setSearchTerm] = useState('');
  function handleSearch(event) {
    setSearchTerm(event.target.value);
    const results = filier.filter(fili => fili.designation.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilier(results);
  }
  function reinitialiserPage(){
    // history.replace("/interface-filiere"); 
    window.location.href = "/interface-filiere"; 
    // setSearchTerm('');
    // setFilier(initialFilier);
}

function Retour(){
  history.replace('/interface-principale-niveaux'); 
  // onClick={ () => Retour()}
}

  return (<div>  <HeaderAdmin />
    <div className="container"> <br /><br />
      <div className="row">
        <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
        <h3 className="text-center">Ajouter Filière</h3>
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
      >
          <option value="">
          Sélectionner un niveau
        </option>
        {niveauOptions.map(optionNiveau => (
          <option key={optionNiveau.codeNiv} value={optionNiveau.codeNiv}>{optionNiveau.designation}</option>
        ))}
      </select> </div></div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Code Filière :</label>
                <div className="col-sm-9">
                  <input placeholder="Code de Filière" className="form-control" value={codeFil} onChange={changeCodeFilHandler}  required />
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
                              value={statut} onChange={changeStatutHandler} >
                            <option value="">Sélectionnez un statut</option>
                            <option value="En cours">En cours</option>
                            <option value="En réparation">En réparation</option>
                            <option value="Fermer">Fermer</option>{" "}
                          </select> </div></div>
              
              <br />
              <div className="form-group row">
                <div className="col-sm-5 offset-sm-8" >
                  <button className="btn btn-success" onClick={saveFilier}>Enregistrer</button>
                  <button className="btn btn-danger"  onClick={HandlerAnnuler} style={{ marginLeft: "5px" }}>Annuler</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div><br /><br />
<div className='container'>

{/* // ----------- La barre de rechereche : --------------------------------------------------------- */}
<div className="form-group">
        <label htmlFor="search" style={{marginLeft: "4%", fontWeight: 'bold', color:"#008080"}}>Filière :</label>
        <input type="text" className="form-control col-sm-6" id="search" placeholder="---------------------- Entrez la désignation de la Filière --------------------" value={searchTerm}
          onChange={handleSearch} style={{ display: "inline-block", marginLeft: "1%" }} />
          <button className="btn btn-primary" onClick={handleSearch} style={{ display: "inline-block", marginLeft: "1%" }}> Rechercher </button>
          <button style={{marginLeft:"1%"}} className="btn btn-primary" onClick={reinitialiserPage} > Réinitialiser </button>
      </div>
{/* // --------------------------------------------------------------------------------------------- */}

    <table className='table table-striped table-bordered'>
      <thead >
    
        <th>Niveau</th>
        <th>Code Niveau</th>
        <th>Code Filière</th>
        <th>Designation</th>
         <th>Statut</th>
        <th style={{width:"13%"}}>Actions</th>
      </thead>
      <tbody> 
   {filier.length === 0 ? (
      <tr>
        <td colSpan="6" className="text-center">
          Aucun Filière disponible
        </td>
      </tr>
    ) : (    
              /* filier.map( */
                  displayedFilieres.map(
                       filier =>
                       <tr key={filier.codeFil}>
                       <td> {filier.niveau.designation}</td>
                        <td> {filier.niveau.codeNiv}</td>
                          <td> {filier.codeFil}</td>
                           <td> {filier.designation}</td>
                           <td> {filier.statut}</td>
                  <td>
                    <EditOutlined style={{color: "green" , cursor: 'pointer', marginLeft:"20px" , fontSize: '22px'  }}
                      onClick={() => modifierFilier(filier.codeFil)}
                    />
                    <DeleteOutlined
                      onClick={() => deleteFilier(filier.codeFil)}
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
export default InterfaceFiliere;