package applicationWeb.GestionSectionsFiliere;

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
import applicationWeb.GestionFilieres.FiliereModel;
import applicationWeb.GestionFilieres.FiliereRepository;
import applicationWeb.GestionModules.ModuleModel;
import applicationWeb.GestionSections.SectionModel;
import applicationWeb.GestionSections.SectionRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/sectionFilier/")
public class SectionFilierController {

	
	
	@Autowired
	private SectionFilierRepository sectionfilierRepository;
	@Autowired
	private FiliereRepository filierRepository;
	@Autowired
	private SectionRepository sectionRepository;
	
	// Get all dateRepository
	@GetMapping("")
	public List<SectionFilierModel> getAllDate(){
		return sectionfilierRepository.findAll();
	}
	
	// Create dateRepository
	@PostMapping("")
	public SectionFilierModel createSectionFilier(@RequestBody SectionFilierModel date) {
		return sectionfilierRepository.save(date);
	}
	
//get section-filiere by codeFil et CodeSec rest api
  	@GetMapping("{codeFil}/{codeSec}")
  	public SectionFilierModel getSectionFilierByCodeFilAndCodeSec(@PathVariable String codeFil, @PathVariable String codeSec) {
          return sectionfilierRepository.findSectionFilierModelByFiliere_CodeFilAndSection_codeSec(codeFil, codeSec);
  	}
  	
  //get section-filiere by codeFil rest api
  	@GetMapping("allSections/{codeFil}")
  	public List<SectionFilierModel> getAllSectionsByCodeFiliere(@PathVariable String codeFil) {
          return sectionfilierRepository.findSectionFilierModelByFiliere_codeFil(codeFil);
  	}
  	
  //get section-filiere by designation rest api
  	@GetMapping("designation/{designation}")
  	public List<SectionFilierModel> getSectionFilierByDesignation(@PathVariable String designation) {
          return sectionfilierRepository.findSectionFilierModelByFiliere_designation(designation);
  	}

// Supprimer Section - Filiere :	
  	@DeleteMapping("{codeFil}/{codeSec}")
  	public ResponseEntity<ModuleModel> supprimerSectionFiliere(@PathVariable String codeFil, @PathVariable String codeSec) {
  		SectionFilierModel section_filiereExistant = sectionfilierRepository.findSectionFilierModelByFiliere_CodeFilAndSection_codeSec(codeFil, codeSec);
  		if (section_filiereExistant == null) {
  			throw new ResourceNotFoundException("Section - Filiere n'existe pas");
  		}
          
  		sectionfilierRepository.delete(section_filiereExistant);
  		 
  		return ResponseEntity.ok().build();
  	}
  	
/*	// Get dateRepository by ID
	@GetMapping("{id}")
	public ResponseEntity<SectionFilierModel> getSectionFilierById(@PathVariable Long id) {
	 SectionFilierModel date = sectionfilierRepository.findSectionfilierById(id);
				 if (date == null) {
				        throw new ResourceNotFoundException("sectionfilier de CIN: " + id + " n'existe pas");
				    }
				    return ResponseEntity.ok(date);
	}

	// Update Etudiant
	@PutMapping("{id}")
	public ResponseEntity<SectionFilierModel> modifierSectionFilier(@PathVariable Long id, @RequestBody SectionFilierModel date){
		SectionFilierModel dateExistant = sectionfilierRepository.findSectionfilierById(id);
				if (dateExistant == null) {
			        throw new ResourceNotFoundException("Etudiant de CIN: " + id + " n'existe pas");
			    }
		
				 FiliereModel niv=filierRepository.findFilierByCodeFil(date.getFilier().getCodeFil());
				  dateExistant.setFilier(niv);
				  
				  SectionModel sec=sectionRepository.findSectionByCodeSec(date.getSection().getCodeSec());
				  dateExistant.setSection(sec);
				
				SectionFilierModel modifierDate = sectionfilierRepository.save(dateExistant);
		return ResponseEntity.ok(modifierDate);
	}
	//delete professeur rest api
		@DeleteMapping("{id}")
		public ResponseEntity<Map<String, Boolean>> deleteDate(@PathVariable Long id){
			SectionFilierModel etudiant = sectionfilierRepository.findSectionfilierById(id);
			 if (etudiant == null) {
			        throw new ResourceNotFoundException("SectionFilier de CIN: " + id + " n'existe pas");
			    }
			//etudiantRepository.delete(etudiant);
		//	 etudiant.setStatut("Terminer"); // Modification du statut de l'étudiant

			 sectionfilierRepository.save(etudiant); // Enregistrer les modifications
			Map<String, Boolean> reponse = new HashMap<>();
			reponse.put("deleted", Boolean.TRUE);
			
			  return ResponseEntity.ok(reponse);
			
		}
	*/	
				



}
