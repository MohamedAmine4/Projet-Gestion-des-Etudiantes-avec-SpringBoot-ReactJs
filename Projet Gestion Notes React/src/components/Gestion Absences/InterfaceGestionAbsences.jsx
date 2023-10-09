import React, { useState, useEffect } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import niveauEtude from '../../services/NiveauEtude';
import noteService from '../../services/NoteService';
import { Pagination } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
import { useHistory } from 'react-router-dom';

function InterfaceGestionAbsences() {

  const [absences, setAbsences] = useState([]);
  const [absencesModules, setAbsencesModules] = useState([]);

  const [absencesValues, setAbsencesValues] = useState({});

  const [niveaux, setNiveaux] = useState([]);
  const [filieres, setFilieres] = useState([]);
  const [niveauxScolaires, setNiveauxScolaires] = useState([]);
  const [modules, setModules] = useState([]);

  // ---------------- Pagination -------------------------------------------------------------------------------------  
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 15; // Le nombre de lignes 
const totalPages = Math.ceil(absencesModules.length / itemsPerPage);
const handlePageChange = (page) => {
  setCurrentPage(page);
};
const displayedAbsences = absencesModules.length !== 0 ? absencesModules.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];
// ----------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    niveauEtude.getNiveaux().then((reponse) => {
      setNiveaux(reponse.data);
    });
  }, []);

  const handleNiveauChange = (e) => {
    const selectedNiveauCode = e.target.value;
    // Faites une requête pour récupérer les filières associées au niveau sélectionné
    niveauEtude.getFilieresByCodeNiveau(selectedNiveauCode).then((reponse) => {
      setFilieres(reponse.data);
      setNiveauxScolaires([]);
      setModules([]);
    });
  };

  const handleFiliereChange = (e) => {
    const selectedFiliereCode = e.target.value;
    // Faites une requête pour récupérer les niveaux scolaires associées au filière sélectionné
    niveauEtude.getNiveauxScolairesByCodeFiliere(selectedFiliereCode).then((reponse) => {
      setNiveauxScolaires(reponse.data);
    });
  };

  const handleNiveauScolaireChange = (e) => {
    const selectedNiveauScolaireCode = e.target.value;
    // Faites une requête pour récupérer les modules associées au niveau scolaire sélectionné
    niveauEtude.getModulesByCodeNivSco(selectedNiveauScolaireCode).then((reponse) => {
      setModules(reponse.data);
    });
  };

  const [selectedModule, setSelectedModule] = useState("");
  const handleModuleChangeSelectionee = (e) => {
      const selectedModuleCode = e.target.value;
      setSelectedModule(selectedModuleCode);
    };

 //-------------------------------------------------------------------------------------------------------- 
//  const [initialAbsence, setInitialAbsence] = useState([]);
 useEffect(() => {
    noteService.getAllAbsences().then((reponse) => {
        setAbsences([]);
        setAbsencesModules([]);
        setAbsences(reponse.data); 
        // setInitialAbsence(reponse.data);
        setAbsencesModules(reponse.data.filter((absence) => absence.module.codeMod === selectedModule));

      const newAbsencesValues = {};
      for (const absence of reponse.data) {
        const absenceKey = `${absence.etudiant.cin},${absence.module.codeMod}`;
        newAbsencesValues[absenceKey] = {};
        newAbsencesValues[absenceKey] = {
            nbAbsences: absence.nbAbsences, // Ajoute la valeur de nbAbsences
            nbRetards: absence.nbRetards, // Ajoute la valeur de nbRetards
          };
      
      }
      setAbsencesValues(newAbsencesValues);
    });
  }, [selectedModule]);   //absencesValues
