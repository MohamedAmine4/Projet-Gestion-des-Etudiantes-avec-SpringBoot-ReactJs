package applicationWeb.GestionAbsences;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.persistence.Table;

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

import applicationWeb.ResourceNotFoundException;
import applicationWeb.GestionModules.ModuleModel;
import applicationWeb.GestionModules.ModuleRepository;
import applicationWeb.GestionNotesNormale.NoteNormaleModel;
import applicationWeb.GestionProfesseurs.ProfesseurModel;
import applicationWeb.GestionProfesseurs.ProfesseurRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/absences/")
public class AbsenceController {

	
	@Autowired
	private AbsenceRepository absenceRepository;

//get all absences etudiants modules
    @GetMapping("")
    public List<AbsenceModel> getAllAbsencessEtudsModules() {
         return absenceRepository.findAll();    
    // http://localhost:8080/api/absences/
    }

//get absence etudiant module by cinEtu et codeModule rest api
	@GetMapping("{cin}/{codeMod}")
	public AbsenceModel getAbsenceEtudsModuleByCin(@PathVariable String cin, @PathVariable String codeMod) {
        return absenceRepository.findAbsenceModelByEtudiant_CinAndModule_codeMod(cin,codeMod);
	}
	
//get absence etudiant module by cinEtud rest api
//	@GetMapping("{cin}")
//	public List<AbsenceModel> getDetailsProfModuleByCin(@PathVariable String cin) {
//        return absenceRepository.findAbsenceModelByEtudiant_Cin(cin);
//	}

// modifier nbAbsences et nbRetards d'un etudiant suivi un module :
    @PutMapping("{cinEtu}/{codeMo}")
    public ResponseEntity<AbsenceModel> updateNoteValue(@PathVariable String cinEtu, @PathVariable String codeMo, @RequestBody AbsenceModel absenceUpdate) {
      AbsenceModel existingAbsence = absenceRepository.findAbsenceModelByEtudiant_CinAndModule_codeMod(cinEtu, codeMo);
      if (existingAbsence == null) {
        return ResponseEntity.notFound().build();
      }
      
      existingAbsence.setNbAbsences(absenceUpdate.getNbAbsences());
      existingAbsence.setNbRetards(absenceUpdate.getNbRetards());
      
      AbsenceModel updatedAbsence = absenceRepository.save(existingAbsence);
      return ResponseEntity.ok(updatedAbsence);
    }

}
