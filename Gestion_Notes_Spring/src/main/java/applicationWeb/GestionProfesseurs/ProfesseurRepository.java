package applicationWeb.GestionProfesseurs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfesseurRepository extends JpaRepository<ProfesseurModel, String>{
	
	 ProfesseurModel findProfesseurByCin(String cin);

}
