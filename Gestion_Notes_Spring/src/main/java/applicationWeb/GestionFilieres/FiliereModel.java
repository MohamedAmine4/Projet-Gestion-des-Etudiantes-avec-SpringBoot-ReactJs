package applicationWeb.GestionFilieres;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import applicationWeb.GestionModules.ModuleModel;
import applicationWeb.GestionNiveaux.NiveauModel;
import applicationWeb.GestionNiveauxScolaires.NiveauScolaireModel;
import applicationWeb.GestionResponsables.ResponsableModel;

@Entity
@Table(name = "Filiere")
public class FiliereModel{
		
//		@GeneratedValue(strategy = GenerationType.IDENTITY)
//		private Long idFil;
		@Id
		private String codeFil;
		private String designation;
		private String statut;
		
//	    @ManyToOne(fetch = FetchType.EAGER)
		@ManyToOne
	    @JoinColumn(name = "codeNiv", referencedColumnName = "codeNiv")
	    private NiveauModel niveau;
	    
	    @OneToMany(mappedBy = "filiere")
	    private List<NiveauScolaireModel> niveauxScolaires;
	    
		   @ManyToOne 
		   @JoinColumn(name = "CIN")
		    private ResponsableModel responsable;
			
		   
		public String getCodeFil() {
			return codeFil;
		}
		public void setCodeFil(String codeFil) {
			this.codeFil = codeFil;
		}
		public String getDesignation() {
			return designation;
		}
		public void setDesignation(String designation) {
			this.designation = designation;
		}
		
		
		public NiveauModel getNiveau() {
			return niveau;
		}
		public void setNiveau(NiveauModel niveau) {
			this.niveau = niveau;
		}
		
		public String getStatut() {
			return statut;
		}
		public void setStatut(String statut) {
			this.statut = statut;
		}
		public ResponsableModel getResponsable() {
			return responsable;
		}
		public void setResponsable(ResponsableModel responsable) {
			this.responsable = responsable;
		}
	

}
