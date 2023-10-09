package applicationWeb.GestionInscription;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InscreptionRepository extends JpaRepository<InscreptionModel, String>{

	InscreptionModel findInscreptionByCin(String cin);
}
