package applicationWeb.GestionSectionsFiliere;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SectionFilierRepository extends JpaRepository<SectionFilierModel,Long> {

	SectionFilierModel findSectionfilierById(Long id);
	
	SectionFilierModel findSectionFilierModelByFiliere_CodeFilAndSection_codeSec(String codeFil, String codeSec);
	
	List<SectionFilierModel> findSectionFilierModelByFiliere_designation(String designation);
	
	List<SectionFilierModel> findSectionFilierModelByFiliere_codeFil(String codeFil);
}
