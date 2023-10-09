// import React, { useState, useEffect } from 'react'
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
// import sectionFilierService from "./SectionFilierService"
// function Module(props) {
//   const [section, setCodeSec] = useState('');
//   const [codeNiv, setCodeNiv] = useState('');
//   const [codeFil, setCodeFil] = useState('');
 
//   //importer les donnes de niveau
//   useEffect(() => {
//     sectionFilierService.getSectionFilierById(props.match.params.id).then(res => {
    
//       let module = res.data;
//       setCodeSec(module.codeCodeSec);
//       setCodeFil(module.codeFil);
//       setCodeNiv(module.filier.niveau.codeNiv)
//     });
//   }, [props.match.params.codeMod]);
//   const ModifierModule = (e) => {
//     e.preventDefault();

//     let module = {
//       codeMod, nbTps, nbControles, nbExams, coeffTps, coeffControles, coeffExams, nomMod, codeNiv,
//       codeFil, codeNiSco
//     };

//     try {
//       moduleService.updateModule(module, props.match.params.codeMod)
//         .then(res => {
//           window.alert('module modifié avec succès.');
//           window.location.href = '/GestModule';
//         })
//         .catch(error => {
//           console.error('Une erreur s\'est produite lors de la modification de module :', error);
//         });
//     } catch (error) {
//       console.error('Une erreur s\'est produite lors de la modification de module:', error);
//     }
//   }


//   //Modifier les donnes 



//   return (<div> <HeaderAdmin />
//     <div className="container"> <br /><br />
//       <div className="row">
//         <div className="card col-md-7 offset-md-2 offset-md-3"> <br />
//           <h3>Modifier Module</h3>
//           <div className='card-body'>
//             <form>
//               <div className="form-group row">
//                 <label className="col-sm-3 col-form-label">Niveau :</label>
//                 <div className="col-sm-9">
//                 <select
//   className="form-control"
//   id="Selector"
//   placeholder="Niveau"
//   name="niveau"
//   value={codeNiv}
//   onChange={(e) => setCodeNiv(e.target.value)}
// >
//   <option value={codeNiv}>{codeNiv}</option>
// </select>

//                 </div></div><br />
//               <div className="form-group row">
//                 <label className="col-sm-3 col-form-label">Filier :</label>
//                 <div className="col-sm-9">
//                   <select
//                     className="form-control"
//                     id="Selectorfil"
//                     placeholder="Filier"
//                     name="filier"
//                     value={codeFil}
//                     onChange={(e) => setCodeFil(e.target.value)}
//                   >
//                     <option value={codeFil}>{codeFil}</option>

//                   </select> </div></div><br />
//               <div className="form-group row">
//                 <label className="col-sm-3 col-form-label">Niveau Scolaire :</label>
//                 <div className="col-sm-9">
//                 <select
//   className="form-control"
//   id="Selectore"
//   placeholder="NiveauScolaire"
//   name="NiveauScolaire"
//   value={codeNiSco}
//   onChange={(e) => setCodeNivSco(e.target.value)}
// >
//   <option value={codeNiSco}>{codeNiSco}</option>
// </select>
//  </div></div><br />
//               <div className="form-group row">
//                 <div className="col-sm-5 offset-sm-8" >
//                   <button className="btn btn-success" onClick={ModifierModule}>Enregistrer</button>
//                   <button className="btn btn-danger" style={{ marginLeft: "5px" }} ><Link to="/GestModule" style={{ color: 'white', textDecoration: 'none' }}> Annuler </Link> </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div><br />
//     <br />
//     <Link to="/Etude"> <Button className="primary" style={{ position: 'relative', left: '44rem' }}>Retour</Button></Link>
//   </div>
//   )
// }
// export default Module;