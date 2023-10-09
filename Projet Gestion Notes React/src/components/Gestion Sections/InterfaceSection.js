import React, { useState, useEffect } from 'react';
import sectionService from './SectionService'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
import { useHistory } from 'react-router-dom';

function InterfaceSection(props) {
    const [codeSec, setCodeSec] = useState('');
    const [section, setSection] = useState([]);
     const [designation, setDesignation] = useState('');

   const history = useHistory();

    useEffect(() => {
      sectionService.getSection().then((reponse) => {
          setSection(reponse.data);
      });
    }, []);
    
    function ModifierSection(codeSec){
      if (window.confirm('Voulez-vous vraiment mettre à jour cette Section ?')) {
        history.replace(`/modifier-section/${codeSec}`); }
    }

    function DeleteSection(codeSec) {
      if (window.confirm('Voulez-vous vraiment supprimer cette Section ?')) {
        sectionService.deleteSection(codeSec).then(reponse => {
       setSection(section.filter(sectio => sectio.codeSec !== codeSec)); });
            toast.success('Section supprimée avec succès !', {
               position: toast.POSITION.TOP_CENTER }); }
    }

    // Fonction de validation du formulaire
    const validateForm = () => {
      return (
        codeSec !== '' && designation !== ''  );
    };

    const saveSection = (e) => {
      e.preventDefault();
   if(validateForm()) {
      let sec = { codeSec  ,designation};
     // Vérifier si le code existe
    let codeExists=[];
    sectionService.getSectionByCodeSec(codeSec).then(res => { codeExists=res.data ; 
       if (codeExists.codeSec !== codeSec) {
          sectionService.createSection(sec).then(res => {
          window.alert('Section ajoutée avec succès.');
          // history.replace('/interface-section'); 
          window.location.href = '/interface-section'; });
      } else {
        toast.error('Cette Section '+ codeSec +" existe déjà dans la base de données.", {
            position: toast.POSITION.TOP_CENTER });
        } });
   } else {
      toast.error('Veuillez remplir tous les champs.', {
          position: toast.POSITION.TOP_CENTER });
    }
        }

      const changeSectionHandler = (event) => {
        setCodeSec(event.target.value);
    }
     const changeDesignationHandler = (event) => {
        setDesignation(event.target.value);
    
    }
    function HandlerAnnuler() {
      setCodeSec('')
      setDesignation('')
    }

    function Retour(){
      history.replace('/interface-principale-section'); 
      // onClick={ () => Retour()}
  }

    return (
        <div style={{ backgroundColor: "" }}>  <HeaderAdmin />
            <div className="container"> <br />
                <div className="row">
                    <div className="card col-md-7 offset-md-2 offset-md-3"> <br />

                        <h3 className='text-center'>Ajouter Section</h3>
                        <div className='card-body'>

                            <form>
                                <div className="form-group row">
                                    <label style={{ whiteSpace: "nowrap" }} className="col-sm-3 col-form-label">code Section :</label>
                                    <div className="col-sm-9">
                                        <input type='text' placeholder="code Section" className="form-control"
                                            value={codeSec} onChange={changeSectionHandler} required />
                                    </div>
                                </div>
                                  <div className="form-group row">
                                    <label style={{ whiteSpace: "nowrap" }} className="col-sm-3 col-form-label">Designation :</label>
                                    <div className="col-sm-9">
                                        <input type='text' placeholder="designation de section" className="form-control"
                                            value={designation} onChange={changeDesignationHandler} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-5 offset-sm-8" >
                                        <button className="btn btn-success" onClick={saveSection}>Enregistrer</button>
                                        <button className="btn btn-danger" onClick={HandlerAnnuler} style={{ marginLeft: "5px" }}>Annuler</button>
                                    </div>
                                </div>
                            </form><br/>
              
                            </div>
                    </div>
                </div>   <br />           
                            <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>code Section</th>
               <th>Designation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
   {section.length === 0 ? (
    <tr>
      <td colSpan="3" className="text-center">
        Aucun Section disponible
      </td>
    </tr>
  ) : (
            section.map(etu =>
                <tr key={etu.codeSec}>
                  <td>{etu.codeSec}</td>
                    <td>{etu.designation}</td>
                  <td>
                    <EditOutlined style={{color: "green" , cursor: 'pointer', marginLeft:"1px" , fontSize: '22px'  }}
                      onClick={() => ModifierSection(etu.codeSec)}
                    />
                    <DeleteOutlined
                      onClick={() => DeleteSection(etu.codeSec)}
                      style={{ color: "red",  cursor: 'pointer' , marginLeft:"8px" , fontSize: '22px' }}
                    />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>

            <div className="form-group row">
                    <div className="col-sm-4 offset-sm-10" >
                    <div onClick={ () => Retour()}>
                        <button style={{width:"30%", fontSize:"110%"}} className="btn btn-info">Retour</button> </div>                          
                      </div>
                </div>

            </div>
            <br /> <br />
        </div>
    );


}

export default InterfaceSection;