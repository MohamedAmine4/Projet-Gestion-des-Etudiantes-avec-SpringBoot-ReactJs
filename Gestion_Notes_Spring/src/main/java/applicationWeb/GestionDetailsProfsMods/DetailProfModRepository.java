package applicationWeb.GestionDetailsProfsMods;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailProfModRepository extends JpaRepository<DetailProfModModel, Long>{
	
	DetailProfModModel findDetailProfModModelByProfesseur_CinAndModule_codeMod(String cin, String codeMod);
	
//	DetailProfModModel findDetailProfModModelByProfesseur_Cin(String cin);
// ==> la recherche par 'cin' dans la table DetailsProfMod ne suffit pas car le "cin" dans cette table n'est pas unique mais le couple (cin,codeMod) c'est unique!	
 
	List<DetailProfModModel> findDetailProfModModelByProfesseur_Cin(String cin);

}
