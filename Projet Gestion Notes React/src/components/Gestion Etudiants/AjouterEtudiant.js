import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import etudiantService from "./EtudiantService";
import filierService from '../Gestion Filieres/FilierService';
import niveauService from '../Gestion Niveaux/NiveauService';
import { toast } from 'react-toastify';
import sectionFilierService from '../Gestion Sections Filieres/SectionFilierService';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
import { useHistory } from 'react-router-dom';

function AjouterEtudiant(props) {

    const history = useHistory();

    const [cin, setCIN] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');;
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [nationalite, setNationalite] = useState('');
    const [ville, setVille] = useState('');
    const [sexe, setSexe] = useState('');
    const [statut, setStatut] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [codeFil, setFilier] = useState('');
    const [section, setSection] = useState('');
    const [filierOptions, setFilierOptions] = useState([]);
    const [niveauOptions, setNiveauOptions] = useState([]);
    const [codeNiv, setCodeNiv] = useState([]);
    const [enable, setEnable] = useState(true);
    const [SectionsOptions, setSectionsOptions] = useState([]);

    useEffect(() => {
        niveauService.getNiveau().then((reponse) => {
            setNiveauOptions(reponse.data);
        });
    }, []);


    useEffect(() => {
        filierService.getFilierNiveau(codeNiv).then((reponse) => {
            setFilierOptions(reponse.data); });

            sectionFilierService.getAllSectionsByCodeFiliere(codeFil).then((reponse) => {
                // let sections_filieres = reponse.data ;
                // setSectionsOptions(sections_filieres.section);
                setSectionsOptions(reponse.data);
            });                       
    }, [codeNiv, codeFil]);

    const handleChange = (e) => {
        const codeNive2 = e.target.value;
         setCodeNiv(codeNive2);
        if (codeNive2 !== '') {
            filierService.getFilierNiveau(codeNive2).then((reponse) => {
                setFilierOptions(reponse.data);
            });
            setEnable(false);
        } else {
            setEnable(true);
        }
    };

    const [formIsValid, setFormIsValid] = useState(false);
    useEffect(() => {
        setFormIsValid(
            cin !== '' && nom !== '' && prenom !== '' && dateNaissance !== '' &&
            telephone !== '' && email !== '' && nationalite !== '' && ville !== '' &&
            sexe !== '' && statut !== '' && login !== '' && password !== '' &&
            section !== '' && codeFil !== '' && codeNiv !== ''
        );
        }, [cin, nom, prenom, dateNaissance, telephone, email, nationalite, ville, sexe, statut, login, password, section, codeFil, codeNiv]);

    const saveEtudiant = async (evt) => { 
        evt.preventDefault();  
   if ( formIsValid) {
        let etudiant = { cin, nom, prenom, dateNaissance, telephone, email, nationalite, ville, sexe, statut, login, password, filiere : {codeFil :codeFil , niveau : {codeNiv}}, 
                          section : document.getElementById('SelectorSection').value };
         // Vérifier si le CIN existe déjà
         let cinExists=[];
         etudiantService.getEtudiantById(cin).then(res => { cinExists=res.data ; 
         if (cinExists.cin !== cin) {
        etudiantService.createEtudiant(etudiant).then(res => {
            window.alert('Etudiant ajouté avec succès.');
           history.replace('/interface-etudiant');  });
        } else {
            toast.error('La CIN '+ cin +" existe déjà dans la base de données.", {
                position: toast.POSITION.TOP_CENTER });
        } });         
    } else {
        toast.error('Veuillez remplir tous les champs.', {
            position: toast.POSITION.TOP_CENTER });
    }
    }


    const changeCINHandler = (event) => {
        setCIN(event.target.value);
    }

    function changeNomHandler(event) {
        setNom(event.target.value);
    }

    function changePrenomHandler(event) {
        setPrenom(event.target.value);
    }

    const changeNaissanceHandler = (event) => {
        setDateNaissance(event.target.value);
    }

    function changeTelephoneHandler(event) {
        setTelephone(event.target.value);
    }

    function changeEmailHandler(event) {
        setEmail(event.target.value);
    }

    function changeNationaliteHandler(event) {
        setNationalite(event.target.value);
    }
    function changeVilleHandler(event) {
        setVille(event.target.value);
    }
    function changeSexHandler(event) {
        setSexe(event.target.value);
    }
    function changeStatutHandler(event) {
        setStatut(event.target.value);
    }
    function changeLoginHandler(event) {
        setLogin(event.target.value);
    }
    function changePasswordHandler(event) {
        setPassword(event.target.value);
    }

    function changeSectionHandler(event) {
        setSection(event.target.value);
    }
function changeCodeFil(e){
    setFilier(e.target.value)
;}

    // function fonctionAnnuler() {
    //     setNom('')
    //     setCIN('')
    //     setPrenom('')
    //     setNationalite('')
    //     setDateNaissance('')
    //     setSexe('')
    //     setVille('')
    //     setEmail('')
    //     setTelephone('')
    //     setLogin('')
    //     setStatut('');
    //     setPassword('');
    //     setSection('');
    // }

    const fonctionAnnuler = () =>{
       history.replace('/interface-etudiant');
    }


    return (
        <div style={{ backgroundColor: "" }}> <HeaderAdmin />
            <div className="container"> <br /><br />
                <div className="row">
                    <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
                         <h3 className="text-center">Ajouter Etudiant</h3>
                        <div className='card-body'>

                            <form>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">CIN :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Votre CIN" className="form-control"
                                            value={cin} onChange={changeCINHandler} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Nom :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Votre Nom" className="form-control"
                                            value={nom} onChange={changeNomHandler} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Prenom :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Votre Prenom" className="form-control"
                                            value={prenom} onChange={changePrenomHandler} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label style={{ whiteSpace: "nowrap" }} className="col-sm-3 col-form-label">Date de naissance :</label>
                                    <div className="col-sm-9">
                                        <input type='date' placeholder="La date de naissance" className="form-control"
                                            value={dateNaissance} onChange={changeNaissanceHandler} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Téléphone :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Votre Téléphone" className="form-control"
                                            value={telephone} onChange={changeTelephoneHandler} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Email :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Votre Email" className="form-control"
                                            value={email} onChange={changeEmailHandler} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Nationalité :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Votre Nationalité" className="form-control"
                                            value={nationalite} onChange={changeNationaliteHandler} required />
                                    </div></div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Ville :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Votre Ville" className="form-control"
                                            value={ville} onChange={changeVilleHandler} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Sexe :</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" placeholder="Votre Sexe"
                                            value={sexe} onChange={changeSexHandler}
                                        >
                                            <option >Votre Sexe</option>
                                            <option value="Homme">Homme</option>
                                            <option value="femme">femme</option>{" "}
                                        </select>

                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Statut :</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" placeholder="Statut"
                                            value={statut} onChange={changeStatutHandler}
                                        >
                                            <option >Statut</option>
                                            <option value="En cours">En cours</option>
                                            <option value="Quitter">Quitter</option>
                                            <option value="Termine">Terminer</option>{" "}
                                        </select> </div></div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Login :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Utilisateur" className="form-control"
                                            value={login} onChange={changeLoginHandler} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Password :</label>
                                    <div className="col-sm-9">
                                        <input type='password' placeholder="Le mot de passe" className="form-control"
                                            value={password} onChange={changePasswordHandler} required />
                                    </div>
                                </div>
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
                                            onChange={changeCodeFil}
                                            disabled={enable}
                                        >  
                                            <option value="">Sélectionner une filière</option>
                                            {filierOptions.map(option => (
                                                <option key={option.codeFil} value={option.codeFil}>{option.designation}</option>
                                            ))}</select>
                                    </div></div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Section :</label>
                                    <div className="col-sm-9">
                                        <select
                                            className="form-control"
                                            id="SelectorSection"
                                            placeholder="Section"
                                            name="section"
                                            onChange={changeSectionHandler} >
                                            <option value="">Sélectionner une section</option>
                                             {SectionsOptions.map(option => (
                                                <option key={option.section.codeSec} value={option.section.designation}>{option.section.designation}</option> ))} 
                                            </select>
                                    </div></div>
                                <br />
                                <div className="form-group row">
                                    <div className="col-sm-5 offset-sm-8" >
                                        <button className="btn btn-success" onClick={saveEtudiant}>Enregistrer</button>
                                        <button className="btn btn-danger" onClick={ () => fonctionAnnuler()} style={{ marginLeft: "10px" }}>Annuler</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
                {/* <div className="form-group row">
                    <div className="col-sm-5 offset-sm-8" >
                    <a href="/interface-etudiant">
                        <button style={{width:"20%", marginTop:"2%", marginLeft:"5%"}} className="btn btn-info">Retour</button> </a>                          
                      </div>
                 </div> */}
            <br /> <br /><br />
        </div>
    );


}

export default AjouterEtudiant;