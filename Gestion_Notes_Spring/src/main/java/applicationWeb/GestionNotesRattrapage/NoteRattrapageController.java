package applicationWeb.GestionNotesRattrapage;

import java.lang.reflect.Field;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import applicationWeb.GestionDetailsProfsMods.DetailProfModModel;
import applicationWeb.GestionEtudiants.EtudiantModel;
import applicationWeb.GestionEtudiants.EtudiantRepository;
import applicationWeb.GestionModules.ModuleModel;
import applicationWeb.GestionModules.ModuleRepository;
import applicationWeb.GestionNotesNormale.NoteNormaleModel;
import applicationWeb.GestionNotesNormale.NoteNormaleRepository;
import applicationWeb.GestionProfesseurs.ProfesseurModel;

import org.springframework.http.MediaType;
import javassist.NotFoundException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/notesRattrapage/")
public class NoteRattrapageController {

    @Autowired
    private NoteRattrapageRepository noteRattrapageRepository;
    @Autowired
    private NoteNormaleRepository noteNormaleRepository;
    @Autowired
    private EtudiantRepository etudiantRepository;
    @Autowired
    private ModuleRepository moduleRepository;

    
//    @Autowired
//    private NoteService noteService;

//    @GetMapping("")
//    public List<NoteModel> getAllNotes() {
//        return noteRepository.findAll();
//    //  http://localhost:8080/api/notes/
//    }
    
    
    @GetMapping("")
    public List<NoteRattrapageModel> getAllNotes() {
        return noteRattrapageRepository.findAllWithEtudiant();
    }
   
 //create note Rattrapage rest api  // @RequestParam
//   	@PostMapping("")
//   	public NoteRattrapageModel createNoteRattrapage(@RequestBody NoteRattrapageModel noteRatt) {
//   		return noteRepository.save(noteRatt);
//   	}
   	
 //create note Rattrapage rest api  // @RequestParam
    @PostMapping("{cinEtu}/{codeModul}")
    public ResponseEntity<String> createNoteRattrapage(@PathVariable String cinEtu, @PathVariable String codeModul) {
        NoteRattrapageModel noteRattrap = noteRattrapageRepository.findNoteRattrapageModelByEtudiant_CinAndModule_codeMod(cinEtu, codeModul);
        if (noteRattrap != null) {
            return ResponseEntity.notFound().build();
        } else {
            noteRattrap = new NoteRattrapageModel(); // Créez une nouvelle instance de NoteRattrapageModel

            // Charger l'objet EtudiantModel correspondant à la clé étrangère "cin"
            EtudiantModel newEtudiant = etudiantRepository.findEtudiantByCin(cinEtu);
            noteRattrap.setEtudiant(newEtudiant);

            // Charger l'objet ModuleModel correspondant à la clé étrangère "codeMod"
            ModuleModel newModule = moduleRepository.findModuleByCodeMod(codeModul);
            noteRattrap.setModule(newModule);
             
            noteRattrap.setSession("Rattrapage");
            noteRattrap.setEtudiantDansNoteRattrapage(true);
            noteRattrapageRepository.save(noteRattrap);
            return ResponseEntity.ok("Enregistrement réussi.");
        }
    }


// delete note Rattrapage rest api   	
//	@DeleteMapping("{cinEtu}/{codeModul}")
//	public ResponseEntity<Void> deleteNoteModule(@PathVariable String cinEtu, @PathVariable String codeModul) {
//	    Optional<NoteRattrapageModel> noteRattrap = Optional.ofNullable(noteRepository.findNoteRattrapageModelByEtudiant_CinAndModule_codeMod(cinEtu, codeModul));
//
//	    if (noteRattrap.isPresent()) {
//	    	noteRepository.delete(noteRattrap.get());
//	        return ResponseEntity.noContent().build();
//	    } else {
//	        return ResponseEntity.notFound().build();
//	    }
//	}
//	
	
// delete note Rattrapage rest api   	
	@DeleteMapping("{cinEtu}/{codeModul}")
	public void deleteNoteModule(@PathVariable String cinEtu, @PathVariable String codeModul) {
	    NoteRattrapageModel noteRattrap = noteRattrapageRepository.findNoteRattrapageModelByEtudiant_CinAndModule_codeMod(cinEtu, codeModul);

	    noteRattrapageRepository.delete(noteRattrap);
	}
 
  
// get Note by cin  
    @GetMapping("{cin}")
    public List<NoteRattrapageModel> findByEtudiantCIN(@PathVariable String cin) {
        return noteRattrapageRepository.findByEtudiant_Cin(cin);
    }

// get Note by cin Etudiant et code Module  
    @GetMapping("{cin}/{codMod}")
    public NoteRattrapageModel findByEtudiantCINModuleCode(@PathVariable String cin, @PathVariable String codMod) {
        return noteRattrapageRepository.findNoteRattrapageModelByEtudiant_CinAndModule_codeMod(cin, codMod);
    }
    
