package applicationWeb.GestionEtudiants;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import applicationWeb.GestionModules.ModuleModel;

@Repository
public interface EtudiantRepository extends JpaRepository<EtudiantModel, String> {
	
	EtudiantModel findEtudiantByCin(String cin);
	
	@Query("SELECT etud FROM EtudiantModel etud JOIN etud.filiere f WHERE f.codeFil = :codeFil")
	List<EtudiantModel> findEtudiantByCodeFil(@Param("codeFil") String codeFil);
	
	
	@Modifying
	@Query("UPDATE EtudiantModel e SET e.statut = 'Terminer' WHERE e.cin = :cin")
	void updateStatutByCin(@Param("cin") String cin);
}
