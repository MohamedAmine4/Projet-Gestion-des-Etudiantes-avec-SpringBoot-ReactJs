import React, { useState, useEffect } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import niveauService from '../Gestion Niveaux/NiveauService';
import filierService from '../Gestion Filieres/FilierService';
import niveauScolaireService from '../Gestion Niveaux Scolaires/NiveauScolaireService';
import moduleService from "./ModuleService";
import { toast } from 'react-toastify';
import { Pagination } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
  import { useHistory } from 'react-router-dom';

function InterfaceModule() {
  const [codeNiv, setCodeNiv] = useState('');
  const [nomMod, setNomMod] = useState('');
  const [niveauScolaire, setNiveauScolaire] = useState([]);
  const [filierOptions, setFilierOptions] = useState([]);
  const [niveauOptions, setNiveauOptions] = useState([]);
  const [module, setModule] = useState([]);
  const [enable, setEnable] = useState(true);
  const [enable2, setEnable2] = useState(true);
  const [codeMod, setCodeMod] = useState('');
  const [nbTps, setNbTps] = useState('');
  const [nbControles, setNbControles] = useState('');
  const [nbExams, setNbExams] = useState('');
  const [coeffTps, setCoeffTps] = useState('');
  const [coeffControles, setCoeffControles] = useState('');
  const [coeffExams, setCoeffExams] = useState('');
  
  const history = useHistory();

  //importer les donnes de niveau
  useEffect(() => {
    niveauService.getNiveau().then((reponse) => {
      setNiveauOptions(reponse.data);
    });
  }, []);

  useEffect(() => {
    filierService.getFilierNiveau(codeNiv).then((reponse) => {
      setFilierOptions(reponse.data);
      setCodeNiv(codeNiv);
    });
  }, [codeNiv]);
      
// ---------------- Pagination -------------------------------------------------------------------------------------  
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 28; // Le nombre de lignes 
const totalPages = Math.ceil(module.length / itemsPerPage);
const handlePageChange = (page) => {
  setCurrentPage(page);
};
const displayedModules = module.length !== 0 ? module.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];
// ----------------------------------------------------------------------------------------------------------------


  //importer les donnes de filier
  // useEffect(() => {
  //   niveauScolaireService.getNiveauScolaireByCodeFiliere(codeFil).then((reponse) => {
  //     setNiveauScolaire(reponse.data);
  //     setCodeFil(codeFil);
  //   });
  // }, [codeFil, codeNivSco]);

  // const [initialModule, setInitialModule] = useState([]);
  useEffect(() => {
    moduleService.getModule().then((reponse) => {
      setModule(reponse.data);
      // setInitialModule(reponse.data);
    });
  }, []);

    // Fonction de validation du formulaire
    const validateForm = () => {
      return (
        codeMod !== '' && nomMod !== '' &&
        document.getElementById('Selector').value !== '' &&
        document.getElementById('Selectorfil').value !== '' &&
        document.getElementById('Selectore').value !== '' &&
        // codeNiv !== '' && codeFil !== '' && codeNivSco !== '' &&
        nbTps !== '' && nbControles !== '' && nbExams !== '' &&
        coeffTps !== '' && coeffControles !== '' && coeffExams !== ''
      );
    };
    

  // Ajouter les données
  const saveModule = (e) => {
    e.preventDefault();
  if(validateForm()) {
    let module = {
      codeMod, nomMod, nbTps, nbControles, nbExams, coeffTps, coeffControles, coeffExams, 
         niveauScolaire: {codeNivSco: document.getElementById("Selectore").value, 
            filiere: {codeFil: document.getElementById('Selectorfil').value,
               niveau: {codeNiv: document.getElementById('Selector').value  }  } }
    };

    // Vérifier si le code existe
    let codeExists=[];
     moduleService.getModuleById(codeMod).then(res => { codeExists=res.data ; 
        if (codeExists.codeMod !== codeMod) {
    moduleService.createModule(module).then(res => {
      window.alert('Module ajouté avec succès.');
         history.replace('/interface-module');  });
    } else {
      toast.error('Ce Module '+ codeMod +" existe déjà dans la base de données.", {
          position: toast.POSITION.TOP_CENTER });
     } });
  } else {
    toast.error('Veuillez remplir tous les champs.', {
        position: toast.POSITION.TOP_CENTER });
}
  }

  //Modifier les donnes 
  function modifierModule(codeMod) {
    if (window.confirm('Voulez-vous vraiment mettre à jour ce Module ?')) {
      history.replace(`/modifier-module/${codeMod}`); }
  }
  
  function deleteModule(codMod) {
    if (window.confirm('Voulez-vous vraiment supprimer ce Module ?')) {
      moduleService.deleteModule(codMod).then(reponse => {
     setModule(module.filter(modul => modul.codeMod !== codMod)); });
          toast.success('Module supprimé avec succès !', {
             position: toast.POSITION.TOP_CENTER }); }
  }


  function changeCodeModHandler(event) {
    setCodeMod(event.target.value);
  }
  function changeNomModHandler(event) {
    setNomMod(event.target.value);
  }
  function changeNbTpsHandler(event) {
    setNbTps(event.target.value);
  }
  function changeNbCntrlsHandler(event) {
    setNbControles(event.target.value);
  }
  function changeNbExamsHandler(event) {
    setNbExams(event.target.value);
  }
  function changeCoeffTpsHandler(event) {
    setCoeffTps(event.target.value);
  }
  function changeCoeffCntrlsHandler(event) {
    setCoeffControles(event.target.value);
  }
  function changeCoeffExamsHandler(event) {
    setCoeffExams(event.target.value);
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

  const handleChangeFilier = (e) => {
    const codeFil2 = e.target.value;

    if (codeFil2 !== '') {
      niveauScolaireService.getNiveauScolaireByCodeFiliere(codeFil2).then((reponse) => {
        setNiveauScolaire(reponse.data);
      });
      setEnable2(false);
    } else {
      setEnable2(true);
    }
  };
  
  function HandlerAnnuler() {
    setCodeMod('')
    setNomMod('')
    setNbControles()
    setNbTps()
    setNbExams()
    setNbControles()
    setCoeffTps()
    setCoeffExams()
  }


  // -----------------------------------------------------------------------------------------------------------
  const [searchTerm, setSearchTerm] = useState('');
  function handleSearch(event) {
    setSearchTerm(event.target.value);
    const results = module.filter(mod => mod.nomMod.toLowerCase().includes(searchTerm.toLowerCase()));
    setModule(results);
  }
  function reinitialiserPage(){
    // history.replace("/interface-module");
    window.location.href = "/interface-module";
    // setSearchTerm('');
    // setModule(initialModule); 
}

function Retour(){
  history.replace('/interface-principale-niveaux'); 
  // onClick={ () => Retour()}
}

  return (<div> <HeaderAdmin />
    <div className="container"> <br /><br />
      <div className="row">
        <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
          <h3 className='text-center'>Ajouter Module</h3>
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
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="">Sélectionner un niveau</option>
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
                    placeholder="Filier"
                    name="filier"
                    disabled={enable}
                    onChange={(e) => handleChangeFilier(e)}
                  >
                    <option value="">Sélectionner une filière</option>
                    {filierOptions.map(option => (
                      <option key={option.codeFil} value={option.codeFil}>{option.designation}</option>
                    ))}
                  </select> </div></div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Niveau Scolaire :</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    id="Selectore"
                    placeholder="NiveauScolaire"
                    name="NiveauScolaire"
                    disabled={enable2}>
                    <option value="">Sélectionner un niveau scolaire</option>
                    {niveauScolaire.map(option => (
                      <option key={option.codeNivSco} value={option.codeNivSco}>{option.designation}</option>
                    ))}
                  </select> </div></div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Code Module :</label>
                <div className="col-sm-9">
                  <input placeholder="Code Module" className="form-control" value={codeMod} onChange={changeCodeModHandler} required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nom Module :</label>
                <div className="col-sm-9">
                  <input placeholder="Nom Module" className="form-control" value={nomMod} onChange={changeNomModHandler} required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nb Tps :</label>
                <div className="col-sm-9">
                  <input placeholder="Le nombre des Tps" className="form-control" value={nbTps} onChange={changeNbTpsHandler} required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nb Cntrls :</label>
                <div className="col-sm-9">
                  <input placeholder="Le nombre des Controles" className="form-control" value={nbControles} onChange={changeNbCntrlsHandler} required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nb Exams :</label>
                <div className="col-sm-9">
                  <input placeholder="Le nombre des Exams" className="form-control" value={nbExams} onChange={changeNbExamsHandler} required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Coeff Tps :</label>
                <div className="col-sm-9">
                  <input placeholder="Le coefficient des Tps" className="form-control" value={coeffTps} onChange={changeCoeffTpsHandler} required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Coeff Cntrls :</label>
                <div className="col-sm-9">
                  <input placeholder="Le coefficient des Controles" className="form-control" value={coeffControles} onChange={changeCoeffCntrlsHandler} required />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Coeff Exams :</label>
                <div className="col-sm-9">
                  <input placeholder="Le coefficient des Exams" className="form-control" value={coeffExams} onChange={changeCoeffExamsHandler} required />
                </div>
              </div>
              <br />
              <div className="form-group row">
                <div className="col-sm-5 offset-sm-8" >
                  <button className="btn btn-success" onClick={saveModule}>Enregistrer</button>
                  <button className="btn btn-danger" onClick={HandlerAnnuler} style={{ marginLeft: "5px" }}>Annuler</button>
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
        <label htmlFor="search" style={{marginLeft: "4%", fontWeight: 'bold', color:"#008080"}}>Nom module :</label>
        <input type="text" className="form-control col-sm-6" id="search" placeholder="-------------------------- Entrez le nom du module ---------------------------" value={searchTerm}
          onChange={handleSearch} style={{ display: "inline-block", marginLeft: "1%" }} />
          <button className="btn btn-primary" onClick={handleSearch} style={{ display: "inline-block", marginLeft: "1%" }}> Rechercher </button>
          <button style={{marginLeft:"1%"}} className="btn btn-primary" onClick={reinitialiserPage} > Réinitialiser </button>
      </div>
{/* // --------------------------------------------------------------------------------------------- */}

    <table className='table table-striped table-bordered'>
      <thead >
        <th>Niveau</th>
        <th>Filière</th>
        <th>Niveau Scolaire</th>
        <th>Code Module</th>
        <th>Nom Module</th>
        <th>Nb Cntrls</th>
        <th>Nb Tps</th>    
        <th>Nb Exams</th>
        <th>Coeff Cntrls</th>
        <th>Coeff Tps</th>    
        <th>Coeff Exams</th>
        <th>Actions</th>
      </thead>
      <tbody>

{module.length === 0 ? (
    <tr>
      <td colSpan="12" className="text-center">
        Aucun Module disponible
      </td>
    </tr>
  ) : (            
        /* module.map( */
         displayedModules.map(
          module =>
            <tr key={module.codeMod}>  
             <td> {module.niveauScolaire.filiere.niveau.designation}</td>    
              <td> {module.niveauScolaire.filiere.designation}</td>
              <td> {module.niveauScolaire.designation}</td> 
              <td>{module.codeMod}</td>
              <td> {module.nomMod}</td>
              <td> {module.nbControles}</td><td> {module.nbTps}</td><td> {module.nbExams}</td>
              <td> {module.coeffControles}</td><td> {module.coeffTps}</td><td> {module.coeffExams}</td>
                 <td>
                    <EditOutlined style={{color: "green" , cursor: 'pointer', marginLeft:"1px" , fontSize: '22px'  }}
                      onClick={() => modifierModule(module.codeMod)}
                    />
                    <DeleteOutlined
                      onClick={() => deleteModule(module.codeMod)}
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
                        <button style={{width:"30%", fontSize:"110%", marginLeft:"20%"}} className="btn btn-info">Retour</button> </div>                          
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
  </div> 
</div>
  )
}
export default InterfaceModule;