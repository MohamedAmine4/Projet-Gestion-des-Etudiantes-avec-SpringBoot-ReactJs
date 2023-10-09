import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import iconImprimerPDF from '../../components/images/imprimerPDF_icon.png'
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import noteService from '../../services/NoteService';
import etudiantService from '../../services/EtudiantService';
import imgLogoEPG from '../../components/images/logo.png'
import HeaderEtudiant from '../../Header and Footer/HeaderEtudiant';

const InterfaceConsulterBulletinsEtud = () => {

  const [selectedYear, setSelectedYear] = useState(null);
  const [notes, setNotes] = useState([]);
  const [etudiantsMemeFiliere, setEtudiantsMemeFiliere] = useState([]);

   // Pour le test : CIN d'Etudiant :
  //  const cinEtud = 'AS12345' ;
   const cinEtud = localStorage.getItem('cinEtudiant'); // Récupérer le CIN depuis le localStorage ;

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

//---------------------------- Les notes Finales ------------------------------------------------------
const MyDocumentsFinale = () => {
 //----------------page 1 du PDF --------------------------------------------------  
 const moyenne_1ereAnnee = calculateMoyenneAnnee(cinEtud, "1ère année"); 
  const filteredNotes = notes.filter(
    (note) => note.etudiant.cin === cinEtud && note.module.niveauScolaire.designation === "1ère année"
  );

  const getCurrentDate = () => {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString("fr-FR", options);
  };

  const getCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    return `${currentYear}/${nextYear}`;
  };

  const doc = new jsPDF();

  // Ajouter l'image
  const imgData = imgLogoEPG
  doc.addImage(imgData, "JPEG", 25, 0, 155, 35, null, null, null, null, null, null, {});

  // Informations personnelles
  doc.setFontSize(11);
  doc.text("Année universitaire : " + getCurrentYear(), 165, 60, "center");
  doc.setFontSize(18);
  // doc.setFontType("bold");
  doc.text("RELEVE DE NOTES" , 105, 50, "center");

  doc.setFontSize(13);
  doc.text("M. (Mme) :", 30, 75);
  doc.text(
    filteredNotes.length > 0 &&
      filteredNotes[0].etudiant.nom +
        " " +
        filteredNotes[0].etudiant.prenom,
    55,
    75
  );

  doc.text("CIN :", 30, 83);
  doc.text(filteredNotes.length > 0 && filteredNotes[0].etudiant.cin, 45, 83);

  doc.text("Niveau :", 30, 91);
  doc.text(
    filteredNotes.length > 0 &&
      filteredNotes[0].module.niveauScolaire.filiere.niveau.designation,
    50,
    91
  );

  doc.text("Filière :", 30, 99);
  doc.text(
    filteredNotes.length > 0 &&
      filteredNotes[0].module.niveauScolaire.filiere.designation,
    48,
    99
  );

  doc.text("Les relevés de notes de la 1ère année " , 60, 110);
 
  // Tableau des notes
  const tableData = [
    ["Module", "Note", "Résultat"],
    ...filteredNotes.map((note) => [
      note.module.nomMod,
      note.moyenne + "/20",
      note.resultat,
    ]),

  ];

  doc.autoTable({
    startY: 117,
    head: [tableData[0]],
    body: tableData.slice(1),
    styles: {
      font: "helvetica",
      fontSize: 10,
      cellPadding: 2,
      lineColor: "#000",
      lineWidth: 0.1,
    },
    headStyles: {
      fillColor: "#ccc",
    },
    autoSize: true, // Ajout de cette ligne
  });

  doc.setFontSize(13);
  const lastTableLineY = doc.previousAutoTable.finalY; 
  doc.text("Moyenne du 1ère année : ", 19, lastTableLineY + 10, );
  doc.text( moyenne_1ereAnnee && moyenne_1ereAnnee.toFixed(3), 75, lastTableLineY + 10, );
  doc.text("Résultat du 1ère année : ", 19, lastTableLineY + 18,);
  doc.text( moyenne_1ereAnnee  && getResultat(moyenne_1ereAnnee), 73, lastTableLineY + 18, );

  //-------------- Page 2 du PDF -------------------------------------------------------
   // Nouvelle page
   doc.addPage();

   const moyenne_2emeAnnee = calculateMoyenneAnnee(cinEtud, "2ème année"); 
  const filteredNotes2 = notes.filter(
    (note) => note.etudiant.cin === cinEtud && note.module.niveauScolaire.designation === "2ème année"
  );

  doc.text("Les relevés de notes de la 2ème année " , 60, 10);
 
  // Tableau des notes
  const tableData2 = [
    ["Module", "Note", "Résultat"],
    ...filteredNotes2.map((note) => [
      note.module.nomMod,
      note.moyenne + "/20",
      note.resultat,
    ]),

  ];

  doc.autoTable({
    startY: 17,
    head: [tableData2[0]],
    body: tableData2.slice(1),
    styles: {
      font: "helvetica",
      fontSize: 10,
      cellPadding: 2,
      lineColor: "#000",
      lineWidth: 0.1,
    },
    headStyles: {
      fillColor: "#ccc",
    },
    // columnStyles: {
    //   0: { cellWidth: 80 },
    //   1: { cellWidth: 40 },
    //   2: { cellWidth: 50 }, },
    autoSize: true,
  });

  doc.setFontSize(13);
  const lastTableLineY2 = doc.previousAutoTable.finalY; 
  doc.text("Moyenne du 2ème année : ", 19, lastTableLineY2 + 10, );
  doc.text( moyenne_2emeAnnee && moyenne_2emeAnnee.toFixed(3), 75, lastTableLineY2 + 10, );
  doc.text("Résultat du 2ème année : ", 19, lastTableLineY2 + 18,);
  doc.text( moyenne_2emeAnnee && getResultat(moyenne_2emeAnnee), 73, lastTableLineY2 + 18, );

  doc.text("-----------------------------------------------------------------------------------------------------------------------------------------------", 0, lastTableLineY2 + 25, );
 
  const moyenneFiliere = ( moyenne_1ereAnnee + moyenne_2emeAnnee ) / 2 ;

  doc.text("Moyenne de la Filière : ", 19, lastTableLineY2 + 32, );
  doc.text( moyenneFiliere && moyenneFiliere.toFixed(3), 68,  lastTableLineY2 + 32, );
  doc.text("Résultat de la Filière : ", 19, lastTableLineY2 + 40,);
  doc.text( moyenneFiliere && getResultat(moyenneFiliere), 65, lastTableLineY2 + 40, );

  // Ajouter la date
  doc.setFontSize(11);
  doc.text("Fés le : " + getCurrentDate(), 180, lastTableLineY2 + 48, "right" );


  // Télécharger le PDF
  doc.save("notesFinales.pdf");
};

