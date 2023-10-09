import React, { useState, useEffect, useCallback  } from 'react';
// import { Form, FormGroup, FormControl } from 'react-bootstrap';
import { Form, FormGroup } from 'react-bootstrap';
// import niveauEtude from '../../services/NiveauEtude';
// import etudiantService from '../../services/EtudiantService';
import noteService from '../../services/NoteService';
import _ from 'lodash';
import { Pagination } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import professeurService from '../../components/Gestion Profs/ProfesseurService';
import HeaderProfesseur from '../../Header and Footer/HeaderProfesseur';
import { useHistory } from 'react-router-dom';

function GestionNotesProf() {

  const history = useHistory();

  // const [etudiants, setEtudiants] = useState([]);
  //const [notes, setNotes] = useState({});
  const [notes, setNotes] = useState([]);  
  const [notesModules, setNotesModules] = useState([]);

  const [notesValues, setNotesValues] = useState({});

  const [selectedSession, setSelectedSession] = useState('Normale');
  const [SectionsOptions, setSectionsOptions] = useState([]);

     // Pour le test : CIN du Professeur :
    //  const cinProfes = 'JK4567' ;
   const cinProfes= localStorage.getItem('cinProfesseur'); // Récupérer le CIN depuis le localStorage ;

  const nbControles=2; 
  const nbTps=1;
  const nbExams=1;

  const coeffControles=0.25; // équivaut à 25% 
  const coeffTps=0.25; // équivaut à 25%
  const coeffExams=0.5; // équivaut à 50%

  const [niveaux, setNiveaux] = useState([]);
  const [filieres, setFilieres] = useState([]);
  const [niveauxScolaires, setNiveauxScolaires] = useState([]);
  const [modules, setModules] = useState([]);

// ---------------- Pagination -------------------------------------------------------------------------------------  
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 15; // Le nombre de lignes 
const totalPages = Math.ceil(notesModules.length / itemsPerPage);
const handlePageChange = (page) => {
  setCurrentPage(page);
};
const displayedNotes = notesModules.length !== 0 ? notesModules.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];
// ----------------------------------------------------------------------------------------------------------------


    //importer les donnes de niveau
    const [detailsModulesProf, setDetailsModulesProf] = useState([]);
    useEffect(() => {
      professeurService.getAllModulesByCINProf(cinProfes).then((reponse) => {
        setDetailsModulesProf(reponse.data);
        const modulesProf = reponse.data;
        const niveauxProf = modulesProf.map((detailsModule) => detailsModule.module.niveauScolaire.filiere.niveau);
        const uniqueNiveauxProf = _.uniqBy(niveauxProf, 'codeNiv'); // Supprimer les doublons
              setNiveaux(uniqueNiveauxProf);
      });
    }, [cinProfes]);

  const handleNiveauChange = (e) => {
    const selectedNiveauCode = e.target.value;
    // Faites une requête pour récupérer les filières associées au niveau sélectionné
      const filieresProf = detailsModulesProf.filter((detailsModule) => detailsModule.module.niveauScolaire.filiere.niveau.codeNiv === selectedNiveauCode)
                                              .map((detailsModule) => detailsModule.module.niveauScolaire.filiere );
      const uniqueFilieresProf = _.uniqBy(filieresProf, 'codeFil'); // Supprimer les doublons                                         
      setFilieres(uniqueFilieresProf);
      setNiveauxScolaires([]);
      setModules([]);
  };

  const handleFiliereChange = (e) => {
    const selectedFiliereCode = e.target.value;
    // Faites une requête pour récupérer les niveaux scolaires associées au filière sélectionné
    const niveauScolaireProf = detailsModulesProf.filter((detailsModule) => detailsModule.module.niveauScolaire.filiere.codeFil === selectedFiliereCode)
                                                 .map((detailsModule) => detailsModule.module.niveauScolaire );
    const uniqueNiveauScolaireProf = _.uniqBy(niveauScolaireProf, 'codeNivSco'); // Supprimer les doublons                                         
           setNiveauxScolaires(uniqueNiveauScolaireProf);

  };

  const handleNiveauScolaireChange = (e) => {
    const selectedNiveauScolaireCode = e.target.value;
    // Faites une requête pour récupérer les modules associées au niveau scolaire sélectionné
    const modullesProf = detailsModulesProf.filter((detailsModule) => detailsModule.module.niveauScolaire.codeNivSco === selectedNiveauScolaireCode)
                                            .map((detailsModule) => detailsModule.module );
    const uniqueModullesProf = _.uniqBy(modullesProf, 'codeMod'); // Supprimer les doublons                                         
           setModules(uniqueModullesProf);

           const sectionsProf = detailsModulesProf.filter((detailsModule) =>  detailsModule.module.niveauScolaire.codeNivSco === selectedNiveauScolaireCode)
                                                   .map((detailsModule) => detailsModule.section );
          const uniqueSectionsProf = _.uniqBy(sectionsProf, 'section'); // Supprimer les doublons                                         
          setSectionsOptions(uniqueSectionsProf);
  };

  //------------------------------------------------------------------------------------------------------------------
  const [selectedModule, setSelectedModule] = useState("");
  const handleModuleChangeSelectionee = (e) => {
      const selectedModuleCode = e.target.value;
      setSelectedModule(selectedModuleCode);
    };
    
    const [selectedSection, setSelectedSection] = useState("");
    const handleSectionChange = (e) => {
      const selectedSectionValue = e.target.value;
      setSelectedSection(selectedSectionValue);
    };
