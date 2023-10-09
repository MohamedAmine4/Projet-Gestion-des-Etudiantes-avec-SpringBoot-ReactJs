package applicationWeb.GestionNotesRattrapage;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import applicationWeb.GestionEtudiants.EtudiantModel;
import applicationWeb.GestionModules.ModuleModel;


@Repository
public interface NoteRattrapageRepository extends JpaRepository<NoteRattrapageModel, Long> {
	
	@Query("SELECT n FROM NoteRattrapageModel n JOIN n.etudiant e WHERE e.cin = :cin")
	public List<NoteRattrapageModel> findByEtudiant_Cin(@Param("cin")String cin);
//	public List<NoteRattrapageModel> findByEtudiant_Cin(String cin);
	
	 @Query("SELECT n FROM NoteRattrapageModel n JOIN n.etudiant e WHERE e.cin = :cin")
	public NoteRattrapageModel findOneByEtudiant_Cin(@Param("cin")String cin);
	 
	    @Query("SELECT n FROM NoteRattrapageModel n JOIN FETCH n.etudiant")
	public List<NoteRattrapageModel> findAllWithEtudiant();
	 
//	 @Query("SELECT n FROM NoteModel n JOIN FETCH n.etudiant e WHERE e.cin = :cin")
//	 public List<NoteModel> findAllWithEtudiant();
	    
	 NoteRattrapageModel findNoteRattrapageModelByEtudiant_CinAndModule_codeMod(String cin, String codeMod);
	 
	 NoteRattrapageModel findNoteRattrapageModelByEtudiant_CinAndModule_codeModAndSession(String cin, String codeMod, String session);

	 
	 NoteRattrapageModel findByEtudiantAndModule(EtudiantModel etudiant, ModuleModel module);

}
