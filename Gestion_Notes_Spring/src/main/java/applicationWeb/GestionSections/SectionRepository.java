package applicationWeb.GestionSections;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SectionRepository extends JpaRepository<SectionModel,String> {
	SectionModel findSectionByCodeSec(String codeSec);
}
