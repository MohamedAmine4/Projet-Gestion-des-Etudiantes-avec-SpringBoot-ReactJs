import React, { useState, useEffect } from 'react';
import sectionService from "./SectionService";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';


function ModifierSection(props) {
 
  const [codeSec, setCodeSec] = useState('');
  const [designation, setDesignation] = useState('');
  const history = useHistory();
  
  useEffect(() => {
    sectionService.getSectionByCodeSec(props.match.params.codeSec).then(res => {
  let sec = res.data;
   setCodeSec(sec.codeSec);
   setDesignation(sec.designation)
  });
  }, [props.match.params.codeSec]);

    // Fonction de validation du formulaire
    const validateForm = () => {
      return (
        codeSec !== '' && designation !== ''  );
    };

  const ModifierSection = (e) => {
    e.preventDefault();
  if(validateForm()) {    
    let sec = {  codeSec,designation };
      sectionService.updateSection(sec,props.match.params.codeSec)
        .then(res => {
          window.alert('Section modifiée avec succès.');
          history.replace('/interface-section'); })
  } else {
    toast.error('Veuillez remplir tous les champs.', {
        position: toast.POSITION.TOP_CENTER });
  }
 }

 const changeSectionHandler = (event) => {
  setCodeSec(event.target.value);
}
  const changeDesignationHandler= (event) => {
      setDesignation(event.target.value);
  }

  const fonctionAnnuler = () =>{
      history.replace('/interface-section');
  }

  return (
      <div style={{backgroundColor:""}}>  <HeaderAdmin />
          <div className="container"> <br /><br />
              <div className="row">
                  <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
                      {/* {getTitle()} */}
                      <h3 className='text-center'>Modifier Section</h3>
                      <div className='card-body'>
  
                          <form>
                          <div className="form-group row">
                                    <label style={{ whiteSpace: "nowrap" }} className="col-sm-3 col-form-label">code Section :</label>
                                    <div className="col-sm-9">
                                        <input type='text' placeholder="code Section" className="form-control"
                                            value={codeSec} onChange={changeSectionHandler} required readOnly/>
                                    </div>
                                </div>   
                              <div className="form-group row">
                                    <label style={{whiteSpace: "nowrap"}} className="col-sm-3 col-form-label">Designation:</label>
                                    <div className="col-sm-9">
                                        <input type='text' placeholder="La date "  className="form-control"
                                            value={designation} onChange={changeDesignationHandler} required />
                                    </div>
                                </div>
                               
                              <div className="form-group row">
                                  <div className="col-sm-5 offset-sm-8" >
                                      <button className="btn btn-success" onClick={ModifierSection}>Enregistrer</button>
                                      <button className="btn btn-danger" onClick={fonctionAnnuler} style={{ marginLeft: "5px" }}>Annuler</button>
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
export default ModifierSection;