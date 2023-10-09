package applicationWeb.GestionSectionsFiliere;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import applicationWeb.GestionFilieres.FiliereModel;
import applicationWeb.GestionSections.SectionModel;

@Entity
@Table(name = "SectionFilier")
public class SectionFilierModel {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
    @ManyToOne
    @JoinColumn(name = "codeFil")
	private FiliereModel filiere;
    
    @ManyToOne
    @JoinColumn(name = "codeSec")
	private SectionModel section;

//---------------------------------
    
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public FiliereModel getFilier() {
		return filiere;
	}

	public void setFilier(FiliereModel filier) {
		this.filiere = filier;
	}

	public SectionModel getSection() {
		return section;
	}

	public void setSection(SectionModel section) {
		this.section = section;
	}


	
	
}