//---------------------------------------------------------------------------------------------------------------
  const handleAbsenceChange = (event, cin, codeMod, columnName) => {
    const newAbsencesValues = { ...absencesValues };
    newAbsencesValues[`${cin},${codeMod}`][columnName] = event.target.value;
    setAbsencesValues(newAbsencesValues);

        let absenceUpdate = { ...newAbsencesValues[`${cin},${codeMod}`] };

       noteService.updateAbsenceValue(cin, codeMod, absenceUpdate).then(() => {
          noteService.getAbsencesByCinAndCodeMod(cin, codeMod).then((reponse) => {
            setAbsences([]);
        setAbsences(absences.map((absence) => (absence.etudiant.cin === cin && absence.module.codeMod === codeMod ? reponse.data : absence)));
      });
    });
  }; 

  // -----------------------------------------------------------------------------------------------------------
    const [searchTerm, setSearchTerm] = useState('');
    function handleSearch(event) {
      setSearchTerm(event.target.value);
      const results = absencesModules.filter(absence => absence.etudiant.cin.toLowerCase().includes(searchTerm.toLowerCase()));
      setAbsencesModules(results);
    }

    const history = useHistory();
    function reinitialiserPage(){
      // setSearchTerm('');
      // setAbsences(initialAbsence);
      window.location.href = "/gestion-absences"; 
      // history.replace('/gestion-absences'); 
  }

  // import { useHistory } from 'react-router-dom';
   // const history = useHistory();
  function Retour(){
    history.replace('/interface-admin'); 
    // onClick={ () => Retour()}
}

  return (
    <div> <HeaderAdmin />
    <div style={{ backgroundColor: '' }} className='container'>
      <br /> <br />
      <div className="container">
        <div className="row container">
          <div className="col-lg-6">
            <FormGroup className="row align-items-center">
              <Form.Label >Choisir Niveau :</Form.Label>
              <div className="col-sm-8" style={{ marginLeft: '12%' }}>
                <Form.Control as="select" onChange={handleNiveauChange}>
                  <option className="text-center" value="">
                    Sélectionner un niveau
                  </option>
                  {niveaux.map((niveau) => (
                    <option value={niveau.codeNiv} key={niveau.codeNiv}>
                      {niveau.designation}
                    </option>
                  ))}
                </Form.Control>
              </div>
            </FormGroup>
          </div>

          <div className="col-lg-6">
            <Form.Group className="row align-items-center" controlId="formFiliere">
              <Form.Label className="" style={{ marginLeft: '12%' }}>Choisir Filiere :</Form.Label>
              <div className="col-sm-8" >  {/*style={{ marginLeft: '12%' }}*/}
                <Form.Control as="select" onChange={handleFiliereChange}>
                  <option className="text-center" value="">
                    Sélectionner une filière
                  </option>
                  {filieres.map((filiere) => (
                    <option value={filiere.codeFil} key={filiere.codeFil}>
                      {filiere.designation}
                    </option>
                  ))}
                </Form.Control>
              </div>
            </Form.Group>
          </div>
          <br /> <br /> <br />

          <div className="col-lg-6">
            <Form.Group className="row align-items-center" controlId="formNiveauScolaire">
              <Form.Label >Choisir Niveau Scolaire :</Form.Label>
              <div className="col-sm-8">
                <Form.Control as="select" onChange={handleNiveauScolaireChange}>
                  <option className="text-center" value="">
                    Sélectionner un niveau scolaire
                  </option>
                  {niveauxScolaires.map((niveauScolaire) => (
                    <option value={niveauScolaire.codeNivSco} key={niveauScolaire.codeNivSco}>
                      {niveauScolaire.designation}
                    </option>
                  ))}
                </Form.Control>
              </div>
            </Form.Group>
          </div>

          <div className="col-lg-6" >
          <Form.Group className="row align-items-center" controlId="formModule" >
            <Form.Label style={{ marginLeft: '10%' }}>Choisir Module : </Form.Label>
            <div className="col-sm-8">
            <Form.Control as="select" onChange={handleModuleChangeSelectionee}>
              <option className='text-center' value="">Sélectionner un module </option>
       {modules.map(module => (     
              <option value={module.codeMod} key={module.codeMod}>
              {module.nomMod}</option>
        ))}
            </Form.Control>
            </div>
          </Form.Group>
        </div>

</div>
</div>
<br/> 

{selectedModule && absencesModules.length !== 0 && (
<div>
  {/* // ----------- La barre de rechereche : --------------------------------------------------------- */}
<div className="form-group">
        <label htmlFor="search" style={{marginLeft: "4%", fontWeight: 'bold', color:"#008080"}}>CIN :</label>
        <input type="text" className="form-control col-sm-6" id="search" placeholder="-------------------------- Entrez CIN ---------------------------" value={searchTerm}
          onChange={handleSearch} style={{ display: "inline-block", marginLeft: "1%" }} />
          <button className="btn btn-primary" onClick={handleSearch} style={{ display: "inline-block", marginLeft: "1%" }}> Rechercher </button>
          <button style={{marginLeft:"1%"}} className="btn btn-primary" onClick={reinitialiserPage} > Réinitialiser </button>
      </div>
{/* // --------------------------------------------------------------------------------------------- */}
  
<div className='row '>
          <table className='table table-striped table-bordered'>
             <thead>
                        <tr>
                            <th className='text-center'>CIN</th>
                            <th className='text-center'>Nom</th>
                            <th className='text-center'>Prenom</th>
                            <th className='text-center'>Niveau</th>
                            <th className='text-center'>Filiere</th>
                            <th className='text-center'>Niveau Scolaire</th>
                            <th className='text-center'>Module</th>
                            <th className='text-center' style={{width:"3%"}}>nbAbsences</th>
                            <th className='text-center'style={{width:"3%"}}>nbRetards</th>
                        </tr>
                
             </thead>
             <tbody>
     {displayedAbsences
          .filter((absence) => absence.module.codeMod === selectedModule) // Filtrer les notes par module sélectionnée
          .map((absence) => (

              <tr key={absence.etudiant.cin}>
                <td>{absence.etudiant.cin}</td>
                <td>{absence.etudiant.nom}</td>
                <td>{absence.etudiant.prenom}</td>
                <td>{absence.module.niveauScolaire.filiere.niveau.designation}</td>
                <td>{absence.module.niveauScolaire.filiere.designation}</td>
                <td>{absence.module.niveauScolaire.designation}</td>
                <td>{absence.module.nomMod}</td>

                  <td>
                    <input
                      type="number"
                      min="0"
                      style={{ backgroundColor: "transparent", border: "none", outline: "none", width: "100%" }}
                      value={absencesValues[`${absence.etudiant.cin},${absence.module.codeMod}`]?.nbAbsences !== undefined ? absencesValues[`${absence.etudiant.cin},${absence.module.codeMod}`].nbAbsences  : ""}
                      onChange={(event) => handleAbsenceChange(event, absence.etudiant.cin, absence.module.codeMod, "nbAbsences")}
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      min="0"
                      style={{ backgroundColor: "transparent", border: "none", outline: "none", width: "100%" }}
                      value={absencesValues[`${absence.etudiant.cin},${absence.module.codeMod}`]?.nbRetards !== undefined ? absencesValues[`${absence.etudiant.cin},${absence.module.codeMod}`].nbRetards : ""}
                      onChange={(event) => handleAbsenceChange(event, absence.etudiant.cin, absence.module.codeMod, "nbRetards")}
                    />
                  </td>

              </tr>
            ))}
          </tbody>
          </table>
</div>
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
</Pagination>  </div>

       </div>
)}

    </div> </div>
    )
  }

export default InterfaceGestionAbsences 