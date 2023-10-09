import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import niveauEtude from '../../services/NiveauEtude';
import professeurModuleService from '../../services/ProfesseurModuleService';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import professeurService from './ProfesseurService';
import sectionFilierService from '../Gestion Sections Filieres/SectionFilierService';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';

function AffecterProfesseur(props) {

    const history = useHistory();
    const [cin, setCIN]=useState('');
    const [statut, setStatut]=useState('');
    const [codeMod, setCodeMod] = useState('');
    const identProf=props.match.params.cinProfMod; // recuperer ce variable a partir de SiteWeb (Lien/Page) en cours)
    const codeModURL=props.match.params.ProfCodeMod;

    const [niveaux, setNiveaux] = useState([]);
    const [filieres, setFilieres] = useState([]);
    const [niveauxScolaires, setNiveauxScolaires] = useState([]);
    const [modules, setModules] = useState([]);

    const [formIsValid, setFormIsValid] = useState(false);
    useEffect(() => {
        setFormIsValid(
            cin !== '' &&
            statut !== '' &&
            codeMod !== ''
        );
        }, [cin, statut, codeMod]);

    useEffect(() => {
        if(identProf === "_aff" && codeModURL === "_aff"){
            return
         } else {
            professeurModuleService.getProfsModulesByCIN(identProf,codeModURL).then(reponse => {
                let detailsProfModule=reponse.data;
                setCIN(detailsProfModule.professeur.cin);
                setStatut(detailsProfModule.statut);
                // setNiveaux([detailsProfModule.module.niveauScolaire.filiere.niveau]);
                // setFilieres([detailsProfModule.module.niveauScolaire.filiere]);
                // setNiveauxScolaires([detailsProfModule.module.niveauScolaire]);
                // setModules([detailsProfModule.module]);
                // console.log(JSON.stringify(detailsProfModule.module.niveauScolaire.filiere.niveau.designation));
            }); } }, [identProf, codeModURL] );

    const changeCINHandler= (event) => {
        setCIN(event.target.value);
    }
    function changeStatutHandler(event) {
        setStatut(event.target.value);
    }

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
   
      const [SectionsOptions, setSectionsOptions] = useState([]);
      const handleFiliereChange = (e) => {
        const selectedFiliereCode = e.target.value;
        // Faites une requête pour récupérer les niveaux scolaires associées au filière sélectionné
        niveauEtude.getNiveauxScolairesByCodeFiliere(selectedFiliereCode).then((reponse) => {
          setNiveauxScolaires(reponse.data);
        });
        sectionFilierService.getAllSectionsByCodeFiliere(selectedFiliereCode).then((reponse) => {
            setSectionsOptions(reponse.data);
        });

      };
    
      const handleNiveauScolaireChange = (e) => {
        const selectedNiveauScolaireCode = e.target.value;
        // Faites une requête pour récupérer les modules associées au niveau scolaire sélectionné
        niveauEtude.getModulesByCodeNivSco(selectedNiveauScolaireCode).then((reponse) => {
          setModules(reponse.data);
          setCodeMod(''); // Réinitialise le code du module sélectionné
        });
      };

function saveDetailsProfModule(evt){ 
        evt.preventDefault();   
if(identProf === "_aff" && codeModURL === "_aff"){  // Affecter Prof        
   if (formIsValid) { 
        let detailProfMod = { statut, professeur: { cin: cin }, module: { codeMod: codeMod }, section: document.getElementById('SelectorSection').value };
    // Vérifier si le CIN existe
    let cinExists=[];
     professeurService.getProfesseurById(cin).then(res => { cinExists=res.data ; 
        if (cinExists.cin === cin) {
            // CIN existe dans la base de données
                professeurModuleService.ajouterProfModule(detailProfMod).then( res => {
                    window.alert('Details Professeur Module ajouté avec succès.');
                    history.replace('/interface-affecter-prof') ;
                });
        } else {
            // CIN n'existe pas dans la base de données
            toast.error('La CIN '+ cin +" n'existe pas dans la base de données.", {
                position: toast.POSITION.TOP_CENTER });
        } });
    } else {
        toast.error('Veuillez remplir tous les champs.', {
            position: toast.POSITION.TOP_CENTER });
    }
} else { // Modifier Affectattion
    let detailProfMod = { statut }
    professeurModuleService.updateProfModule(identProf,codeModURL,detailProfMod).then( res => {
        window.alert('Details Professeur Module mis à jour avec succès.');
          history.replace('/interface-affecter-prof') ;
    });
 }
  }

  function getTitle(){
    if(identProf === "_aff" && codeModURL === "_aff"){
        return  <h3 className="text-center">Affecter Professeur</h3>
    }else{
        return <h3 className="text-center">Modifier L'Affectation</h3>
    }
}

const fonctionAnnuler = () =>{
    if(identProf === "_aff" && codeModURL === "_aff"){
        history.replace('/interface-affecter-prof') ;
    }else {   
    history.replace('/interface-affecter-prof'); }
}
  
    return (
        <div style={{backgroundColor:""}}> <HeaderAdmin />
            <div className="container"> <br /><br />
                <div className="row">
                    <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
                              {getTitle()}
                        <div className='card-body'>
    
                            <form>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">CIN :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Entrez CIN"className="form-control"
                                            value={cin} onChange={changeCINHandler} required readOnly={identProf !== "_aff"}  />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Niveau :</label>
                                    <div className="col-sm-9">
                                       <Form.Control as="select" onChange={handleNiveauChange} readOnly={identProf !== "_aff"}  >  {/* value={niveaux[0]?.codeNiv || ''} */}
                                        <option value="">
                                            Sélectionner un niveau
                                        </option>
                                        { niveaux.map((niveau) => (
                                            <option value={niveau.codeNiv} key={niveau.codeNiv}>
                                            {niveau.designation}
                                            </option> ))}
                                        </Form.Control>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Filière :</label>
                                    <div className="col-sm-9">
                                      <Form.Control as="select" onChange={handleFiliereChange} readOnly={identProf !== "_aff"} >
                                        <option value="">
                                            Sélectionner une filière
                                        </option>
                                        {filieres.map((filiere) => (
                                            <option value={filiere.codeFil} key={filiere.codeFil}>
                                            {filiere.designation}
                                            </option>
                                        ))}
                                        </Form.Control>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label style={{whiteSpace: "nowrap"}} className="col-sm-3 col-form-label">Niveau Scolaire :</label>
                                    <div className="col-sm-9">
                                       <Form.Control as="select" onChange={handleNiveauScolaireChange} readOnly={identProf !== "_aff"} >
                                            <option value="">
                                                Sélectionner un niveau scolaire
                                            </option>
                                            {niveauxScolaires.map((niveauScolaire) => (
                                                <option value={niveauScolaire.codeNivSco} key={niveauScolaire.codeNivSco}>
                                                {niveauScolaire.designation}
                                                </option>
                                            ))}
                                            </Form.Control>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label style={{whiteSpace: "nowrap"}} className="col-sm-3 col-form-label">Module :</label>
                                    <div className="col-sm-9">
                                      <Form.Control as="select" onChange={(e) => setCodeMod(e.target.value)} readOnly={identProf !== "_aff"} >  {/*value={codeMod}*/}
                                            <option value="">Sélectionner un module </option>
                                        {modules.map(module => (     
                                            <option value={module.codeMod} key={module.codeMod}>
                                            {module.nomMod}</option>
                                        ))}
                                        </Form.Control>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Section :</label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-control"
                                            id="SelectorSection"
                                            placeholder="Section"
                                            name="section"  readOnly={identProf !== "_aff"} >
                                            <option value="">Sélectionner une section</option>
                                             {SectionsOptions.map(option => (
                                                <option key={option.section.codeSec} value={option.section.designation}>{option.section.designation}</option> ))} 
                                            </select>
                                    </div></div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Statut :</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" value={statut} onChange={changeStatutHandler} required>
                                            <option value="">Sélectionner le statut</option>
                                            <option value="En cours">En cours</option>
                                            <option value="Terminé">Terminé</option>
                                        </select>
                                    </div>
                                </div>
 
                             <br/>
                                <div className="form-group row">
                                    <div className="col-sm-9 offset-sm-8">
                                        <button className="btn btn-success" onClick={saveDetailsProfModule}>Enregistrer</button>
                                        <button className="btn btn-danger" onClick={ () => fonctionAnnuler()} style={{ marginLeft: "10px" }}>Annuler</button>
                                    </div>
                                </div>
                            </form>
    
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br /><br />
        </div>
    );
    

}

export default AffecterProfesseur;