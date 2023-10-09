import React, { useState, useEffect } from 'react';
// import dateService from './DateService'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import DateInsciprtionService from './DateInsciprtionService';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
import { useHistory } from 'react-router-dom';


function InterfaceDateInscription(props) {
// const [dateInscreption,setDtaeInscreption]=useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [date, setDate] = useState([]);
    const history = useHistory();

    useEffect(() => {
      DateInsciprtionService.getDate().then((reponse) => {
          setDate(reponse.data);
      });
    }, [date]);
    
    function ModifierDate(id){ 
      if (window.confirm("Voulez-vous vraiment mettre à jour cette date d'inscription ?")) {
        history.replace(`/modifier-date-inscription/${id}`); }
    }

    function DeleteDate(id){  
      if (window.confirm("Voulez-vous vraiment supprimer cette date d'inscription ?")) {
        DateInsciprtionService.deleteDateInscription(id).then(reponse => {
          setDate(date.filter(dateInscrip => dateInscrip.id !== id)); });
            toast.success("Date d'inscription supprimée avec succès !", {
               position: toast.POSITION.TOP_CENTER }); }
    }

      // Fonction de validation du formulaire
      const validateForm = () => {
        return (
          dateNaissance !== ''  );
      };

  const saveDate = (e) => {
    if(validateForm()) {  
      e.preventDefault();
      let dateInscrep = { dateInscreption : dateNaissance };
         DateInsciprtionService.createDate(dateInscrep).then(res => {
          window.alert("Date d'inscription ajoutée avec succès.");
          history.replace('/interface-date-inscription');  });
      } else {
        toast.error('Veuillez remplir tous les champs.', {
            position: toast.POSITION.TOP_CENTER });
       } 
   }

      const changeNaissanceHandler = (event) => {
        setDateNaissance(event.target.value);
    }

    function HandlerAnnuler() {
      setDateNaissance('')
    }

  function Retour(){
    history.replace('/interface-admin'); 
    // onClick={ () => Retour()}
}
   
    return (
        <div style={{ backgroundColor: "" }}> <HeaderAdmin />
            <div className="container"> <br /><br />
                <div className="row">
                    <div className="card col-md-7 offset-md-2 offset-md-3"> <br />

                        <h3 className='text-center'>La date d'inscription</h3>
                        <div className='card-body'>

                            <form>
                                <div className="form-group row">
                                    <label style={{ whiteSpace: "nowrap" }} className="col-sm-3 col-form-label">Date d'inscription :</label>
                                    <div className="col-sm-9">
                                        <input type='date' placeholder="La date de naissance" className="form-control"
                                            value={dateNaissance} onChange={changeNaissanceHandler} required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-5 offset-sm-8" >
                                        <button className="btn btn-success" onClick={saveDate}>Enregistrer</button>
                                         <button className="btn btn-danger" onClick={HandlerAnnuler} style={{ marginLeft: "5px" }}>Annuler</button>
                                    </div>
                                </div>
                            </form>
                            </div>  </div> </div>
                            <br/>
        <table className='table table-striped table-bordered' style={{width:"80%", marginLeft:"15%"}}>
          <thead >
            <tr>
            <th className='text-center'> ID </th>
              <th className='text-center'>Date d'inscription</th>
              <th className='text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
   {date.length === 0 ? (
    <tr>
      <td colSpan="3" className="text-center">
        Aucun Date d'inscription disponible
      </td>
    </tr>
  ) : ( 
            date.map(etu =>
                <tr key={etu.id} className='text-center'>
                  <td>{etu.id}</td>
                  <td>{etu.dateInscreption}</td>

                  <td>
                    <EditOutlined style={{color: "green" , cursor: 'pointer', marginLeft:"1px" , fontSize: '22px'  }}
                      onClick={() => ModifierDate(etu.id)}
                    />
                    <DeleteOutlined
                      onClick={() => DeleteDate(etu.id)}
                      style={{ color: "red",  cursor: 'pointer' , marginLeft:"8px" , fontSize: '22px' }}
                    />
                  </td>

                </tr>
              ))
            }
          </tbody>
        </table>
              <div className="form-group row">
                    <div className="col-sm-4 offset-sm-10" >
                    <div onClick={ () => Retour()}>
                        <button style={{width:"30%", fontSize:"110%"}} className="btn btn-info">Retour</button> </div>                          
                      </div>
                </div>

            </div>
            <br /> <br /><br />
        </div>
    );


}

export default InterfaceDateInscription;