//------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------  
const getResult = useCallback((average) => {
  if (selectedSession === "Normale") {
      if (average >= 0 && average < 5) {
        return "Non-Valider";
      } else if (average >= 5 && average < 10) {
        return "Rattrapage";
      } else if (average >= 10 && average <= 20) {
        return "Valider"; }
  } else if (selectedSession === "Rattrapage") {
     if (average >= 0 && average < 7) {
      return "Non-Validé";
    } else if (average >= 7 && average <= 20) {
      return "Validé"; }
  }
  return "";
}, [ selectedSession]);

  const [moyennes, setMoyennes] = useState([]);
  // const [resultats, setResultats] = useState({});
  const calculateAverage = useCallback(() => {
    const newMoyennes = {};
    // const newResultats = {};
    for (const note of notes) {
      const noteKey = `${note.etudiant.cin},${note.module.codeMod}`;
    //Les Controles :  
      let sumControles = 0;
      for (let i = 1; i <= nbControles; i++) {
        sumControles += parseFloat(notesValues[noteKey][`ctrl_${i}`]);}
      const moyControles = sumControles / nbControles;
    //Les Tps :
      let sumTps = 0;
      for (let i = 1; i <= nbTps; i++) {
        sumTps += parseFloat(notesValues[noteKey][`tp_${i}`]);}
      const moyTps = sumTps / nbTps;
    // Les Exams :
      let sumExams = 0;
      for (let i = 1; i <= nbExams; i++) {
        sumExams += parseFloat(notesValues[noteKey][`exam_${i}`]);}
      const moyExams = sumExams / nbExams;
    // La moyenne de chaque etudiant :
      const moyEtudiant = coeffControles * moyControles + coeffTps * moyTps + coeffExams * moyExams
      newMoyennes[noteKey] = moyEtudiant;
      // newResultats[noteKey] = getResult(moyEtudiant);

    if (!isNaN(moyEtudiant)) {  
        if (selectedSession === "Normale") {
            noteService.updateNoteNormaleMoyenne(note.etudiant.cin, note.module.codeMod, parseFloat(moyEtudiant), getResult(moyEtudiant));
        } else if (selectedSession === "Rattrapage")  {
             noteService.updateNoteRattrapageMoyenne(note.etudiant.cin, note.module.codeMod, parseFloat(moyEtudiant), getResult(moyEtudiant));
      }  }   
  }
    setMoyennes(newMoyennes);
    // setResultats(newResultats);
  },  [notes, notesValues, selectedSession, getResult]);

 //--------------------------------------------------------------------------------------------------------
  useEffect(() => {
    let notesPromise;
    if (selectedSession === "Normale") {
      notesPromise = noteService.getNotesNormale(); 
     } else if (selectedSession === "Rattrapage") {
      notesPromise = noteService.getNotesRattrapage(); 
    }
      notesPromise.then((reponse) => {
        setNotes([]);
        setNotesModules([]);
        setNotes(reponse.data);
        // setNotesModules(reponse.data.filter((note) => note.module.codeMod === selectedModule ));
        setNotesModules(reponse.data.filter((note) => note.module.codeMod === selectedModule && note.session===selectedSession && note.etudiant.section === selectedSection));

      const newNotesValues = {};
      for (const note of reponse.data) {
        const noteKey = `${note.etudiant.cin},${note.module.codeMod}`;
              newNotesValues[noteKey] = {};
        for (let i = 1; i <= nbControles; i++) {
         newNotesValues[noteKey][`ctrl_${i}`] = note[`ctrl_${i}`];
        }
        for (let i = 1; i <= nbTps; i++) {
          newNotesValues[noteKey][`tp_${i}`] = note[`tp_${i}`];
        }
        for (let i = 1; i <= nbExams; i++) {
          newNotesValues[noteKey][`exam_${i}`] = note[`exam_${i}`];
        }

          const moyEtudiant = moyennes[noteKey];
          const result = getResult(moyEtudiant);

       //-----------------------------------------------------
          if (result === "Rattrapage" && !note.etudiantDansNoteRattrapage ) { // && !note.etudiantDansNoteRattrapage // selectedSession === "Normale" && 
            // Vérifier si l'étudiant n'existe pas déjà dans la table "NoteRattrapage" avant de l'ajouter
            noteService.addEtudiantToNoteRattrapage(note.etudiant.cin, note.module.codeMod)
              .then(() => {
                note.etudiantDansNoteRattrapage = true; // Mettre à jour la propriété
              }); 
          }  
        //-------------------------------------
      }     
      setNotesValues(newNotesValues);
      calculateAverage(); // Appel pour calculer les moyennes
    });
  },  [ selectedSession, selectedModule, selectedSection, moyennes, calculateAverage, getResult]);  // updateNoteRattrapage , moyennes , selectedSession , notes
