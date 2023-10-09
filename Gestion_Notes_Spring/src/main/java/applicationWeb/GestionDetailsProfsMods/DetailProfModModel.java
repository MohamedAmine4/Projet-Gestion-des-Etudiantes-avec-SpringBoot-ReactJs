package applicationWeb.GestionDetailsProfsMods;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import applicationWeb.GestionModules.ModuleModel;
import applicationWeb.GestionProfesseurs.ProfesseurModel;

@Entity
@Table(name = "DetailsProfModule")
public class DetailProfModModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProfMod; // Attribut avec auto-incrémentation
    private String statut;
    private String section;

    @ManyToOne
    @JoinColumn(name = "cin")
    private ProfesseurModel professeur;

    @ManyToOne
    @JoinColumn(name = "codeMod")
    private ModuleModel module;
    
    
 // Getters and Setters   
    
	public Long getIdProfMod() {
		return idProfMod;
	}

	public void setIdProfMod(Long idProfMod) {
		this.idProfMod = idProfMod;
	}

	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

	public ProfesseurModel getProfesseur() {
		return professeur;
	}

	public void setProfesseur(ProfesseurModel professeur) {
		this.professeur = professeur;
	}

	public ModuleModel getModule() {
		return module;
	}

	public void setModule(ModuleModel module) {
		this.module = module;
	}

	public String getSection() {
		return section;
	}

	public void setSection(String section) {
		this.section = section;
	}
 

}
