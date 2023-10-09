package applicationWeb.GestionDateInscreption;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DateInscreptionRepository extends JpaRepository<DateInscreptionModel, Integer>{
	DateInscreptionModel findDateById(int id);
}
