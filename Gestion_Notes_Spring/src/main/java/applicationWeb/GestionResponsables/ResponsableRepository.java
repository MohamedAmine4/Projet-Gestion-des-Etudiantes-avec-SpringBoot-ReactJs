package applicationWeb.GestionResponsables;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResponsableRepository extends JpaRepository <ResponsableModel, String> {

	
	ResponsableModel findResponsableByCin(String CIN);
}