//---------------------------------------------------------------------------------------------------------------
  const handleNoteChange = (event, cin, codeMod, columnName) => { 

    noteService.removeNonRattrapageStudentsDansNoteRattrapage(); // imortant important !!!!!!!!!!!!!!!!!!!!!!!

    const newNotesValues = { ...notesValues };
    // newNotesValues[cin][columnName] = event.target.value;
    newNotesValues[`${cin},${codeMod}`][columnName] = event.target.value;
    setNotesValues(newNotesValues);
        let noteUpdate = { ...newNotesValues[`${cin},${codeMod}`] };

  let updateNoteValue, getNotesByCinAndCodeMod;  
  if (selectedSession === "Normale") {
    updateNoteValue = noteService.updateNoteNormaleValue(cin, codeMod, noteUpdate); 
    getNotesByCinAndCodeMod = noteService.getNotesNormaleByCinAndCodeMod(cin, codeMod);
    } else if (selectedSession === "Rattrapage") {
      updateNoteValue = noteService.updateNoteRattrapageValue(cin, codeMod, noteUpdate);
      getNotesByCinAndCodeMod = noteService.getNotesRattrapageByCinAndCodeMod(cin, codeMod);
  }
        updateNoteValue.then(() => {
          getNotesByCinAndCodeMod.then((reponse) => {
            setNotes([]);
        setNotes(notes.map((note) => (note.etudiant.cin === cin && note.module.codeMod === codeMod ? reponse.data : note)));   
      });
    });
  }; 
  const ctrlColumns = Array.from({ length: nbControles }, (_, i) => `ctrl_${i + 1}`);
  const tpColumns = Array.from({ length: nbTps }, (_, i) => `tp_${i + 1}`);
  const examColumns = Array.from({ length: nbExams }, (_, i) => `exam_${i + 1}`);
  const columns = [ ...ctrlColumns, ...tpColumns, ...examColumns];    

      // filtrer les etudiants pour afficher uniquement ceux qui ont des notes et des modules 
// const etudiantsNotes = etudiants.filter((etudiant) => notes.find((note) => note.etudiant.cin === etudiant.cin && note.module.codeMod === module.codeMod));


