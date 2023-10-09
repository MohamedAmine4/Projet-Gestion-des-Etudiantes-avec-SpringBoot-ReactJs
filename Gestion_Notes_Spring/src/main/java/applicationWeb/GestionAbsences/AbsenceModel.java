package applicationWeb.GestionAbsences;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import applicationWeb.GestionEtudiants.EtudiantModel;
import applicationWeb.GestionModules.ModuleModel;
import applicationWeb.GestionProfesseurs.ProfesseurModel;

@Entity
@Table(name = "Absence")
public class AbsenceModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAbs; // Attribut avec auto-incrémentation

    @ManyToOne
    @JoinColumn(name = "cin")
    private EtudiantModel etudiant;

    @ManyToOne
    @JoinColumn(name = "codeMod")
    private ModuleModel module;
    
    private int nbAbsences;
    private int nbRetards;
    
 // Getters and Setters   
    
	public Long getIdAbs() {
		return idAbs;
	}
	public void setIdAbs(Long idAbs) {
		this.idAbs = idAbs;
	}
	public EtudiantModel getEtudiant() {
		return etudiant;
	}
	public void setEtudiant(EtudiantModel etudiant) {
		this.etudiant = etudiant;
	}
	public ModuleModel getModule() {
		return module;
	}
	public void setModule(ModuleModel module) {
		this.module = module;
	}
	public int getNbAbsences() {
		return nbAbsences;
	}
	public void setNbAbsences(int nbAbsences) {
		this.nbAbsences = nbAbsences;
	}
	public int getNbRetards() {
		return nbRetards;
	}
	public void setNbRetards(int nbRetards) {
		this.nbRetards = nbRetards;
	} 
 

}