 // get Note by cin Etudiant et code Module  
    @GetMapping("{cin}/{codMod}/{session}")
    public NoteRattrapageModel findByEtudiantCINModuleCodeSession(@PathVariable String cin, @PathVariable String codMod, @PathVariable String session) {
        return noteRattrapageRepository.findNoteRattrapageModelByEtudiant_CinAndModule_codeModAndSession(cin, codMod, session);
    }

/////////////////////////////
    @PutMapping("{cinEtu}/{codeMo}")
    public ResponseEntity<NoteRattrapageModel> updateNoteValue(@PathVariable String cinEtu, @PathVariable String codeMo, @RequestBody NoteRattrapageModel noteUpdate) {
      NoteRattrapageModel existingNote = noteRattrapageRepository.findNoteRattrapageModelByEtudiant_CinAndModule_codeMod(cinEtu, codeMo);
      if (existingNote == null) {
        return ResponseEntity.notFound().build();
      }
      existingNote.setCtrl_1(noteUpdate.getCtrl_1());
      existingNote.setCtrl_2(noteUpdate.getCtrl_2());
      existingNote.setCtrl_3(noteUpdate.getCtrl_3());
      existingNote.setTp_1(noteUpdate.getTp_1());
      existingNote.setTp_2(noteUpdate.getTp_2());
      existingNote.setTp_3(noteUpdate.getTp_3());
      existingNote.setExam_1(noteUpdate.getExam_1());
      existingNote.setExam_2(noteUpdate.getExam_2());
      existingNote.setExam_3(noteUpdate.getExam_3());
//      existingNote.setSession(noteUpdate.getSession());
      existingNote.setSession(existingNote.getSession());
      existingNote.setMoyenne(noteUpdate.getMoyenne());
      existingNote.setResultat(noteUpdate.getResultat());
      
      NoteRattrapageModel updatedNote = noteRattrapageRepository.save(existingNote);
      return ResponseEntity.ok(updatedNote);
    }
    
  
////////////////////////
  //modifier la moyenne de chaque etudiant
   	@PutMapping("moyenne/{cin}/{codeModule}/")
   	public ResponseEntity<String> updateMoyenne(
   	    @PathVariable String cin,
   	    @PathVariable String codeModule,
   	    @RequestParam double moyEtudiant,
   	    @RequestParam String resultat
   	) {
   	    // Récupérer la note correspondante à l'étudiant et au module
   	    NoteRattrapageModel note = noteRattrapageRepository.findNoteRattrapageModelByEtudiant_CinAndModule_codeMod(cin, codeModule);
   	
   	    if (note != null) {
   	        // Mettre à jour la moyenne de l'étudiant
   	        note.setMoyenne(moyEtudiant);
   	        note.setResultat(resultat);
   	     noteRattrapageRepository.save(note);
   	
   	        return ResponseEntity.ok("Moyenne mise à jour avec succès");
   	    } else {
   	        return ResponseEntity.badRequest().body("Note non trouvée");
   	    }
   	}
    
//----------------------------------------------------------------------------
    @DeleteMapping("remove-non-rattrapage-students")
    public void removeNonRattrapageStudents() {
        // Récupérer les étudiants ayant un résultat différent de "Rattrapage" dans la table NoteNormale
        Iterable<NoteNormaleModel> nonRattrapageStudents = noteNormaleRepository.findByResultatNot("Rattrapage");

        // Supprimer les étudiants de la table NoteRattrapage correspondant aux étudiants non rattrapage
        for (NoteNormaleModel noteNormale : nonRattrapageStudents) {
            NoteRattrapageModel noteRattrapage = noteRattrapageRepository.findByEtudiantAndModule(noteNormale.getEtudiant(), noteNormale.getModule());
            if (noteRattrapage != null) {
                noteRattrapageRepository.delete(noteRattrapage);
            }
        }
    }
    
    // get Note by result "Non Rattrapage" de la table "NoteNormale"  
    @GetMapping("non-rattrapage-students")
    public List<NoteNormaleModel> getNonRattrapageStudents() {
        return noteNormaleRepository.findByResultatNot("Rattrapage");
    }
    


}

