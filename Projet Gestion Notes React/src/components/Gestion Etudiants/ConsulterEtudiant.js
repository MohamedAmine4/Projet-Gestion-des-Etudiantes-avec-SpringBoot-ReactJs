import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import etudiantService from './EtudiantService';
import { toast } from 'react-toastify';
import { Pagination } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';

class ConsulterEtudiant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etudiants: [],
      searchTerm: '' ,
      currentPage: 1,
      itemsPerPage: 15 // Le nombre de lignes 
    };
    this.ModifierEtudiant = this.ModifierEtudiant.bind(this);
    this.DeleteEtudiant = this.DeleteEtudiant.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.reinitialiserPage = this.reinitialiserPage.bind(this);

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    this.setState({ currentPage: page });
  }

  //  DeleteEtudiant(Cin){
  //   const updatedEtudiants = this.state.etudiants.map(etudiant => {
  //     if (etudiant.cin === Cin) {
  //       return { ...etudiant, statut: "Terminer" }; // Modification du statut de l'étudiant
  //     }
  //     return etudiant;
  //   });
  
  //   this.setState({ etudiants: updatedEtudiants });
  // }

  DeleteEtudiant(Cin) {
    if (window.confirm('Voulez-vous vraiment supprimer cet Etudiant ?')) {
      etudiantService.deleteEtudiant(Cin).then(response => {
        const updatedEtudiants = this.state.etudiants.filter(
          etudiant => etudiant.cin !== Cin  );
        this.setState({ etudiants: updatedEtudiants });
        toast.success('Etudiant supprimé avec succès !', {
          position: toast.POSITION.TOP_CENTER });  });
    }
  }
  

  ModifierEtudiant(Cin) {
    if (window.confirm('Voulez-vous vraiment mettre à jour cet Etudiant ?')) {
    window.location.href=`/modifier-etudiant/${Cin}`; }
  }

  componentDidMount() {
    etudiantService.getEtudiant()
      .then(res => {
        this.setState({ etudiants: res.data });
      })
      .catch(err => console.log(err));
  }

  // -----------------------------------------------------------------------------------------------------------
  // const [searchTerm, setSearchTerm] = useState('');
  handleSearch(event) {
    const searchTerm = event.target.value;
    const results = this.state.etudiants.filter(
      etudiant => etudiant.cin.toLowerCase().includes(searchTerm.toLowerCase()) );
    this.setState({ etudiants: results, searchTerm });
  } 
   reinitialiserPage(){
    window.location.href = "/consulter-etudiant"; 
}
  
  render() {

// ---------------- Pagination -------------------------------------------------------------------------------------  
  const { etudiants, currentPage, itemsPerPage } = this.state;
  const totalPages = Math.ceil(etudiants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedEtudiants = etudiants.slice(startIndex, endIndex);  
// ----------------------------------------------------------------------------------------------------------------

    return (
      <div>  <HeaderAdmin />
      <div className='container'> <br/>

{/* // ----------- La barre de rechereche : --------------------------------------------------------- */}
<div className="form-group">
        <label htmlFor="search" style={{marginLeft: "4%", fontWeight: 'bold', color:"#008080"}}>CIN :</label>
        <input type="text" className="form-control col-sm-6" id="search" placeholder="-------------------------- Entrez CIN  ---------------------------" value={this.state.searchTerm}
          onChange={this.handleSearch} style={{ display: "inline-block", marginLeft: "1%" }} />
          <button className="btn btn-primary" onClick={this.handleSearch} style={{ display: "inline-block", marginLeft: "1%" }}> Rechercher </button>
          <button style={{marginLeft:"1%"}} className="btn btn-primary" onClick={this.reinitialiserPage} > Réinitialiser </button>
      </div>
{/* // --------------------------------------------------------------------------------------------- */}

        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>CIN</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Email</th>
              <th style={{width:"8%"}}>Statut</th>
              <th>Niveau</th>
              <th>Filière</th>
              <th>Section</th>
              <th style={{width:"9%"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
{this.state.etudiants.length === 0 ? (
    <tr>
      <td colSpan="9" className="text-center">
        Aucun Etudiant disponible
      </td>
    </tr>
  ) : ( 
              /* this.state.etudiants.map(etudiant  */
              displayedEtudiants.map(etudiant =>
                <tr key={etudiant.cin}>
                  <td>{etudiant.cin}</td>
                  <td>{etudiant.nom}</td>
                  <td>{etudiant.prenom}</td>
                  <td>{etudiant.email}</td>
                  <td>{etudiant.statut}</td>
                  <td>{etudiant.filiere.niveau.designation}</td>
                  <td>{etudiant.filiere.designation}</td>
                  <td>{etudiant.section}</td>
                  <td>
                    <EditOutlined style={{color: "green" , cursor: 'pointer', marginLeft:"6px" , fontSize: '22px'  }}
                      onClick={() => this.ModifierEtudiant(etudiant.cin)}
                    />
                    <DeleteOutlined
                      onClick={() => this.DeleteEtudiant(etudiant.cin)}
                      style={{ color: "red",  cursor: 'pointer' , marginLeft:"15px" , fontSize: '22px' }}
                    />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
                 <div className="form-group row">
                    <div className="col-sm-5 offset-sm-10" >
                    <a href="/interface-etudiant">
                        <button style={{width:"30%", fontSize:"110%"}} className="btn btn-info">Retour</button> </a>                          
                      </div>

<Pagination prevLabel="" nextLabel="" style={{marginTop:"-3.3%", marginLeft:"3%"}}>
<Pagination.Prev disabled={currentPage === 1} prevLabel=""
                  onClick={() => this.handlePageChange(currentPage - 1)}> <FaChevronLeft/> </Pagination.Prev>
  
  {Array.from({ length: totalPages }, (_, index) => (
    <Pagination.Item
      key={index + 1}
      active={index + 1 === currentPage}
      onClick={() => this.handlePageChange(index + 1)}
    >
      {index + 1}
    </Pagination.Item>
  ))}

  <Pagination.Next disabled={currentPage === totalPages} 
                   onClick={() => this.contexthandlePageChange(currentPage + 1)}> <FaChevronRight/> </Pagination.Next>
</Pagination>

                </div>
      </div> 
      </div>
    );
  }
}

export default ConsulterEtudiant;
