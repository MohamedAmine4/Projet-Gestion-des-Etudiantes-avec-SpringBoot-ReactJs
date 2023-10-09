package applicationWeb.GestionModules;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import applicationWeb.GestionNiveauxScolaires.NiveauScolaireModel;

@Entity
@Table(name = "Module")
public class ModuleModel {

        
//        @GeneratedValue(strategy = GenerationType.IDENTITY)
//		private Long idMod;
        @Id
		private String codeMod;
		private String nomMod;
	    private int nbExams;
	    private int nbTps;
	    private int nbControles;
	    private double  coeffControles;
	    private double coeffTps;
	    private double coeffExams;
		
	    @ManyToOne
	    @JoinColumn(name = "codeNivSco", referencedColumnName = "codeNivSco")
	    private NiveauScolaireModel niveauScolaire;
		
//		public Long getIdMod() {
//			return idMod;
//		}
//		public void setIdMod(Long idMod) {
//			this.idMod = idMod;
//		}
	    
		public String getCodeMod() {
			return codeMod;
		}
		public void setCodeMod(String codeMod) {
			this.codeMod = codeMod;
		}
		public String getNomMod() {
			return nomMod;
		}
		public void setNomMod(String nomMod) {
			this.nomMod = nomMod;
		}
		
		
		public NiveauScolaireModel getNiveauScolaire() {
			return niveauScolaire;
		}
		public void setNiveauScolaire(NiveauScolaireModel niveauScolaire) {
			this.niveauScolaire = niveauScolaire;
		}
		public int getNbExams() {
			return nbExams;
		}
		public void setNbExams(int nbExams) {
			this.nbExams = nbExams;
		}
		public int getNbTps() {
			return nbTps;
		}
		public void setNbTps(int nbTps) {
			this.nbTps = nbTps;
		}
		public int getNbControles() {
			return nbControles;
		}
		public void setNbControles(int nbControles) {
			this.nbControles = nbControles;
		}
		public double getCoeffControles() {
			return coeffControles;
		}
		public void setCoeffControles(double coeffControles) {
			this.coeffControles = coeffControles;
		}
		public double getCoeffTps() {
			return coeffTps;
		}
		public void setCoeffTps(double coeffTps) {
			this.coeffTps = coeffTps;
		}
		public double getCoeffExams() {
			return coeffExams;
		}
		public void setCoeffExams(double coeffExams) {
			this.coeffExams = coeffExams;
		}
		
			
		
}
