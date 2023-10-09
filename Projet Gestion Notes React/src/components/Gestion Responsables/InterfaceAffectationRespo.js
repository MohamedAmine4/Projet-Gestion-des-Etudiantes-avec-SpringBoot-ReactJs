import React, { useState, useEffect } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import responsableService from './ResponsableService';
import filierService from '../Gestion Filieres/FilierService';
// import niveauService from '../Gestion Niveaux/NiveauService';
import { toast } from 'react-toastify';
import { Pagination } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
import { useHistory } from 'react-router-dom';

function InterfaceAffectationResponsable() {
  // const [codeFil,setCodeFil]=useState('');
  // const [designation,setDesignation]=useState('');
  const [filier, setFilier] = useState([]);
  // const [niveauOptions, setNiveauOptions] = useState([]);
// const [Responsable,setResponsable]=useState('');

   const history = useHistory();

   //importer les donnes de niveau

  //  useEffect(() => {
  //   niveauService.getNiveau().then((reponse) => {
  //     setNiveauOptions(reponse.data.map(niv => niv.codeNiv));
  //   });
  // }, []);

 // ---------------- Pagination -------------------------------------------------------------------------------------  
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 15; // Le nombre de lignes 
const totalPages = Math.ceil(filier.length / itemsPerPage);
const handlePageChange = (page) => {
  setCurrentPage(page);
};
const displayedFilieres = filier.length !== 0 ? filier.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];
// ----------------------------------------------------------------------------------------------------------------


 //importer les donnes de filier
 useEffect(() => {
  filierService.getFilier().then((reponse) => {
      setFilier(reponse.data);
  });
}, []);

// useEffect(() => {
//   responsableService.getResponsable().then((reponse) => {
//     setResponsable(reponse.data.map(niv => niv.cin));
//   });
// }, []);

//Modifier les donnes 
 function modifierFilier(codeFil){
  if (window.confirm('Voulez-vous vraiment mettre à jour cette Filière ?')) {
    history.replace(`/modifier-affectation-respo/${codeFil}`); }
}

function deleteFilier(codFil){
  if (window.confirm('Voulez-vous vraiment supprimer cette Filière ?')) {
    filierService.deleteFiliere(codFil).then(reponse => {
   setFilier(filier.filter(filiere => filiere.codeFil !== codFil)); });
        toast.success('Filière supprimée avec succès !', {
           position: toast.POSITION.TOP_CENTER }); }
}

  // -----------------------------------------------------------------------------------------------------------
  const [searchTerm, setSearchTerm] = useState('');
  function handleSearch(event) {
    setSearchTerm(event.target.value);
    const results = filier.filter(fili => fili.responsable.cin.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilier(results);
  }
  function reinitialiserPage(){
    window.location.href ="/interface-affectation-respo"; 
}

function Retour(){
  history.replace('/interface-responsable'); 
  // onClick={ () => Retour()}
}

  return (<div>  <HeaderAdmin />
  <br />
    <div className="container"> 

{/* // ----------- La barre de rechereche : --------------------------------------------------------- */}
<div className="form-group">
        <label htmlFor="search" style={{marginLeft: "4%", fontWeight: 'bold', color:"#008080"}}>CIN:</label>
        <input type="text" className="form-control col-sm-6" id="search" placeholder="-------------------------- Entrez CIN---------------------------" value={searchTerm}
          onChange={handleSearch} style={{ display: "inline-block", marginLeft: "1%" }} />
          <button className="btn btn-primary" onClick={handleSearch} style={{ display: "inline-block", marginLeft: "1%" }}> Rechercher </button>
          <button style={{marginLeft:"1%"}} className="btn btn-primary" onClick={reinitialiserPage} > Réinitialiser </button>
      </div>
{/* // --------------------------------------------------------------------------------------------- */}


    <table className='table table-striped table-bordered'>
      <thead >
      <th>Code Niveau</th>
        <th>Niveau</th>
        <th>Code Filière</th>
        <th>Designation</th>
         <th>CIN Responsable</th>
         <th>Nom Responsable</th>
         <th>Prenom Responsable</th>
        <th>Actions</th>
      </thead>
      <tbody> 
    {filier.length === 0 ? (
    <tr>
      <td colSpan="8" className="text-center">
        Aucun Filière disponible
      </td>
    </tr>
  ) : (    
                  /* filier.map( */
                  displayedFilieres.map(
                       filier =>
                       <tr key={filier.codeFil}>
                        <td> {filier.niveau.codeNiv}</td>
                        <td> {filier.niveau.designation}</td>
                          <td> {filier.codeFil}</td>
                           <td> {filier.designation}</td>
                           <td> {filier.responsable.cin}</td>
                           <td> {filier.responsable.nom}</td>
                           <td> {filier.responsable.prenom}</td>
                <td>
                    <EditOutlined style={{color: "green" , cursor: 'pointer', marginLeft:"1px" , fontSize: '22px'  }}
                      onClick={() => modifierFilier(filier.codeFil)}
                    />
                    <DeleteOutlined
                      onClick={() => deleteFilier(filier.codeFil)}
                      style={{ color: "red",  cursor: 'pointer' , marginLeft:"8px" , fontSize: '22px' }}
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
                {/* </div> */}
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
 <br/>
  </div>  </div>
  )
}
export default InterfaceAffectationResponsable;