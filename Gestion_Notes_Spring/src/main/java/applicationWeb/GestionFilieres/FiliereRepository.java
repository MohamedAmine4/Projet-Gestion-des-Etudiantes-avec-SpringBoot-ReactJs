package applicationWeb.GestionFilieres;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FiliereRepository extends JpaRepository<FiliereModel, String> {
	
	FiliereModel findFilierByCodeFil(String codeFil);
	
	@Query("SELECT f FROM FiliereModel f JOIN f.niveau n WHERE n.codeNiv = :codeNiv")
	List<FiliereModel> findFilieresByCodeNiveau(@Param("codeNiv")String codeNiv);
	
	@Query("SELECT f FROM FiliereModel f JOIN f.responsable r WHERE r.cin = :cin")
	List<FiliereModel> findFilieresByCINResponsable(@Param("cin")String cin);
	
}
