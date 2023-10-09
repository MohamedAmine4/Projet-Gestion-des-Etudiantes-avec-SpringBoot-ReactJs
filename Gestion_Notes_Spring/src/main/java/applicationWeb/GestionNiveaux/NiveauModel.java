package applicationWeb.GestionNiveaux;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import applicationWeb.GestionFilieres.FiliereModel;

@Entity
@Table(name = "Niveau")
public class NiveauModel {
	
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long idNiv;
	@Id
	private String codeNiv;
	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}
	private String designation;
	private String statut;
	
    @OneToMany(mappedBy = "niveau")
    private List<FiliereModel> filieres;
	
    public NiveauModel() {
    	
    }
    
	public NiveauModel(Long idNiv, String codeNiv, String designation) {
		super();
//		this.idNiv = idNiv;
		this.codeNiv = codeNiv;
		this.designation = designation;
	}
	
	
//	public Long getIdNiv() {
//		return idNiv;
//	}
//	public void setIdNiv(Long idNiv) {
//		this.idNiv = idNiv;
//	}
	
	public String getCodeNiv() {
		return codeNiv;
	}
	public void setCodeNiv(String codeNiv) {
		this.codeNiv = codeNiv;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	
	

}