//---------------------------- Les notes de la 1ere annee / 2eme annee ------------------------------------------------------
  const MyDocuments = () => {
    const filteredNotes = notes.filter(
      (note) => note.etudiant.cin === cinEtud && note.module.niveauScolaire.designation === selectedYear
    );

    const getCurrentDate = () => {
      const today = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
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
    doc.addImage(imgData, "JPEG", 25, 0, 155, 35, null, null, null, null, null, null, {
      // marginBottom: 30,
      // width: 85,
      // height: 75,
      // alignSelf: 'center',
    });

    // Informations personnelles
    doc.setFontSize(11);
    doc.text("Année universitaire : " + getCurrentYear(), 165, 60, "center");
    doc.setFontSize(18);
    // doc.setFontType("bold");
    doc.text("RELEVE DE NOTES" , 105, 50, "center");

    doc.setFontSize(13);
    doc.text("M. (Mme) :", 30, 75);
    doc.text(
      filteredNotes.length > 0 &&
        filteredNotes[0].etudiant.nom +
          " " +
          filteredNotes[0].etudiant.prenom,
      55,
      75
    );

    doc.text("CIN :", 30, 83);
    doc.text(filteredNotes.length > 0 && filteredNotes[0].etudiant.cin, 45, 83);

    doc.text("Niveau :", 30, 91);
    doc.text(
      filteredNotes.length > 0 &&
        filteredNotes[0].module.niveauScolaire.filiere.niveau.designation,
      50,
      91
    );

    doc.text("Filière :", 30, 99);
    doc.text(
      filteredNotes.length > 0 &&
        filteredNotes[0].module.niveauScolaire.filiere.designation,
      48,
      99
    );
    doc.text("Niveau Scolaire :  "+ selectedYear , 30, 107);
   
    // Tableau des notes
    const tableData = [
      ["Module", "Note", "Résultat"],
      ...filteredNotes.map((note) => [
        note.module.nomMod,
        note.moyenne + "/20",
        note.resultat,
      ]),
            
    ];

    doc.autoTable({
      startY: 115,
      head: [tableData[0]],
      body: tableData.slice(1),
      styles: {
        font: "helvetica",
        fontSize: 10,
        cellPadding: 2,
        lineColor: "#000",
        lineWidth: 0.1,
      },
      headStyles: {
        fillColor: "#ccc",
      },
      // columnStyles: {
      //   0: { cellWidth: 80 },
      //   1: { cellWidth: 40 },
      //   2: { cellWidth: 50 }, },

      autoSize: true, // Ajout de cette ligne
    });

    doc.setFontSize(13);
    const lastTableLineY = doc.previousAutoTable.finalY;  // doc.internal.pageSize.getHeight() - 20
    doc.text("Moyenne du " + selectedYear + " : ", 19, lastTableLineY + 10, );
    doc.text( moyenneAnnee && moyenneAnnee.toFixed(3), 75, lastTableLineY + 10, );
    doc.text("Résultat du " + selectedYear + " : ", 19, lastTableLineY + 18,);
    doc.text( moyenneAnnee && getResultat(moyenneAnnee), 73, lastTableLineY + 18, );

    // Ajouter la date
    doc.setFontSize(11);
    doc.text("Fés le : " + getCurrentDate(), 180, lastTableLineY + 16, "right" );

    // Télécharger le PDF
    doc.save("notes.pdf");
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
  <div>        

  {niveauScoDesignation.includes('2ème année') && ( // Vérifier si le niveau contient la 2ème année    
    <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '16px', border: '2px solid lightgray', padding: '3px' }}>
              <span style={{marginLeft:"10%"}}> Les relevés de notes finales </span> 
      <Button  onClick={MyDocumentsFinale} style={{ marginLeft: '-80px', border: 'none', background: 'none', cursor: 'pointer' }}>
      <img src={iconImprimerPDF} style={{ width: '16%' }} alt="Imprimer PDF" /></Button>
    </div>  )}

    <div style={{marginTop:"1%", textAlign: 'center', fontWeight: 'bold', fontSize: '16px', border: '2px solid lightgray', padding: '3px' }}>
               <span style={{marginLeft:"10%"}}>  Les relevés de notes de la {year} </span> 
      <button onClick={MyDocuments} style={{ marginLeft: '-70px', border: 'none', background: 'none', cursor: 'pointer' }}>
        <img src={iconImprimerPDF} style={{ width: '18%' }} alt="Imprimer PDF" />
      </button>
    </div>

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
<div> <HeaderEtudiant />
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
              
              <Button variant="secondary" className='w-100'onClick={() => handleYearButtonClick('2ème année')} >
                2ème année
              </Button>
              
            </div> )}  
          </div>
          <div className="col-7">
            {/* <h4>Resultats</h4> */}
            <div style={{ backgroundColor: '', marginTop: '0px' }}>
            {selectedYear && renderYearAnnouncement(selectedYear)}  </div>
            <div style={{ backgroundColor: 'lightgray', marginTop: '18px' }}>
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

export default InterfaceConsulterBulletinsEtud;