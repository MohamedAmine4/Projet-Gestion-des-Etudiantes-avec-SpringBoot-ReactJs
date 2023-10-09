package applicationWeb.GestionNotesNormale;

import java.lang.reflect.Field;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import applicationWeb.GestionEtudiants.EtudiantRepository;
import applicationWeb.GestionModules.ModuleRepository;

import org.springframework.http.MediaType;
import javassist.NotFoundException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/notesNormale/")
public class NoteNormaleController {

    @Autowired
    private NoteNormaleRepository noteRepository;
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
    public List<NoteNormaleModel> getAllNotes() {
        return noteRepository.findAllWithEtudiant();
    }
   

 
  
// get Note by cin  
    @GetMapping("{cin}")
    public List<NoteNormaleModel> findByEtudiantCIN(@PathVariable String cin) {
        return noteRepository.findByEtudiant_Cin(cin);
    }

// get Note by cin Etudiant et code Module  
    @GetMapping("{cin}/{codMod}")
    public NoteNormaleModel findByEtudiantCINModuleCode(@PathVariable String cin, @PathVariable String codMod) {
        return noteRepository.findNoteNormaleModelByEtudiant_CinAndModule_codeMod(cin, codMod);
    }
    
 // get Note by cin Etudiant et code Module  
    @GetMapping("{cin}/{codMod}/{session}")
    public NoteNormaleModel findByEtudiantCINModuleCodeSession(@PathVariable String cin, @PathVariable String codMod, @PathVariable String session) {
        return noteRepository.findNoteNormaleModelByEtudiant_CinAndModule_codeModAndSession(cin, codMod, session);
    }
    
//    @GetMapping("/{cin}/{noteType}")
//    public ResponseEntity<Double> getNoteByCinType(@PathVariable String cin, @PathVariable String noteType) throws NotFoundException {
//        // Effectuer la logique pour récupérer la note en fonction de cin et noteType
//        NoteModel note = noteRepository.findOneByCin(cin);
//        
//        if (note != null) {
//            try {
//                Field field = NoteModel.class.getDeclaredField(noteType);
//                field.setAccessible(true);
//                Double noteValue = (Double) field.get(note);
//                return ResponseEntity.ok(noteValue);
//            } catch (NoSuchFieldException | IllegalAccessException e) {
//                throw new NotFoundException("Note not found");
//            }
//        } else {
//            throw new NotFoundException("Note not found");
//        }
//        
////        http://localhost:8080/api/notes/AB12345/ctrl_1
//    }
    
    
//    @GetMapping("{cin}/{noteType}")
//    public ResponseEntity<Map<String, Object>> getNoteByCinType(@PathVariable String cin, @PathVariable String noteType) throws NotFoundException {
//        NoteModel note = noteRepository.findOneByEtudiant_Cin(cin);
//
//        if (note != null) {
//            try {
//                Field field = NoteModel.class.getDeclaredField(noteType);
//                field.setAccessible(true);
//                Double noteValue = (Double) field.get(note);
//
//                // Créer un objet Map contenant le numéro de CIN et la note
//                Map<String, Object> result = new HashMap<>();
//                result.put("cin", cin);
//                result.put(noteType, noteValue);
//
//                return ResponseEntity.ok(result);
//            } catch (NoSuchFieldException | IllegalAccessException e) {
//                throw new NotFoundException("Note not found");
//            }
//        } else {
//            throw new NotFoundException("Note not found");
//        }
//    }
    
/////////////////////////////
    @PutMapping("{cinEtu}/{codeMo}")
    public ResponseEntity<NoteNormaleModel> updateNoteValue(@PathVariable String cinEtu, @PathVariable String codeMo, @RequestBody NoteNormaleModel noteUpdate) {
      NoteNormaleModel existingNote = noteRepository.findNoteNormaleModelByEtudiant_CinAndModule_codeMod(cinEtu, codeMo);
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
      existingNote.setMoyenne(noteUpdate.getMoyenne());
      existingNote.setResultat(noteUpdate.getResultat());
      
      NoteNormaleModel updatedNote = noteRepository.save(existingNote);
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
	    NoteNormaleModel note = noteRepository.findNoteNormaleModelByEtudiant_CinAndModule_codeMod(cin, codeModule);
	
	    if (note != null) {
	        // Mettre à jour la moyenne de l'étudiant
	        note.setMoyenne(moyEtudiant);
	        note.setResultat(resultat);
	        noteRepository.save(note);
	
	        return ResponseEntity.ok("Moyenne mise à jour avec succès");
	    } else {
	        return ResponseEntity.badRequest().body("Note non trouvée");
	    }
	}

    



}

