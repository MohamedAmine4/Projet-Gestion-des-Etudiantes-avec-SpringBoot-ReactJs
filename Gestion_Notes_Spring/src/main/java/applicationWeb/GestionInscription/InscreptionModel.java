package applicationWeb.GestionInscription;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import applicationWeb.GestionFilieres.FiliereModel;
import applicationWeb.GestionNiveaux.NiveauModel;

@Entity
@Table(name = "Inscreption")
public class InscreptionModel {

	@Id
    private String cin;
    private String nom;
    private String prenom;
    private Date dateNaissance;
    
    @ManyToOne 
	   @JoinColumn(name = "codeFil")
	    private FiliereModel filier;
       
    
    public InscreptionModel() {
    	
    }





	public InscreptionModel(String cin, String nom, String prenom, Date dateNaissance, NiveauModel niveau, FiliereModel filier) {
		super();
		this.cin = cin;
		this.nom = nom;
		this.prenom = prenom;
		this.dateNaissance = dateNaissance;
		this.filier = filier;
	}





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


	public FiliereModel getFilier() {
		return filier;
	}





	public void setFilier(FiliereModel filier) {
		this.filier = filier;
	}



	
	
	
}
