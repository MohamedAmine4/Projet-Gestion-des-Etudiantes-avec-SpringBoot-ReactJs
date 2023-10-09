package applicationWeb.GestionNiveaux;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NiveauRepository extends JpaRepository<NiveauModel, String> {
	
	NiveauModel findNiveauByCodeNiv(String codeN);

}
