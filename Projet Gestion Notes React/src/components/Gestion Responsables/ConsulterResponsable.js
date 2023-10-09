import React, { Component } from 'react';
import responsableService from "./ResponsableService"
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Pagination } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { toast } from 'react-toastify';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';

class ConsulterResponsable extends Component {
  constructor(props) {
    super(props);
    this.state = {
     responsable: [],
     searchTerm: '' ,
     currentPage: 1,
     itemsPerPage: 15 // Le nombre de lignes 
    };
    this.ModifierResponsable = this.ModifierResponsable.bind(this);
    this.DeleteResponsable = this.DeleteResponsable.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.reinitialiserPage = this.reinitialiserPage.bind(this);

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    this.setState({ currentPage: page });
  }

  DeleteResponsable(Cin) {
    if (window.confirm('Voulez-vous vraiment supprimer ce Responsable ?')) {
      responsableService.deleteRespo(Cin).then(reponse => {
        const updatedResponsables = this.state.responsable.filter((responsabl => responsabl.cin !== Cin)); 
        this.setState({ responsable: updatedResponsables });
          toast.success('Responsable supprimé avec succès !', {
             position: toast.POSITION.TOP_CENTER }); }); }
  }

  ModifierResponsable(Cin) {
    if (window.confirm('Voulez-vous vraiment mettre à jour ce Responsable ?')) {
    window.location.href=`/modifier-responsable/${Cin}`; }
  }

  componentDidMount() {
    responsableService.getResponsable()
      .then(res => {
        this.setState({ responsable: res.data });
      })
      .catch(err => console.log(err));
  }

// -----------------------------------------------------------------------------------------------------------
  // const [searchTerm, setSearchTerm] = useState('');
  handleSearch(event) {
    const searchTerm = event.target.value;
    const results = this.state.responsable.filter(
      responsabl => responsabl.cin.toLowerCase().includes(searchTerm.toLowerCase()) );
    this.setState({ responsable: results, searchTerm });
  } 
   reinitialiserPage(){
    window.location.href = "/consulter-responsable"; 
}

  render() {

    // ---------------- Pagination -------------------------------------------------------------------------------------  
  const { responsable, currentPage, itemsPerPage } = this.state;
  const totalPages = Math.ceil(responsable.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedResponsables = responsable.slice(startIndex, endIndex);  
// ----------------------------------------------------------------------------------------------------------------

    return (
      <div> <HeaderAdmin />
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
              <th style={{width:"15%"}}> Date de naissance</th>
              <th>Téléphone</th>
              <th>Email</th>
              <th>Statut</th>
              <th style={{width:"10%"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
    {this.state.responsable.length === 0 ? (
    <tr>
      <td colSpan="8" className="text-center">
        Aucun Responsable disponible
      </td>
    </tr>
  ) : ( 
              /* this.state.responsable.map(responsable  */
                displayedResponsables.map(responsable =>
                <tr key={responsable.cin}>
                  <td>{responsable.cin}</td>
                  <td>{responsable.nom}</td>
                  <td>{responsable.prenom}</td>
                  <td>{responsable.dateNaissance}</td>
                  <td>{responsable.telephone}</td>
                  <td>{responsable.email}</td>
                  <td>{responsable.statut}</td>
                <td>
                  <EditOutlined style={{color: "green" , cursor: 'pointer', marginLeft:"6px" , fontSize: '22px'  }}
                      onClick={() => this.ModifierResponsable(responsable.cin)}
                    />
                    <DeleteOutlined
                      onClick={() => this.DeleteResponsable(responsable.cin)}
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
                    <a href="/interface-responsable">
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
      </div> </div>
    );
  }
}

export default ConsulterResponsable;
