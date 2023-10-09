import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { FaEdit, FaTrash } from 'react-icons/fa';
import professeurModuleService from '../../services/ProfesseurModuleService';
// import niveauEtude from '../../services/NiveauEtude';
import { Pagination } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
  import { useHistory } from 'react-router-dom';

function InterfaceAffecterProfesseur() {

  const history = useHistory();
    const [detailsProfsModules, setDetailsProfsModules] = useState([]);

    const [cinRecherche, setCinRecherche] = useState("");
    const rechercherProfesseurParCin = () => {
      setDetailsProfsModules([]);
      if (cinRecherche !== "") {
         professeurModuleService.getDetailsProfsByCIN(cinRecherche).then((reponse) => {
          let detailsProfMod = reponse.data;
          console.log(JSON.stringify(detailsProfMod) +" et "+ cinRecherche)
          if (detailsProfMod) {
            // setDetailsProfsModules([]);
            setDetailsProfsModules(detailsProfMod); // Transforme le professeur en un tableau avec un seul élément
          } 
          else {
            setDetailsProfsModules([]); // Aucun professeur trouvé, donc tableau vide
          }
        });
      } 
    };

    function reinitialiserPage(){
      // history.replace("/interface-affecter-prof"); 
      window.location.href = "/interface-affecter-prof" ;
    }

     useEffect(() => {
        professeurModuleService.getDetailsProfsModules().then((reponse) => {
            setDetailsProfsModules(reponse.data);

           // console.log(JSON.stringify(reponse.data));
        });
      }, []);

     function editProfesseurModule(cinProf, codModule){
      if (window.confirm('Voulez-vous vraiment mettre à jour les données ?')) {
        history.replace(`/affecter-prof/${cinProf}/${codModule}`) ;
       }
     }

  const deleteProfesseurModule = (idProf,codModule) => {
      if (window.confirm('Voulez-vous vraiment supprimer ces données ?')) {
        professeurModuleService.deleteProfModule(idProf,codModule).then(reponse => {
            setDetailsProfsModules(detailsProfsModules.filter(detailProfModule => ( detailProfModule.module.codeMod !== codModule || detailProfModule.professeur.cin !== idProf))); });
            toast.success('Les données sont supprimées avec succès !', {
               position: toast.POSITION.TOP_CENTER });
       }
     }

     function affecterProf(){
      history.replace("/affecter-prof/_aff/_aff");
      }

// ---------------- Pagination -------------------------------------------------------------------------------------  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Le nombre de lignes 
    const totalPages = Math.ceil(detailsProfsModules.length / itemsPerPage);
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
    // const displayedProfesseurs = professeurs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const displayedDetailsProfsModules = detailsProfsModules.length !== 0 ? detailsProfsModules.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];
// ----------------------------------------------------------------------------------------------------------------

function Retour(){
  history.replace('/interface-prof'); 
  // onClick={ () => Retour()}
}

   return (
 <div> <HeaderAdmin />
 <div className='container'>
      <br/> <br/> 
<div className=" form-group row">
<button style={{marginLeft:"7%"}} className="btn btn-primary" onClick={affecterProf}> Affecter Professeur </button>
<div style={{marginLeft:"3%"}}>
<label className="col-form-label">CIN :</label>  </div>
<div className="col-sm-4">
    <input type="text" className="form-control" placeholder="Entrez votre CIN" value={cinRecherche} onChange={(e) => setCinRecherche(e.target.value)}/>
  </div> 
  <div className="col-3">
      <button className="btn btn-primary" onClick={rechercherProfesseurParCin}> Rechercher </button>
      <button style={{marginLeft:"7%"}} className="btn btn-primary" onClick={reinitialiserPage}> Réinitialiser </button>
  </div>
</div>


    <div>
    
       <div className='row'> 
       </div>
       <div className='row '>

          <table className='table table-striped table-bordered'>
             <thead>
                 <tr>
                    <th className='text-center'>CIN</th>
                    <th className='text-center'> Nom</th>
                    <th className='text-center'> Prenom</th>
                    <th className='text-center'> Niveau</th>
                    <th className='text-center'> Filiere</th>
                    <th className='text-center'> Niveau Scolaire</th>
                    <th className='text-center'> Module</th>
                    <th style={{width:"9%"}} className='text-center'> Section</th>
                    <th style={{width:"8%"}} className='text-center'> Statut</th>
                    <th style={{width:"12%"}}  className='text-center'> Actions</th>
                 </tr>
             </thead>
             <tbody>
{detailsProfsModules.length === 0 ? (
    <tr>
      <td colSpan="10" className="text-center">
        Aucun professeur affecté
      </td>
    </tr>
  ) : (  
             /* detailsProfsModules.map( */
                  displayedDetailsProfsModules.map(
                         detailProfModule =>
                         <tr key={detailProfModule.professeur.cin}>
                            <td> {detailProfModule.professeur.cin}</td>
                            <td> {detailProfModule.professeur.nom}</td>
                            <td> {detailProfModule.professeur.prenom}</td>
                            <td> {detailProfModule.module.niveauScolaire.filiere.niveau.designation}</td>
                            <td> {detailProfModule.module.niveauScolaire.filiere.designation}</td>
                            <td> {detailProfModule.module.niveauScolaire.designation}</td>
                            <td> {detailProfModule.module.nomMod}</td>
                            <td> {detailProfModule.section}</td>
                            <td> {detailProfModule.statut}</td>

                        <td className='text-center'>
                          <FaEdit style={{ cursor: 'pointer', marginRight: '10px' , fontSize: '30px'  }} onClick={() => editProfesseurModule(detailProfModule.professeur.cin, detailProfModule.module.codeMod)} className='text-info'/>
                          <FaTrash style={{ cursor: 'pointer' , marginLeft:"10px" , fontSize: '30px'  }} onClick={() => deleteProfesseurModule(detailProfModule.professeur.cin, detailProfModule.module.codeMod)} className='text-danger'/>
                        </td>

                        </tr>
                )  )}
             </tbody>
          </table>
       </div>

<Pagination   prevLabel="" nextLabel="" >
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
            <div className="form-group row">
                    <div className="col-sm-5 offset-sm-10" >
                    <div onClick={ () => Retour()}>
                        <button style={{marginTop:"-20%" , width:"30%", fontSize:"110%"}} className="btn btn-info">Retour</button> </div>                          
                      </div>
                </div>  

</div> 
<br/>
</div>
    )
  }

export default InterfaceAffecterProfesseur
