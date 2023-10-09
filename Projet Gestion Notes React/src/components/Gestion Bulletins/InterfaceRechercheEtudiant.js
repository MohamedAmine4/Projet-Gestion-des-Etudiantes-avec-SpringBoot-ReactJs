import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import etudiantService from '../Gestion Etudiants/EtudiantService';
import HeaderAdmin from '../../Header and Footer/HeaderAdmin';
import { useHistory } from 'react-router-dom';

function InterfaceRechercheEtudiant() {

  const history = useHistory();

const [CINRecherche, setCINRecherche] = useState('');

    const [formIsValid, setFormIsValid] = useState(false);
    useEffect(() => {
        setFormIsValid(
            CINRecherche !== ''   );
        }, [CINRecherche]);

  // -----------------------------------------------------------------------------------------------------------
  function rechercherEtudiantParCIN() {
    if ( formIsValid) {
             // Vérifier si le CIN existe déjà
             let cinExists=[];
             etudiantService.getEtudiantById(CINRecherche).then(res => { cinExists=res.data ; 
             if (cinExists.cin === CINRecherche) {
                // window.location.href = `/gestion-bulletins-test/${CINRecherche}`;
                history.replace(`/gestion-bulletins-test/${CINRecherche}`);
            } else {
                toast.error('Cet Etudiant avec CIN '+ CINRecherche +" n'existe pas dans la base de données.", {
                    position: toast.POSITION.TOP_CENTER });
            } }); 

    } else {
        toast.error('Veuillez remplir tous les champs.', {
            position: toast.POSITION.TOP_CENTER });
    } 
  }

  function reinitialiserPage(){
    setCINRecherche('');
   // history.replace("/recherche-etudiant-bulletin"); 
}

function Retour(){
  history.replace('/interface-admin'); 
  // onClick={ () => Retour()}
}


  return (<div> <HeaderAdmin />
<br /><br />
<div className='container'>

{/* // ----------- La barre de rechereche : --------------------------------------------------------- */}
<div className="form-group">     
        <label htmlFor="search" style={{marginLeft: "4%", fontWeight: 'bold', color:"#008080"}}>CIN : </label>
        <input type="text" className="form-control col-sm-6" id="search" placeholder="------------- Entrez CIN  -------------------------" 
            value={CINRecherche}    onChange={(e) => setCINRecherche(e.target.value)} style={{ display: "inline-block", marginLeft: "1%" }} /> 
          <button className="btn btn-primary" onClick={rechercherEtudiantParCIN} style={{ display: "inline-block", marginLeft: "1%" }}> Rechercher </button>
          <button style={{marginLeft:"1%"}} className="btn btn-primary" onClick={reinitialiserPage} > Réinitialiser </button>
      </div>
{/* // --------------------------------------------------------------------------------------------- */}

            <div className="form-group row">
                    <div className="col-sm-4 offset-sm-8" >
                    <div onClick={ () => Retour()}>
                        <button style={{width:"30%", fontSize:"110%"}} className="btn btn-info">Retour</button> </div>                          
                      </div>
                </div>

  </div> 
</div>
  )
}
export default InterfaceRechercheEtudiant;