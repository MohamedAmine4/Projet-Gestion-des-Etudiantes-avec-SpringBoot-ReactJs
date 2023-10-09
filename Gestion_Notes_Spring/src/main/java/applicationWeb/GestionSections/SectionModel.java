package applicationWeb.GestionSections;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import applicationWeb.GestionSectionsFiliere.SectionFilierModel;


@Entity
@Table(name = "Section")
public class SectionModel {

	
	@Id
	private String codeSec;
	
	private String designation;
	
//	  @OneToMany(mappedBy = "section")
//	    private Collection<SectionFilierModel> sectionfilier;
	
	public SectionModel () {}

	public SectionModel(String codeSec, String designation, Collection<SectionFilierModel> sectionfilier) {
		super();
		this.codeSec = codeSec;
		this.designation = designation;
//		this.sectionfilier = sectionfilier;
	}

	public String getCodeSec() {
		return codeSec;
	}

	public void setCodeSec(String codeSec) {
		this.codeSec = codeSec;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

//	public Collection<SectionFilier> getSectionfilier() {
//		return sectionfilier;
//	}
//
//	public void setSectionfilier(Collection<SectionFilier> sectionfilier) {
//		this.sectionfilier = sectionfilier;
//	}
	
	
}
