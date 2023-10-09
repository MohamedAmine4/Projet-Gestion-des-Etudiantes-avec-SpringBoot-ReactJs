package applicationWeb.GestionModules;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import applicationWeb.GestionProfesseurs.ProfesseurModel;

@Repository
public interface ModuleRepository extends JpaRepository<ModuleModel, String> {
	
	@Query("SELECT m FROM ModuleModel m JOIN m.niveauScolaire ns WHERE ns.codeNivSco = :codeNivSco")
	List<ModuleModel> findModulesByCodeNiveauScolaire(@Param("codeNivSco")String codeNivSco);
	
	 ModuleModel findModuleByCodeMod(String codeMod);

// Supprimer tous les modules associees a un niveau scolaire : 
	 @Modifying
	 @Query("DELETE FROM ModuleModel m WHERE m.niveauScolaire.codeNivSco = :codeNivSco")
	 void deleteAllModulesByCodeNivSco(@Param("codeNivSco") String codeNivSco);
	 
	 List<ModuleModel> getAllByNiveauScolaire_Filiere_CodeFil(String codeFil);
}
