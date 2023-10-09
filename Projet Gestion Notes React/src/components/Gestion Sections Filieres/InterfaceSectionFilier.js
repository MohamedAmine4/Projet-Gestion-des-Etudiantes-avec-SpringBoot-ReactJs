import React, { useState, useEffect } from 'react'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import niveauService from '../Gestion Niveaux/NiveauService';
import filierService from '../Gestion Filieres/FilierService';
import sectionService from '../Gestion Sections/SectionService';
import sectionFilierService from './SectionFilierService';
import { toast } from 'react-toastify';
import { Pagination } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
  import { useHistory } from 'react-router-dom';

function InterfaceSectionFilier() {
  const [codeSec, setCodeSec] = useState('');
  const [codeNiv, setCodeNiv] = useState('');
  const [codeFil, setCodeFil] = useState('');
  const [section, setSection] = useState([]);
  const [filierOptions, setFilierOptions] = useState([]);
  const [niveauOptions, setNiveauOptions] = useState([]);
  const [sectionFilier, setSectionFilier] = useState([]);
  const [enable, setEnable] = useState(true);

  const history = useHistory();

// ---------------- Pagination -------------------------------------------------------------------------------------  
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 20; // Le nombre de lignes 
const totalPages = Math.ceil(sectionFilier.length / itemsPerPage);
const handlePageChange = (page) => {
  setCurrentPage(page);
};
const displayedSectionsFilieres = sectionFilier.length !== 0 ? sectionFilier.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];
// ----------------------------------------------------------------------------------------------------------------

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



  //importer les donnes de Section
  useEffect(() => {
    sectionService.getSection().then((reponse) => {
      setSection(reponse.data);
    });
  }, []);

  // const [initialFilierSection, setInitialFilierSection] = useState([]);
  useEffect(() => {
    sectionFilierService.getSectionFilier().then((reponse) => {
      setSectionFilier(reponse.data);
      // setInitialFilierSection(reponse.data);
    });
  }, []);

    // Fonction de validation du formulaire
    const validateForm = () => {
      return (
        codeSec !== '' && codeFil !== ''  );
    };

  // Ajouter les données
  const saveSectionFilier = (e) => {
    e.preventDefault();

  if(validateForm()) {
    let secfil = {section : {codeSec : codeSec } , 
    filier: {codeFil: document.getElementById('Selectorfil').value,
    niveau: {codeNiv: document.getElementById('Selector').value  }  } };

    sectionFilierService.createSectionFilier(secfil).then(res => {
      window.alert('Section Filiere ajoutée avec succès.');
         history.replace('/interface-section-filiere');
     });
    } else {
      toast.error('Veuillez remplir tous les champs.', {
          position: toast.POSITION.TOP_CENTER });
    }
    }

  //Modifier les donnes 
  function modifierSectionFilier(codeFil, codeSec) {
    if (window.confirm('Voulez-vous vraiment mettre à jour cette Affectation ?')) {
  //  window.location.href = `/modifier-section-filiere/${codeFil}/${codeSec}`;  // history.replace();
  // Pas de modification 
   }
  }

  function deleteSectionFilier(codFil, codSec) {
    if (window.confirm('Voulez-vous vraiment supprimer cette Filière - Section ?')) {
      sectionFilierService.deleteSectionFilier(codFil, codSec).then(reponse => {
        // Supprimez uniquement la ligne supprimée de la table
        setSectionFilier(prevSectionFilier => prevSectionFilier.filter(sectionFili =>
          sectionFili.filier.codeFil !== codFil || sectionFili.section.codeSec !== codSec ));

        toast.success('Filière - Section supprimée avec succès !', {
          position: toast.POSITION.TOP_CENTER });  });  }
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
  setCodeFil(e.target.value);
  };
 
 const handleChangeSection = (e) => {
 setCodeSec(e.target.value);
 };

 function HandlerAnnuler() {
   setCodeSec('')
   setCodeNiv('')
   setCodeFil('')
}

  // -----------------------------------------------------------------------------------------------------------
  const [filiereRecherche, setFiliereRecherche] = useState("");
  function rechercherFiliereParDesignation () {
      // sectionFilierService.getSectionsFilieresByDesignation(filiereRecherche).then((reponse) => {
      //   const sectionsFilieres = reponse.data;
        const results = sectionFilier.filter((sectionsFilieres) =>
          sectionsFilieres.filier.designation.toLowerCase().includes(filiereRecherche.toLowerCase()) );
          setSectionFilier(results);
      // });
  };  

  function reinitialiserPage(){
      // setFiliereRecherche('');
      // setSectionFilier(initialFilierSection)
    //history.replace("/interface-section-filiere"); 
    window.location.href = "/interface-section-filiere"; 
  }

  function Retour(){
    history.replace('/interface-principale-section'); 
    // onClick={ () => Retour()}
}

  return (<div> <HeaderAdmin />
    <div className="container"> <br /><br />
      <div className="row">
        <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
          <h3 className='text-center'>Affecter Section - Filière</h3>
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
                <label className="col-sm-3 col-form-label">Section :</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    id="Selecto"
                    placeholder="Section"
                    name="Section"
                    onChange={(e) => handleChangeSection(e)}
                  >
                    <option value="">Sélectionner une Section</option>
                    {section.map(option => (
                      <option key={option.codeSec} value={option.codeSec}>{option.designation}</option>
                    ))}
                  </select> </div></div>
              <br />
              <div className="form-group row">
                <div className="col-sm-5 offset-sm-8" >
                  <button className="btn btn-success" onClick={saveSectionFilier}>Enregistrer</button>
                   <button className="btn btn-danger" onClick={HandlerAnnuler} style={{ marginLeft: "5px" }}>Annuler</button>
                </div>
              </div>
            </form>
          </div>   </div>
    </div><br />

{/* // ----------- La barre de rechereche : --------------------------------------------------------- */}
    <div className="form-group">      {/*value={filiereRecherche}  */}
        <label htmlFor="search" style={{marginLeft: "4%", fontWeight: 'bold', color:"#008080"}}>Filière :</label>
        <input type="text" className="form-control col-sm-6" id="search" placeholder="------------- Entrez la designation de la Filière -------------------------" 
           value={filiereRecherche}  onChange={(e) => setFiliereRecherche(e.target.value)} style={{ display: "inline-block", marginLeft: "1%" }} /> 
          <button className="btn btn-primary" onClick={rechercherFiliereParDesignation} style={{ display: "inline-block", marginLeft: "1%" }}> Rechercher </button>
          <button style={{marginLeft:"1%"}} className="btn btn-primary" onClick={reinitialiserPage} > Réinitialiser </button>
      </div>
{/* // --------------------------------------------------------------------------------------------- */}


    <table className='table table-striped table-bordered'>
      <thead >
      <th>Niveau</th>
        <th>Filière</th>
        <th>Section</th>
        <th>Actions</th>
      </thead>
      <tbody>
{sectionFilier.length === 0 ? (
  <tr>
    <td colSpan="4" className="text-center">
      Aucun Filière disponible
    </td>
  </tr>
) : (  
        /* sectionFilier.map( */
        displayedSectionsFilieres.map(
          secfil =>
            <tr key={secfil.id}>
            <td> {secfil.filier.niveau.designation}</td>
              <td> {secfil.filier.designation}</td>
              <td> {secfil.section.designation}</td>
               <td>
                    <EditOutlined style={{color: "green" , cursor: 'pointer', marginLeft:"1px" , fontSize: '22px'  }}
                      onClick={() => modifierSectionFilier(secfil.filier.codeFil, secfil.section.codeSec)}
                    />
                    <DeleteOutlined
                      onClick={() => deleteSectionFilier(secfil.filier.codeFil, secfil.section.codeSec)}
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
  </div><br />
  </div>
  )
}
export default InterfaceSectionFilier;