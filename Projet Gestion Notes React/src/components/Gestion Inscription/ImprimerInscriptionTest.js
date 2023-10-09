import React, { useState, useEffect, useRef  } from 'react';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import inscreptionService from './InscreptionService';
import imgLogoEPG from '../images/logo.png';
import { useHistory } from 'react-router-dom';

function ImprimerInscriptionTest(props) {
  const [cin, setCin] = useState('');
  const [codeNiv, setCodeNiv] = useState('');
  const [codeFil, setCodeFil] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [nom, setNom] = useState('');

  const history = useHistory();

  const printRef = useRef();

  useEffect(() => {
    inscreptionService.getInscreptionById(props.match.params.cin).then(res => {
      let inscreption = res.data;
      setCin(inscreption.cin);
      setNom(inscreption.nom);
      setPrenom(inscreption.prenom);
      // Convertir la date de naissance en objet de type Date
      const dateNaissanceObj = new Date(inscreption.dateNaissance);
      // Formater la date dans le format ISO
      const dateNaissanceISO = moment(dateNaissanceObj).format('YYYY-MM-DD');
      setDateNaissance(dateNaissanceISO);
      setCodeNiv(inscreption.filier.niveau.designation);
      setCodeFil(inscreption.filier.designation);
    });
  }, [props.match.params.cin]);

  const getCurrentDate = () => {
    const today = moment().format('D MMMM YYYY');
    return today;
  };

  const getCurrentYear = () => {
    const currentYear = moment().format('YYYY');
    const nextYear = parseInt(currentYear, 10) + 1;
    return `${currentYear}/${nextYear}`;
  };

  function Retour(){
    history.replace('/interface-user'); 
    // onClick={ () => Retour()}
  }

  
  return (

    <div >
    <div ref={printRef} style={{ backgroundColor: "" }}> <br/>
      <div className="container">

        <div className="row">
          <div className="card col-md-7 offset-md-2 offset-md-3">
            <br />

            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
              <img
                // src="https://images.wakelet.com/resize?id=iU9AMKz6tnH5g8tCpV3_8&h=768&w=768&q=85#"
                alt="Logo"
                src={imgLogoEPG}
                style={{ marginBottom: "0rem", width: "35rem", height: '11rem' }}
              />  <br/> 
              <h3 style={{ marginBottom: 0 }}>Attestation d'inscription</h3>
            </div>

            <br /><br /><br />

            <div style={{ display: "flex", alignItems: "center" }}>
              <h5 style={{marginLeft:"7%"}}>Mr (elle) : </h5>
              <span style={{marginLeft:"2%"}}> <b> {prenom} {nom} </b> </span>
            </div><br />

            <div style={{ display: "flex", alignItems: "center" }}>
              <h5 style={{marginLeft:"7%"}}>Né (e) le : </h5>
              <span style={{marginLeft:"2%"}}> <b>{dateNaissance}</b></span>
            </div><br />

            <div style={{ display: "flex", alignItems: "center" }}>
              <h5 style={{marginLeft:"7%"}}>CIN :</h5>
              <span style={{marginLeft:"2%"}}> <b>{cin}</b></span>
            </div><br />

            <div style={{ display: "flex", alignItems: "center" }}>
              <h5 style={{marginLeft:"7%"}}>Est inscrit(e) au titre de l'année d'étude :</h5>
              <span style={{marginLeft:"2%"}}><b>{getCurrentYear()}</b></span>
            </div><br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <h5 style={{marginLeft:"7%"}}>Niveau :</h5>
              <span style={{marginLeft:"2%"}}><b>{codeNiv}</b></span>
            </div><br />

            <div style={{ display: "flex", alignItems: "center" }}>
              <h5 style={{marginLeft:"7%"}}>Filière : </h5>
              <span style={{marginLeft:"2%"}}><b>{codeFil}</b></span>
            </div><br />

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <h5 style={{ marginLeft: "auto" }}>Fés le : </h5>
              <span style={{marginLeft:"2%"}}><b>{getCurrentDate()}</b></span>
            </div><br />

            </div>
        </div>
      </div>
      <br />
    </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
            <Button className="btn btn-success" onClick={() => window.print()}>Imprimer</Button>
            <div onClick={ () => Retour()}>
                        <button style={{width:"120%", fontSize:"110%", marginLeft:"30%"}} className="btn btn-info">Retour</button> </div> 
            </div>

    
   <br />  <br />
</div>
  );
}

export default ImprimerInscriptionTest;
