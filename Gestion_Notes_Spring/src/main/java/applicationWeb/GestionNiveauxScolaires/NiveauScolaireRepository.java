package applicationWeb.GestionNiveauxScolaires;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NiveauScolaireRepository extends JpaRepository<NiveauScolaireModel, String> {
	
	NiveauScolaireModel findNiveauScolaireByCodeNivSco(String codeNivSco);
	
	@Query("SELECT ns FROM NiveauScolaireModel ns JOIN ns.filiere f WHERE f.codeFil = :codeFil")
	List<NiveauScolaireModel> findNiveauxScolairesByCodeFiliere(@Param("codeFil")String codeFil);

}
