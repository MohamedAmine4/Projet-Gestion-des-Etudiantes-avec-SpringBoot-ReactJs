package applicationWeb.GestionNotesNormale;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface NoteNormaleRepository extends JpaRepository<NoteNormaleModel, Long> {
	
	@Query("SELECT n FROM NoteNormaleModel n JOIN n.etudiant e WHERE e.cin = :cin")
	public List<NoteNormaleModel> findByEtudiant_Cin(@Param("cin")String cin);
//	public List<NoteModel> findByEtudiant_Cin(String cin);
	
	 @Query("SELECT n FROM NoteNormaleModel n JOIN n.etudiant e WHERE e.cin = :cin")
	public NoteNormaleModel findOneByEtudiant_Cin(@Param("cin")String cin);
	 
	    @Query("SELECT n FROM NoteNormaleModel n JOIN FETCH n.etudiant")
	public List<NoteNormaleModel> findAllWithEtudiant();
	 
//	 @Query("SELECT n FROM NoteModel n JOIN FETCH n.etudiant e WHERE e.cin = :cin")
//	 public List<NoteModel> findAllWithEtudiant();
	    
	 NoteNormaleModel findNoteNormaleModelByEtudiant_CinAndModule_codeMod(String cin, String codeMod);
	 
	 NoteNormaleModel findNoteNormaleModelByEtudiant_CinAndModule_codeModAndSession(String cin, String codeMod, String session);

	 List<NoteNormaleModel> findByResultatNot(String resultat);
}
