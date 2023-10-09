package applicationWeb.GestionSections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
import org.springframework.web.bind.annotation.RestController;

import applicationWeb.ResourceNotFoundException;
import applicationWeb.GestionModules.ModuleModel;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/section/")

public class SectionController {


	

		@Autowired
		private SectionRepository sectionRepository;
		
		
		// Get all dateRepository
		@GetMapping("")
		public List<SectionModel> getAllDate(){
			return sectionRepository.findAll();
		}
		
		// Create dateRepository
		@PostMapping("")
		public SectionModel createSection(@RequestBody SectionModel section) {
			return sectionRepository.save(section);
		}
		
		
//get section by id rest api
  	@GetMapping("{codeSec}")
  	public SectionModel getSectionByCodeSec(@PathVariable String codeSec) {
          return sectionRepository.findSectionByCodeSec(codeSec);
  	}

		// Update Etudiant
		@PutMapping("{codeSec}")
		public ResponseEntity<SectionModel> modifierSection(@PathVariable String codeSec, @RequestBody SectionModel date){
			SectionModel secExistant = sectionRepository.findSectionByCodeSec(codeSec);
					if (secExistant == null) {
				        throw new ResourceNotFoundException("section de CIN: " + codeSec + " n'existe pas");
				    }
			
					
					secExistant.setDesignation(date.getDesignation());
					
			SectionModel modifierSec = sectionRepository.save(secExistant);
			return ResponseEntity.ok(modifierSec);
		}
		
		
		
//		//delete section rest api
//			@DeleteMapping("{codeSec}")
//			public ResponseEntity<Map<String, Boolean>> deleteDate(@PathVariable String codeSec){
//				SectionModel etudiant = sectionRepository.findSectionByCodeSec(codeSec);
//				 if (etudiant == null) {
//				        throw new ResourceNotFoundException("Section de CIN: " + codeSec + " n'existe pas");
//				    }
//				//etudiantRepository.delete(etudiant);
//			//	 etudiant.setStatut("Terminer"); // Modification du statut de l'étudiant
//
//				 sectionRepository.save(etudiant); // Enregistrer les modifications
//				Map<String, Boolean> reponse = new HashMap<>();
//				reponse.put("deleted", Boolean.TRUE);
//				
//				  return ResponseEntity.ok(reponse);
//				
//			}
		
// Supprimer section :	
	@DeleteMapping("{codeSec}")
	public ResponseEntity<SectionModel> supprimerSection(@PathVariable String codeSec) {
		SectionModel sectionExistant = sectionRepository.findSectionByCodeSec(codeSec);
		if (sectionExistant == null) {
			throw new ResourceNotFoundException("section  de codeSec: " + codeSec + " n'existe pas");
		}
        
		sectionRepository.delete(sectionExistant);
		 
		return ResponseEntity.ok().build();
	}
			
			
			





	
}
