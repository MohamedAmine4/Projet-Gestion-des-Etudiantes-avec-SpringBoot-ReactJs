import React, { useEffect, useState } from 'react';
import responsableService from "./ResponsableService";
import moment from "moment";
import { toast } from 'react-toastify';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
 import { useHistory } from 'react-router-dom';

function AjouterResponsable(props) {
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

   const history = useHistory();

    const [formIsValid, setFormIsValid] = useState(false);
    useEffect(() => {
        setFormIsValid(
            cin !== '' && nom !== '' && prenom !== '' && dateNaissance !== '' &&
            telephone !== '' && email !== '' && nationalite !== '' && ville !== '' &&
            sexe !== '' && statut !== '' && login !== '' && password !== ''
        );
        }, [cin, nom, prenom, dateNaissance, telephone, email, nationalite, ville, sexe, statut, login, password]);

    const saveResponsable=(e)=>{
        e.preventDefault();
    if ( formIsValid) {
        let responsable={ cin, nom, prenom, dateNaissance, telephone, email , nationalite,ville,sexe,statut, login, password };
            // Vérifier si le CIN existe déjà
            let cinExists=[];
            responsableService.getResponsableById(cin).then(res => { cinExists=res.data ; 
            if (cinExists.cin !== cin) {    
     responsableService.createResponsable(responsable).then(res =>{
        window.alert('Responsable  ajouté avec succès.');
           history.replace('/interface-responsable') ;     });
    } else {
        toast.error('La CIN '+ cin +" existe déjà dans la base de données.", {
            position: toast.POSITION.TOP_CENTER });
    } }); 
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
      // Convertir la date de naissance en objet de type Date
   const dateNaissanceObj = new Date(event.target.value);
   // Formater la date dans le format ISO
   const dateNaissanceISO = moment(dateNaissanceObj).format('YYYY-MM-DD');
   setDateNaissance(dateNaissanceISO);
       
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

    // function HandlerAnnuler() {
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
    //     setStatut('En cours');
    //     setPassword('');
    // }

    const fonctionAnnuler = () =>{
        history.replace('/interface-responsable') ;
     }
 

    return (
        <div style={{backgroundColor:""}}>   <HeaderAdmin />
            <div className="container"> <br /><br />
                <div className="row">
                    <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
                    <h3 className="text-center">Ajouter Responsable</h3>
                        <div className='card-body'>
    
                            <form>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">CIN :</label>
                                    <div className="col-sm-9">
                                        <input placeholder="Votre CIN"className="form-control"
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
                             <br/>
                                <div className="form-group row">
                                    <div className="col-sm-5 offset-sm-8" >
                                        <button className="btn btn-success"  onClick={saveResponsable}>Enregistrer</button>
                                       
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

export default AjouterResponsable;