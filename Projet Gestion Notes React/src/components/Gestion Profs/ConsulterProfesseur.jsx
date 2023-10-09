import React, { useState, useEffect } from 'react'
import professeurService from './ProfesseurService';
import { toast } from 'react-toastify';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Pagination } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
// import niveauEtude from '../../services/NiveauEtude';
     import { useHistory } from 'react-router-dom';

function ConsulterProfesseur() {

  const history = useHistory();
    const [professeurs, setProfesseurs] = useState([]);

    const [cinRecherche, setCinRecherche] = useState("");
    const rechercherProfesseurParCin = () => {
      if (cinRecherche !== "") {
        professeurService.getProfesseurById(cinRecherche).then((reponse) => {
          const professeur = reponse.data;
          if (professeur) {
            setProfesseurs([professeur]); // Transforme le professeur en un tableau avec un seul élément
          } 
          else {
            setProfesseurs([]); // Aucun professeur trouvé, donc tableau vide
          }
        });
      } 
    };

    function reinitialiserPage(){
          // history.replace("/consulter-prof"); 
          window.location.href = "/consulter-prof" ;
    }
      
    
// ---------------- Pagination -------------------------------------------------------------------------------------  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Le nombre de lignes 
    const totalPages = Math.ceil(professeurs.length / itemsPerPage);
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
    // const displayedProfesseurs = professeurs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const displayedProfesseurs = professeurs.length !== 0 ? professeurs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];
// ----------------------------------------------------------------------------------------------------------------

     useEffect(() => {
        professeurService.getProfesseurs().then((reponse) => {
            setProfesseurs(reponse.data);
        });
      }, []);

     function editProfesseur(id){
      if (window.confirm('Voulez-vous vraiment mettre à jour ce Professeur ?')) {
        history.replace(`/ajouter-modifier-prof/${id}`) ;
       }
     }

  const deleteProfesseur = (id) => {
      if (window.confirm('Voulez-vous vraiment supprimer ce Professeur ?')) {
        professeurService.deleteProfesseur(id).then(reponse => {
       setProfesseurs(professeurs.filter(professeur => professeur.cin !== id)); });
            toast.success('Professeur supprimé avec succès !', {
               position: toast.POSITION.TOP_CENTER }); }
   }

  function Retour(){
    history.replace('/interface-prof'); 
    // onClick={ () => Retour()}
}

   return (
 <div> <HeaderAdmin />
<br/>


<div className='container'>
<br/>
{/* // ----------- La barre de rechereche : --------------------------------------------------------- */}
<div className="form-group">
        <label htmlFor="search" style={{marginLeft: "4%", fontWeight: 'bold', color:"#008080"}}>CIN :</label>
        <input type="text" className="form-control col-sm-6" id="search" placeholder="-------------------------- Entrez CIN  ---------------------------" value={cinRecherche}
          onChange={(e) => setCinRecherche(e.target.value)} style={{ display: "inline-block", marginLeft: "1%" }} />
          <button className="btn btn-primary" onClick={rechercherProfesseurParCin}style={{ display: "inline-block", marginLeft: "1%" }}> Rechercher </button>
          <button style={{marginLeft:"1%"}} className="btn btn-primary" onClick={reinitialiserPage} > Réinitialiser </button>
      </div>
{/* // --------------------------------------------------------------------------------------------- */}

       <div className='row'> 
       </div>
       <div className='row '>
          <table className='table table-striped table-bordered'>
             <thead>
                 <tr>
                    <th className='text-center'>CIN</th>
                    <th className='text-center'> Nom</th>
                    <th className='text-center'> Prenom</th>
                    <th className='text-center' style={{width:"15%"}}> Date de naissance</th>
                    <th className='text-center'> Telephone</th>
                    <th className='text-center'> Email</th>
                    <th className='text-center'> Statut</th>
                    <th className='text-center'> Actions</th>
                 </tr>
             </thead>
             <tbody>

 {professeurs.length === 0 ? (
    <tr>
      <td colSpan="8" className="text-center">
        Aucun professeur disponible
      </td>
    </tr>
  ) : (          
                   /* professeurs */
                     displayedProfesseurs
                      .map(
                        professeur =>
                        <tr key={professeur.cin}>
                            <td> {professeur.cin}</td>
                            <td> {professeur.nom}</td>
                            <td> {professeur.prenom}</td>
                            <td> {professeur.dateNaissance}</td>
                            <td> {professeur.telephone}</td>
                            <td> {professeur.email}</td>
                            <td> {professeur.statut}</td>
                            
                            {/* <td className='text-center'>
                              <button style={{marginLeft:"0px"}} onClick={() => editProfesseur(professeur.cin)} className='btn btn-info'> Modifier </button>
                              <button style={{marginLeft:"30px"}} onClick={() => deleteProfesseur(professeur.cin)} className='btn btn-danger'> Supprimer </button>
                            </td> */}

                        <td className='text-center'>
                          <FaEdit style={{ cursor: 'pointer', marginRight: '10px' , fontSize: '30px'  }} onClick={() => editProfesseur(professeur.cin)} className='text-info'/>
                          <FaTrash style={{ cursor: 'pointer' , marginLeft:"25px" , fontSize: '30px'  }} onClick={() => deleteProfesseur(professeur.cin)} className='text-danger'/>
                        </td>

                        </tr>
                 )    )}
             </tbody>

          </table>

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
                    <div  onClick={ () => Retour()}>
                        <button style={{marginTop:"-20%" , width:"30%", fontSize:"110%"}} className="btn btn-info">Retour</button> </div>                          
                      </div>
                </div>   
</div> 
<br/>
</div>
    )
  }

export default ConsulterProfesseur
