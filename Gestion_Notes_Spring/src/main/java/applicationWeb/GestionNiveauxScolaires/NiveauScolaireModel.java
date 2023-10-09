package applicationWeb.GestionNiveauxScolaires;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import applicationWeb.GestionFilieres.FiliereModel;
import applicationWeb.GestionModules.ModuleModel;

@Entity
@Table(name = "NiveauScolaire")
public class NiveauScolaireModel {
	
   
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long idNivSco;
     @Id
	private String codeNivSco;
	private String designation;
	
    @ManyToOne
    @JoinColumn(name = "codeFil")
    private FiliereModel filiere;
	
    @OneToMany(mappedBy = "niveauScolaire")
    private List<ModuleModel> modules;

    
//	public Long getIdNivSco() {
//		return idNivSco;
//	}
//
//	public void setIdNivSco(Long idNivSco) {
//		this.idNivSco = idNivSco;
//	}

	public String getCodeNivSco() {
		return codeNivSco;
	}

	public void setCodeNivSco(String codeNivSco) {
		this.codeNivSco = codeNivSco;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public FiliereModel getFiliere() {
		return filiere;
	}

	public void setFiliere(FiliereModel filiere) {
		this.filiere = filiere;
	}
	
	
	
	

}
