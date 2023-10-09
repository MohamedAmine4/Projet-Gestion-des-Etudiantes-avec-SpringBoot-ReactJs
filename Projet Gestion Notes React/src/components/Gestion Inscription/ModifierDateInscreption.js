import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import dateInscriptionService from './DateInsciprtionService';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';

function ModifierDateInscription(props) {
 
  const [dateInscreption, setDateNaissance] = useState('');
  const history = useHistory();
  
  useEffect(() => {
    dateInscriptionService.getDateById(props.match.params.id).then(res => {
  let date = res.data;
   // Convertir la date de naissance en objet de type Date
   const dateNaissanceObj = new Date(date.dateInscreption);
   // Formater la date dans le format ISO
   const dateNaissanceISO = moment(dateNaissanceObj).format('YYYY-MM-DD');
   setDateNaissance(dateNaissanceISO);
 
  });
  }, [props.match.params.id]);

    // Fonction de validation du formulaire
      const validateForm = () => {
        return (
          dateInscreption !== ''  );
      };

  const ModifierDate = (e) => {
    e.preventDefault();
 if(validateForm()) {      
    let dateInscrip = { dateInscreption };
    dateInscriptionService.updateDate(dateInscrip,props.match.params.id)
        .then(res => {
          window.alert("Date d'inscription modifiée avec succès.");
              history.replace('/interface-date-inscription');  });
    } else {
      toast.error('Veuillez remplir tous les champs.', {
          position: toast.POSITION.TOP_CENTER });
      }      
  }
 

  const changeNaissanceHandler= (event) => {
      setDateNaissance(event.target.value);
  }

  const fonctionAnnuler = () =>{
      history.replace('/interface-date-inscription');
  }

  return (
      <div style={{backgroundColor:""}}> <HeaderAdmin />
          <div className="container"> <br /><br />
              <div className="row">
                  <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
                      {/* {getTitle()} */}
                      <h3 className='text-center'>Modifier date d'inscription</h3>
                      <div className='card-body'>
  
                          <form>
                             
                              <div className="form-group row">
                                    <label style={{whiteSpace: "nowrap"}} className="col-sm-3 col-form-label">Date d'inscription : </label>
                                    <div className="col-sm-9">
                                        <input type='date' placeholder="La date "  className="form-control"
                                            value={dateInscreption} onChange={changeNaissanceHandler} required />
                                    </div>
                                </div>
                               
                                <br />
                              <div className="form-group row">
                                  <div className="col-sm-5 offset-sm-8" >
                                     <button className="btn btn-success" onClick={ModifierDate}>Enregistrer</button>
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
export default ModifierDateInscription;