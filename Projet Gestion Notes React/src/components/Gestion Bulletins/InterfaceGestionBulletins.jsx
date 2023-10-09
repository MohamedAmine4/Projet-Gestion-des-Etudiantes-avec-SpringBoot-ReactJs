// InterfaceGestionBulletins  // <fieldset style={{ border: '1px solid blue' }}>

import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import noteService from '../../services/NoteService';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPrint } from '@fortawesome/free-solid-svg-icons';
// import { FaPrint } from 'react-icons/fa';
// import PrintIcon from '@material-ui/core';
import iconImprimerPDF from '../../components/images/imprimerPDF_icon.png'
import etudiantService from '../../services/EtudiantService';

const InterfaceGestionBulletins = (props) => {

  const [selectedYear, setSelectedYear] = useState(null);
  const [notes, setNotes] = useState([]);
  const [etudiantsMemeFiliere, setEtudiantsMemeFiliere] = useState([]);

  const cinEtud = props.match.params.CinStudent
  // const cinEtud = 'AB123456'  // Pour le teste 

//---------------------- 1-La Moyenne de chaque annee : --------------------------------------------------------------
  const [moyenneAnnee, setMoyenneAnnee] = useState(null);
  const calculateMoyenneAnnee = (studentCIN, year) => {
    // Filtrer les notes de l'étudiant pour l'année donnée
    const filteredNotes = notes.filter(
      (note) => note.etudiant.cin === studentCIN && note.module.niveauScolaire.designation === year );
    // Calculer la somme des moyennes des modules
    const sum = filteredNotes.reduce((total, note) => total + note.moyenne, 0);
    // Calculer la moyenne en divisant la somme par le nombre de modules
    const average = sum / filteredNotes.length;  
            return average;
  };

  //---------------------- 1-La Moyenne de chaque annee tous les etudiants : --------------------------------------------------------------
  const [notesTousEtud, setNotesTousEtud] = useState([]);
  useEffect(() => {
    noteService.getNotesNormale().then((reponse) => {
      setNotesTousEtud(reponse.data);
      setSelectedYear(selectedYear);  });
   
    }, [selectedYear]);   

  const calculateMoyenneAnneeTousEtud = (studentCIN, year) => {
    // Filtrer les notes de l'étudiant pour l'année donnée
    const filteredNotes = notesTousEtud.filter(
      (note) => note.etudiant.cin === studentCIN && note.module.niveauScolaire.designation === year );
    // Calculer la somme des moyennes des modules
    const sum = filteredNotes.reduce((total, note) => total + note.moyenne, 0);
    // Calculer la moyenne en divisant la somme par le nombre de modules
    const average = sum / filteredNotes.length;  

            return average;
  };
//---------------------- 1-Le Classement de chaque etudiant d'une filiere : --------------------------------------------------------------
  const [classement, setClassement] = useState(null);
  const [noteMajorante, setNoteMajorante] = useState(null);
  const [noteMinorante, setNoteMinorante] = useState(null);
  const [moyennePromotion, setMoyennePromotion] = useState(null);

  const calculateClassement = (year) => {
    // Calculer la moyenne de chaque étudiant pour cette année
    const moyennes = etudiantsMemeFiliere.map((etudiant) => {
      const average = calculateMoyenneAnneeTousEtud(etudiant.cin, year);
      return { etudiant, moyenneAnnee: average };  });
  
    // Trier les étudiants en fonction de leur moyenne (du plus élevé au plus bas)
    const classement = moyennes.sort((a, b) => b.moyenneAnnee - a.moyenneAnnee);

  // Trouver la note maximale parmi toutes les notes
  const maxNote = Math.max(...moyennes.map((note) => note.moyenneAnnee));
  setNoteMajorante(maxNote);

  // Trouver la note minimale parmi toutes les notes
  const minNote = Math.min(...moyennes.map((note) => note.moyenneAnnee));
  setNoteMinorante(minNote);

  // Trouver la moyenne de la promotion parmi toutes les notes de la meme Filiere
  const moyennePromo = classement.reduce((total, etudiant) => total + etudiant.moyenneAnnee, 0) / classement.length;
  setMoyennePromotion(moyennePromo);

        //  console.log(JSON.stringify(classement));
    return classement;
  };
//------------------------------------------------------------------------------------------------------------------
  const [niveauScoDesignation, setNiveauScoDesignation] = useState([]);
  useEffect(() => {
    if (notes.length > 0) {
      const niveauDesignations = notes.map((note) => note.module.niveauScolaire.designation);
      setNiveauScoDesignation(niveauDesignations);
    }
  }, [notes]);

  useEffect(() => {
    noteService.getNotesNormaleByCinEtu(cinEtud).then((reponse) => {
      setNotes(reponse.data);
      setSelectedYear(selectedYear);  

    const notesData = reponse.data;
 // Récupérer tous les étudiants qui ont la même filière :
     const codeFili = notesData.length > 0 ? notesData[0].module.niveauScolaire.filiere.codeFil : null;
     etudiantService.getAllEtudiantsByCodeFil(codeFili).then((reponse) => {
      setEtudiantsMemeFiliere(reponse.data);
    });  });
  }, [selectedYear, classement, cinEtud]);


  const handleYearButtonClick = (year) => {
    setSelectedYear(year);

// Calculer la moyenne d'année pour chaque étudiant : 
  //const studentId = notes.length > 0 ? notes[0].etudiant.cin : null; 
      const average = calculateMoyenneAnnee(cinEtud, year); 
      setMoyenneAnnee(average);

// Le Classement de chaque etudiant d'une Filiere :  
    const ranking = calculateClassement(year);
    setClassement(ranking);
  };

  const renderResultsTable = () => {
    if (selectedYear === null) {
      return null;
    }

    const filteredNotes = notes.filter(
      (note) => note.module.niveauScolaire.designation === selectedYear
    );

    return (
      <Table bordered striped hover>
        <thead>
          <tr>
            <th>Module</th>
            <th>Résultat</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {filteredNotes.map((note) => ( note.module.niveauScolaire.designation===selectedYear &&
            <tr key={note.etudiant.cin}>
              <td>{note.module.nomMod}</td>
              <td>{note.resultat}</td>
              <td>{note.moyenne}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  const renderYearAnnouncement = (year) => {
    return (
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '17px', border: '1px solid lightgray', padding: '3px' }}>
        Les relevés de notes de la {year}
         <img src={iconImprimerPDF} style={{ marginLeft: '30px' , width:"6%" }} alt="Imprimer PDF"/>
      </div>
    );
  };

  const getResultat = (moyenne) => {
    if (moyenne >= 10 && moyenne <= 20) {
      return 'Valider';
    } else {
      return 'Non-Valider';
    }
  };

  return (
<div>
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <div style={{ marginLeft: '2%' }}>
        <br />

        <div className="row">
          <div className="col-3">
              <table className="table"> 
                <tbody>
                  <tr>
                    <td>Nom :</td>
                    <td>{notes.length > 0 && notes[0].etudiant.nom}</td>
                  </tr>
                  <tr>
                    <td>Prénom :</td>
                    <td>{notes.length > 0 && notes[0].etudiant.prenom}</td>
                  </tr>
                  <tr>
                    <td>CIN :</td>
                    <td>{notes.length > 0 && notes[0].etudiant.cin}</td>
                  </tr>
                  <tr>
                    <td>Niveau :</td>
                    <td>{notes.length > 0 && notes[0].module.niveauScolaire.filiere.niveau.designation}</td>
                  </tr>
                  <tr>
                    <td>Filière :</td>
                    <td>{notes.length > 0 && notes[0].module.niveauScolaire.filiere.designation}</td>
                  </tr>
                </tbody> 
              </table>
          </div>
          <div className="col-2">
            <br /> <br /> <br /> <br /> <br /> <br /> 
            <div style={{ marginBottom: '20px' }}>
              <Button variant="secondary" className='w-100' onClick={() => handleYearButtonClick('1ère année')}>
                1ère année
              </Button>
            </div>
   {niveauScoDesignation.includes('2ème année') && ( // Vérifier si le niveau contient la 2ème année     
            <div>
              <Button variant="secondary" className='w-100' onClick={() => handleYearButtonClick('2ème année')}>
                2ème année
              </Button>
            </div> )}
          </div>
          <div className="col-7">
            {/* <h4>Resultats</h4> */}
            <div style={{ backgroundColor: '', marginTop: '15px' }}>
            {selectedYear && renderYearAnnouncement(selectedYear)}  </div>
            <div style={{ backgroundColor: 'lightgray', marginTop: '22px' }}>
              {renderResultsTable()}
            </div>

{ selectedYear && (
<div>
      <div style={{ backgroundColor: 'light', fontWeight: 'bold', border: '1px solid lightgray', marginTop: '20px', padding: '20px' }}>
          <div> <i  style={{marginLeft:"3%", marginRight:"1%" }}>Moyenne d'année : </i> <span style={{color:"#008080"}}>{moyenneAnnee && moyenneAnnee.toFixed(3)}</span>
                <i style={{marginLeft:"7%", marginRight:"1%"}}>Résultat : </i> <span style={{color:"#008080"}}>{moyenneAnnee && getResultat(moyenneAnnee)}</span>
                <i style={{marginLeft:"10%", marginRight:"1%"}}>Classement : </i> {classement && classement.map((item, index) => ( item.etudiant.cin === cinEtud && <span style={{color:"#008080"}} key={index}>{`${index + 1}`} </span> ))}
          </div>
      </div>

      <div style={{ backgroundColor: 'light', fontWeight: 'bold', border: '1px solid lightgray', marginTop: '10px', padding: '20px' }}>
          <div> <i  style={{marginLeft:"0%" }}>Note majorante : </i> <span style={{color:"#008080"}}>{noteMajorante.toFixed(3)}</span>
                <i style={{marginLeft:"3%"}}>Note minorante : </i> <span style={{color:"#008080"}}>{noteMinorante && noteMinorante.toFixed(3)}</span>
                <i style={{marginLeft:"3%"}}>Moyenne de la promotion : </i> <span style={{color:"#008080"}}>{moyennePromotion.toFixed(3)}</span>
          </div>
      </div>
  </div>
 )}
          </div>
        </div>
      </div>
<br/> <br/>
    </div>

</div>
  );
};

export default InterfaceGestionBulletins;





/*

//==================================================================================================================

  const [moyenneAnnee1, setMoyenneAnnee1] = useState(null);
  const [moyenneAnnee2, setMoyenneAnnee2] = useState(null);
  const [downloadReady, setDownloadReady] = useState(false);
//---------------------------- Les notes Finales ------------------------------------------------------
  const MyDocumentsFinale = () => {
    const filteredNotes = notes.filter(
      (note) =>
        note.etudiant.cin === cinEtud &&
        note.module.niveauScolaire.designation === "1ère année"
    );
  
    const calculateMoyenneAnnee1 = (studentCIN) => {
      // Calculer la somme des moyennes des modules
      const sum = filteredNotes.reduce((total, note) => total + note.moyenne, 0);
      // Calculer la moyenne en divisant la somme par le nombre de modules
      const average = sum / filteredNotes.length;
      return average;
    };
  
    const average1 = calculateMoyenneAnnee1(cinEtud);
    setMoyenneAnnee1(average1);
  
    const filteredNotes2 = notes.filter(
      (note) =>
        note.etudiant.cin === cinEtud &&
        note.module.niveauScolaire.designation === "2ème année"
    );
    const calculateMoyenneAnnee2 = (studentCIN) => {
      // Calculer la somme des moyennes des modules
      const sum = filteredNotes2.reduce((total, note) => total + note.moyenne, 0);
      // Calculer la moyenne en divisant la somme par le nombre de modules
      const average = sum / filteredNotes2.length;
      return average;
    };
  
    const average2 = calculateMoyenneAnnee2(cinEtud);
    setMoyenneAnnee2(average2);
  
    const getCurrentDate = () => {
      const today = new Date();
      const options = { "1er Années": "numeric", month: "long", day: "numeric" };
      return today.toLocaleDateString("fr-FR", options);
    };
  
    const getCurrentYear = () => {
      const currentYear = new Date().getFullYear();
      const nextYear = currentYear + 1;
      return `${currentYear}/${nextYear}`;
    };
  
    const doc = new jsPDF();

    // Ajouter l'image
    // const imgData = "https://images.wakelet.com/resize?id=iU9AMKz6tnH5g8tCpV3_8&h=768&w=768&q=85#";
    const imgData = imgLogoEPG
    doc.addImage(imgData, "JPEG", 25, 3, 155, 35, null, null, null, null, null, null, {
      // marginBottom: 30,
      // width: 85,
      // height: 75,
      // alignSelf: 'center',
    });
  
    // Informations personnelles
    doc.setFontSize(8);
    doc.text("Année : " + getCurrentYear(), 150, 40, "center");
    doc.setFontSize(13);
    doc.text("Consulter les Notes", 100, 35 ,"center");
  
    doc.setFontSize(10);
    doc.text("M. (Mme) :", 13, 40);
    doc.text(
      filteredNotes.length > 0 &&
        filteredNotes[0].etudiant.prenom +
          " " +
          filteredNotes[0].etudiant.nom,
      31,
      40
    );
  
    doc.text("CIN :", 13, 44);
    doc.text(filteredNotes.length > 0 && filteredNotes[0].etudiant.cin, 23, 44);
  
    doc.text("Niveau :", 13, 48);
    doc.text(
      filteredNotes.length > 0 &&
        filteredNotes[0].module.niveauScolaire.filiere.niveau.designation,
      28,
      48
    );
  
    doc.text("Filière :", 70, 48);
    doc.text(
      filteredNotes.length > 0 &&
        filteredNotes[0].module.niveauScolaire.filiere.designation,
      85,
      48
    );
  const tableData1 = [
    ["Année", "Module", "Note", "Résultat"],
    ...filteredNotes.map((note) => [
      "1er Années",
      note.module.nomMod,
      note.moyenne + "/20",
      note.resultat,
    ]),
    ["", "", "", ""],
    ...(filteredNotes2.length > 0
      ? filteredNotes2.map((note) => [
          "2eme Année",
          note.module.nomMod,
          note.moyenne + "/20",
          note.resultat,
        ])
      : []),
  ];

  doc.setFontSize(10); // Réduire la taille de la police pour les cellules de la table

  doc.autoTable({
    startY:53,
    head: [tableData1[0]],
    body: tableData1.slice(1),
    styles: {
      font: "helvetica",
      fontSize: 10,  // Réduire la taille de la police pour l'en-tête de la table
      cellPadding: 5,
      lineColor: "#000",
      lineWidth: 0.1,
    },
    headStyles: {
      fillColor: "#ccc",
    },
    columnStyles: {
      0: { cellWidth: 50, cellHeight: 10 },
    1: { cellWidth: 40, cellHeight: 10 },
    2: { cellWidth: 40, cellHeight: 10 },
    3: { cellWidth: 40, cellHeight: 10},
    },
     
  });
try {
  doc.setFontSize(10);
  doc.text(
    "Moyenne du 1er Années scolaire :",
    13,
    doc.previousAutoTable.finalY + 7
  );
  doc.text(
    moyenneAnnee1 && moyenneAnnee1.toFixed(3),
    68,
    doc.previousAutoTable.finalY + 7
  );

  doc.text("Résultat du Niveau Scolaire :", 110, doc.previousAutoTable.finalY +7);
  doc.text(
    moyenneAnnee1 && getResultat(moyenneAnnee1),
    160,
    doc.previousAutoTable.finalY + 7
  );
  if(filteredNotes2.length > 0){
  doc.setFontSize(10);
  doc.text(
    "Moyenne du 2eme Années scolaire :",
    13,
    doc.previousAutoTable.finalY + 12
  );
  doc.text(
    moyenneAnnee2 && moyenneAnnee2.toFixed(3),
    70,
    doc.previousAutoTable.finalY + 12
  );

  doc.text("Résultat du Niveau Scolaire :", 110, doc.previousAutoTable.finalY + 12);
  doc.text(
    moyenneAnnee2 && getResultat(moyenneAnnee2),
    160,
    doc.previousAutoTable.finalY + 12
  );

  const moyenneFinale = (moyenneAnnee2 + moyenneAnnee1) / 2;
  doc.setFontSize(11);
  doc.text(
    "Moyenne Finale :",
    13,
    doc.previousAutoTable.finalY + 18
  );
  doc.text(
    moyenneFinale && moyenneFinale.toFixed(3),
    45,
    doc.previousAutoTable.finalY + 18
  );

  doc.text("Résultat Finale:", 110, doc.previousAutoTable.finalY + 18);
  doc.text(
    moyenneFinale && getResultat(moyenneFinale),
    150,
    doc.previousAutoTable.finalY + 18
  );


   // Ajouter la date
  
  }  doc.setFontSize(10);
  doc.text(
    "Fés le: " + getCurrentDate(),
    198,
    doc.internal.pageSize.getHeight() - 5,
    "right"
  );
  // Télécharger le PDF
  
  doc.save("notes Finale.pdf");
      setDownloadReady(true);
      console.log(downloadReady);
    } catch (error) {
  // Gérer l'erreur ici
  window.alert("Veuillez patienter. Votre PDF En cours De chargement :");
  setTimeout(() => {
    window.alert("Vous pouvez maintenant télécharger votre PDF !");
  }, 4500);
  
}
  };

  const downloadPDF = () => {
    setTimeout(() => {
      MyDocumentsFinale();
    }, 700);
};


*/