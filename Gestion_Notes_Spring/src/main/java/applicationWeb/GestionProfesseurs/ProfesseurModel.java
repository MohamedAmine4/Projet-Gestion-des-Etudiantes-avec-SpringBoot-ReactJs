package applicationWeb.GestionProfesseurs;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Professeur")
public class ProfesseurModel {
    
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id; // Attribut avec auto-incrémentation
    
    @Id
//    @Column(name = "CIN", columnDefinition = "VARCHAR(50) NOT NULL")
    @Column(name = "cin")
    private String cin;
         
//    @Column(name = "nom", columnDefinition = "VARCHAR(50)")
    private String nom;
    
    @Column(name = "prenom")
    private String prenom;
    
//    @Column(name = "dateNaissance", columnDefinition = "date")
//    @Column(name = "date_naissance")
    private Date dateNaissance;
    
//    @Column(name = "telephone", columnDefinition = "VARCHAR(50)")
    private String telephone;
    
    private String email;
    private String nationalite;
    private String ville;
    private String sexe;
    private String statut;
    private String login;
    private String password;
    
    
    
// Getters and Setters    
//	public Long getId() {
//		return id;
//	}
//	public void setId(Long id) {
//		this.id = id;
//	}
	public String getCin() {
		return cin;
	}
	public void setCin(String cin) {
		this.cin = cin;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public Date getDateNaissance() {
		return dateNaissance;
	}
	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNationalite() {
		return nationalite;
	}
	public void setNationalite(String nationalite) {
		this.nationalite = nationalite;
	}
	public String getVille() {
		return ville;
	}
	public void setVille(String ville) {
		this.ville = ville;
	}
	public String getSexe() {
		return sexe;
	}
	public void setSexe(String sexe) {
		this.sexe = sexe;
	}
	public String getStatut() {
		return statut;
	}
	public void setStatut(String statut) {
		this.statut = statut;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
     
    
    
    

}
