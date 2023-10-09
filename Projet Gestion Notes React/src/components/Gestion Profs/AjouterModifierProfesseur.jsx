import React, { useState, useEffect } from 'react';
import professeurService from './ProfesseurService';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
// import etudiantService from '../../services/EtudiantService';

function AjouterModifierProfesseur(props) {

    const [cin, setCIN]=useState('');
    const [nom, setNom]=useState('');
    const [prenom, setPrenom]=useState('');
    const [dateNaissance, setDateNaissance]=useState('');;
    const [telephone, setTelephone]=useState('');
    const [email, setEmail]=useState('');
    const [nationalite, setNationalite]=useState('');
    const [ville, setVille]=useState('');
    const [sexe, setSexe]=useState('');
    const [statut, setStatut]=useState('');
    const [login, setLogin]=useState('');
    const [password, setPassword]=useState('');

    const [formIsValid, setFormIsValid] = useState(false);
    const history = useHistory();

   const ident=props.match.params.CINProf; // recuperer ce variable a partir de SiteWeb (Lien/Page) en cours)
    useEffect(() => {
        if(ident === "_add"){
            return 
         }
         else {
            professeurService.getProfesseurById(ident).then(reponse => {
                let professeur=reponse.data;
                setCIN(professeur.cin);
                setNom(professeur.nom);
                setPrenom(professeur.prenom);
                setDateNaissance(professeur.dateNaissance);
                setTelephone(professeur.telephone);
                setEmail(professeur.email);
                setNationalite(professeur.nationalite);
                setVille(professeur.ville);
                setSexe(professeur.sexe);
                setStatut(professeur.statut);
                setLogin(professeur.login);
                setPassword(professeur.password);
            });
    
       }
    },
      [ident] );

    useEffect(() => {
    setFormIsValid(
        cin !== '' &&
        nom !== '' &&
        prenom !== '' &&
        dateNaissance !== '' &&
        telephone !== '' &&
        email !== '' &&
        nationalite !== '' &&
        ville !== '' &&
        sexe !== '' &&
        statut !== '' &&
        login !== '' &&
        password !== ''
    );
    }, [cin, nom, prenom, dateNaissance, telephone, email, nationalite, ville, sexe, statut, login, password]);

   const saveProfesseur = async (evt) => {   //L'attribut "date_naissance" existe dans la base de donnees ==> date_naissance:dateNaissance
          evt.preventDefault();        //L'attribut "dateNaissance" variable declare dans cette classe (ou bien fonction)
    if ( formIsValid) {     // ! formIsValid)
      let professeur = { cin, nom, prenom, dateNaissance, telephone, email, nationalite, ville, sexe, statut, login, password };
     
      if(ident === "_add") { // Ajouter Professeur 
         // Vérifier si le CIN existe déjà
            let cinExists=[];
            professeurService.getProfesseurById(cin).then(res => { cinExists=res.data ; 
            if (cinExists.cin !== cin) {
        professeurService.createProfesseur(professeur).then( res => {
            window.alert('Professeur ajouté avec succès.');
            history.replace('/interface-prof') ; });
            } else {
                toast.error('La CIN '+ cin +" existe déjà dans la base de données.", {
                    position: toast.POSITION.TOP_CENTER });
            } }); 
      }
      else { // Modifier Professeur 
        professeurService.updateProfesseur(ident, professeur).then( res => {
            window.alert('Professeur mis à jour avec succès.');
            history.replace('/consulter-prof') ; }); }        
    } else {
        toast.error('Veuillez remplir tous les champs.', {
            position: toast.POSITION.TOP_CENTER });
    }
    }

   const changeCINHandler= (event) => {
        setCIN(event.target.value);
    }

    function changeNomHandler(event) {
        setNom(event.target.value);
    }

   function changePrenomHandler(event) {
        setPrenom(event.target.value);
    }

    const changeNaissanceHandler= (event) => {
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

    function changeSexeHandler(event) {
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

    const fonctionAnnuler = () =>{
        // window.history.back();

        // window.history.pushState(null, '', '/interface-prof');
        // window.location.reload();

        if (ident === "_add") {
            history.replace('/interface-prof/') ;
          } else {
            // props.history.push('/professeur-liste');
            history.replace('/consulter-prof/');
          }
    }

   function getTitle(){
        if(ident === "_add"){
            return  <h3 className="text-center">Ajouter Professeur</h3>
        }else{
            return <h3 className="text-center">Modifier Professeur</h3>
        }
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
                                        <input placeholder="Votre CIN"className="form-control"
                                            value={cin} onChange={changeCINHandler} required readOnly={ident !== "_add"} />
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
                                    <label style={{whiteSpace: "nowrap"}} className="col-sm-3 col-form-label">Date de naissance :</label>
                                    <div className="col-sm-9">
                                        <input type='date' placeholder="La date de naissance"  className="form-control"
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
                                     <div className="col-sm-9">     {/* type='email' */}
                                        <input placeholder="Votre Email" className="form-control"
                                            value={email} onChange={changeEmailHandler} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Nationalité :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Votre Nationalité" className="form-control"
                                            value={nationalite} onChange={changeNationaliteHandler} required />
                                    </div>
                                </div>
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
                                        <select className="form-control" value={sexe} onChange={changeSexeHandler} required>
                                            <option value="">Sélectionner le sexe</option>
                                            <option value="Enseignant">Enseignant</option>
                                            <option value="Enseignante">Enseignante</option>
                                        </select>
                                    </div>
                                </div>
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
                             <br/>
                                <div className="form-group row">
                                    <div className="col-sm-9 offset-sm-8">
                                        <button className="btn btn-success" onClick={saveProfesseur}>Enregistrer</button>
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

export default AjouterModifierProfesseur;