// const [selectedSession, setSelectedSession] = useState('Normale');
  const handleSessionChange = (e) => {
    const selectedSession = e.target.value;
    setSelectedSession(selectedSession);
  };


  function Retour(){
    history.replace('/interface-principale-professeur'); 
    // onClick={ () => Retour()}
}

  return (
    <div>  <HeaderProfesseur />
    <div className="container" style={{ backgroundColor: '' }}>
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
        </div> <br/> <br/> <br/>

        <div className="col-lg-6">
              <Form.Group className="row align-items-center">
                <Form.Label >Choisir la Section :</Form.Label>
            <div className="col-sm-8" style={{ marginLeft: '7%' }} >
            <Form.Control as="select" id="SelectorSection" placeholder="Section" name="section" onChange={handleSectionChange} >
                <option value="" className='text-center'>Sélectionner une section</option>
                     {SectionsOptions.map(option => (
                  <option key={option} value={option}>{option}</option> ))} 
            </Form.Control>
            </div>
              </Form.Group>
            </div>

          <div className="col-lg-6">
            <Form.Group className="row align-items-center">
              <Form.Label style={{ marginLeft: '7%' }} >Choisir la Session :</Form.Label>
      <div className="col-sm-8"  >
          <Form.Control as="select" value={selectedSession} onChange={handleSessionChange}>
            <option value="Normale">Normale</option>
            <option value="Rattrapage">Rattrapage</option>
          </Form.Control>
      </div>
            </Form.Group>
          </div>

</div>
</div>
<br/>

<br/>

{selectedModule && selectedSection && notesModules.length !== 0 &&(
  <div>
{/* // ----------- La barre de rechereche : --------------------------------------------------------- */}

{/* // --------------------------------------------------------------------------------------------- */}
<div className='row '>
          <table className='table table-striped table-bordered'>
             <thead>
                 <tr>
                    <th className='text-center' colSpan='3'>Etudiant</th>
                    {nbControles > 0 &&  <th className='text-center' colSpan={nbControles}>Controles</th> }
                    {nbTps > 0 && <th className='text-center' colSpan={nbTps}>TPs</th> }
                    {nbExams > 0 && <th className='text-center' colSpan={nbExams}>Examens</th> }
                    <th className='text-center' colSpan='2'>Résultat</th>
                </tr>
                        <tr>
                            <th className='text-center'>CIN</th>
                            <th className='text-center'>Nom</th>
                            <th className='text-center'>Prenom</th>
                               {columns.map((column, index) => (
                                  <th className="text-center" key={index}>
                                    {column}
                                  </th> ))}
                  <th className="text-center">Moyenne</th>
                  <th className="text-center">Résultat</th>   
                 </tr>          
             </thead>
             <tbody>
     {/*{notes  */}
     {displayedNotes
          .filter((note) => note.module.codeMod === selectedModule && note.session===selectedSession && note.etudiant.section === selectedSection ) // Filtrer les notes par module et session sélectionnée
          .map((note) => (
              <tr key={note.etudiant.cin}>
                <td>{note.etudiant.cin}</td>
                <td>{note.etudiant.nom}</td>
                <td>{note.etudiant.prenom}</td>
                {ctrlColumns.map((column, index) => (
                  <td key={index}>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="20"
                      style={{ backgroundColor: "transparent", border: "none", outline: "none", width: "100%" }}
                      value={notesValues[`${note.etudiant.cin},${note.module.codeMod}`]?.[column] !== undefined ? notesValues[`${note.etudiant.cin},${note.module.codeMod}`][column] : ""}
                      onChange={(event) => handleNoteChange(event, note.etudiant.cin, note.module.codeMod, column)}
                    />
                  </td>
                ))}
                {tpColumns.map((column, index) => (
                  <td key={index}>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="20"
                      style={{ backgroundColor: "transparent", border: "none", outline: "none", width: "100%" }}
                      value={notesValues[`${note.etudiant.cin},${note.module.codeMod}`]?.[column] !== undefined ? notesValues[`${note.etudiant.cin},${note.module.codeMod}`][column] : ""}
                      onChange={(event) => handleNoteChange(event, note.etudiant.cin, note.module.codeMod, column)}
                    />
                  </td>
                ))}
                {examColumns.map((column, index) => (
                  <td key={index}>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="20"
                      style={{ backgroundColor: "transparent", border: "none", outline: "none", width: "100%" }}
                      value={notesValues[`${note.etudiant.cin},${note.module.codeMod}`]?.[column] !== undefined ? notesValues[`${note.etudiant.cin},${note.module.codeMod}`][column] : ""}
                      onChange={(event) => handleNoteChange(event, note.etudiant.cin, note.module.codeMod, column)}
                    />
                  </td>
                ))}

      <td>{moyennes[`${note.etudiant.cin},${note.module.codeMod}`]}</td> {/*toFixed(...) : Pour afficher .... chiffres après la virgule*/}
      <td>{getResult(moyennes[`${note.etudiant.cin},${note.module.codeMod}`])}</td>  {/**/}
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

export default GestionNotesProf; 