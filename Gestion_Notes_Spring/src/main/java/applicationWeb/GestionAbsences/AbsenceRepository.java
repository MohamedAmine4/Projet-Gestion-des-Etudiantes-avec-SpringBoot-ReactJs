package applicationWeb.GestionAbsences;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AbsenceRepository extends JpaRepository<AbsenceModel, Long>{
	
	AbsenceModel findAbsenceModelByEtudiant_CinAndModule_codeMod(String cin, String codeMod);
	
	List<AbsenceModel> findAbsenceModelByEtudiant_Cin(String cin);

}
