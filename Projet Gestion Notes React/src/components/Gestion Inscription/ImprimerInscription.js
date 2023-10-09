import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import moment from 'moment';
import inscreptionService from './InscreptionService';
// import imgLogoEPG from '../images/logo.png'

// Définition du style pour le PDF
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    paddingTop: 35,
    paddingLeft: 35,
    paddingRight: 35,
    lineHeight: 1.5,
    flexDirection: 'column',
    alignItems: 'center', // Aligner le contenu au centre
  },
  section: {
    marginBottom: 10,
  },
  logo: {
    marginBottom: "1rem",
    width: "185rem",
    height: '175rem',
    alignSelf: 'center', // Aligner le logo au centre
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 'auto',
    marginRight: 'auto', // Aligner le titre au centre
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 15,
    marginRight: 30,
    textAlign: 'left', // Aligner les labels à gauche
  },
  value: {
    marginBottom: 10,
  },
  dateLabel: {
    marginLeft: 'auto',
    fontWeight: 'bold',
  },
  dateValue: {
    marginBottom: 5,
    marginLeft: 19,
  },
  nameLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 11,
    marginRight: 30,
  },
});

function ImprimerInscription(props) {
  const [cin, setCin] = useState('');
  const [codeNiv, setCodeNiv] = useState('');
  const [codeFil, setCodeFil] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [nom, setNom] = useState('');

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

  // Composant PDF
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
        <View style={{ alignItems: 'center' }}>
  <Image
    style={styles.logo}
    src="https://images.wakelet.com/resize?id=iU9AMKz6tnH5g8tCpV3_8&h=768&w=768&q=85#"
      // src={imgLogoEPG}
  />
  <Text style={styles.heading}>
  {'\n'} 
    <Text>Attestation d'inscription</Text>
    {'\n'} {/* Ajouter une ligne de saut */}
  </Text>
</View>

<View style={{ flexDirection: 'row' }}>
  <Text style={[styles.label, { marginRight: 0 }]}>Mr (elle) :  </Text>
  <Text style={styles.nameLabel}> { prenom} { nom} </Text>
</View>
<View style={{ flexDirection: 'row' }}>
  <Text style={[styles.label, { marginRight: 0 }]}>Né(e) le :  </Text>
  <Text style={styles.nameLabel}>{ dateNaissance}</Text>
</View>
<View style={{ flexDirection: 'row' }}>
  <Text style={[styles.label, { marginRight: 0 }]}>CIN :  </Text>
  <Text style={styles.nameLabel}>{ cin}</Text>
</View>
<View style={{ flexDirection: 'row' }}>
  <Text style={[styles.label, { marginRight: 0 }]}>Est inscrit(e) au titre de l'année d'étude :  </Text>
  <Text style={styles.nameLabel}>{ getCurrentYear()}</Text>
</View>
<View style={{ flexDirection: 'row' }}>
  <Text style={[styles.label, { marginRight: 0 }]}>Niveau :  </Text>
  <Text style={styles.nameLabel}>{ codeNiv}</Text>
</View>
<View style={{ flexDirection: 'row' }}>
  <Text style={[styles.label, { marginRight: 0 }]}>Filière :  </Text>
  <Text style={styles.nameLabel}>{ codeFil}</Text>
</View>
<View style={{ flexDirection: 'row', justifyContent: 'flex-end'  }}>
  <Text style={[styles.datelabel, { marginRight: 0 }]}>Fés le :  </Text>
  <Text style={styles.nameLabel}>{ getCurrentDate()}</Text>
</View>
          
        </View>
      </Page>
    </Document>
  );

  return (
    <div style={{ backgroundColor: "" }}>
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="card col-md-7 offset-md-2 offset-md-3">
            <br />

            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
              <img
                src="https://images.wakelet.com/resize?id=iU9AMKz6tnH5g8tCpV3_8&h=768&w=768&q=85#"
                alt="Logo"
                style={{ marginBottom: "1rem", width: "15rem", height: '11rem' }}
              />
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

            <div style={{ display: "flex", justifyContent: "center" }}>
              <PDFDownloadLink document={<MyDocument />} fileName="attestation.pdf">
                {({ blob, url, loading, error }) =>
                  loading ? 'Chargement du PDF...' : <Button className="btn btn-success">Imprimer</Button>
                }
              </PDFDownloadLink>
            </div>

          </div>
        </div>
      </div>
      <br />

      <br />
    </div>
  );
}

export default ImprimerInscription;
