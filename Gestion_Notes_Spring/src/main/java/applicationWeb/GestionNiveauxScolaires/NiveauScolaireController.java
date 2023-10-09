package applicationWeb.GestionNiveauxScolaires;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RestController;

import applicationWeb.ResourceNotFoundException;
import applicationWeb.GestionModules.ModuleModel;
import applicationWeb.GestionModules.ModuleRepository;
import applicationWeb.GestionNiveaux.NiveauModel;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/niveauxScolaires/")
public class NiveauScolaireController {

	
	@Autowired
	private NiveauScolaireRepository niveauScolaireRepository;
	@Autowired
	private ModuleRepository moduleRepository;

//get all niveaux scolaires
    @GetMapping("")
    public List<NiveauScolaireModel> getAllNiveauxScolaires() {
         return niveauScolaireRepository.findAll();    
    //http://localhost:8080/api/niveauxScolaires/
    }
	
//get niveaux scolaires by code filiere rest api
	@GetMapping("scolaires/{codeFil}")
	public List<NiveauScolaireModel> getNiveauxScolairesByCodeFiliere(@PathVariable String codeFil) {
        return niveauScolaireRepository.findNiveauxScolairesByCodeFiliere(codeFil);
	}

//create niveau scolaire rest api  // @RequestParam
	@PostMapping("")
	public NiveauScolaireModel createNiveauScolaire(@RequestBody NiveauScolaireModel niveauScolaire) {
		return niveauScolaireRepository.save(niveauScolaire);
	}
	@GetMapping("niveau/{codeFil}")
	public List<NiveauScolaireModel> getNiveauScolaireNiveau(@PathVariable String codeFil){
		return niveauScolaireRepository.findNiveauxScolairesByCodeFiliere(codeFil);
	}
	
//get Niveau Scolaire by id rest api
  	@GetMapping("{codeNivSco}")
  	public NiveauScolaireModel getNiveauScolaireById(@PathVariable String codeNivSco) {
          return niveauScolaireRepository.findNiveauScolaireByCodeNivSco(codeNivSco);
  	}

	@PutMapping("{codeNivSco}")
	public ResponseEntity<NiveauScolaireModel> modifierNiveauScolaire(@PathVariable String codeNivSco, @RequestBody NiveauScolaireModel niveauScolaire) {
		NiveauScolaireModel niveauScolaireExistant = niveauScolaireRepository.findNiveauScolaireByCodeNivSco(codeNivSco);
		if (niveauScolaireExistant == null) {
			throw new ResourceNotFoundException("Niveau Scolaire de codeNivSco: " + codeNivSco + " n'existe pas");
		}
        
		niveauScolaireExistant.setDesignation(niveauScolaire.getDesignation());

		NiveauScolaireModel modifierNiveauScolaire = niveauScolaireRepository.save(niveauScolaireExistant);
		return ResponseEntity.ok(modifierNiveauScolaire);
	}
	
	
// Supprimer niveau scolaire :	
	@DeleteMapping("{codeNivSco}")
	public ResponseEntity<NiveauScolaireModel> supprimerNiveauScolaire(@PathVariable String codeNivSco) {
		NiveauScolaireModel niveauScolaireExistant = niveauScolaireRepository.findNiveauScolaireByCodeNivSco(codeNivSco);
		if (niveauScolaireExistant == null) {
			throw new ResourceNotFoundException("niveau scolaire de codeNivSco: " + codeNivSco + " n'existe pas");
		}
		
        List<ModuleModel> modules = moduleRepository.findModulesByCodeNiveauScolaire(codeNivSco);
        for (ModuleModel module : modules) {
        	moduleRepository.delete(module);
        }
        
		niveauScolaireRepository.delete(niveauScolaireExistant);
		 
		return ResponseEntity.ok().build();
	}
	
// Supprimer niveau scolaire :		
//	@DeleteMapping("{codeNivSco}")
//	public ResponseEntity<NiveauScolaireModel> supprimerNiveauScolaire(@PathVariable String codeNivSco) {
//	    NiveauScolaireModel niveauScolaireExistant = niveauScolaireRepository.findNiveauScolaireByCodeNivSco(codeNivSco);
//	    if (niveauScolaireExistant == null) {
//	        throw new ResourceNotFoundException("niveau scolaire de codeNivSco: " + codeNivSco + " n'existe pas");
//	    }
//
//	    moduleRepository.deleteAllModulesByCodeNivSco(codeNivSco);
//
//	    niveauScolaireRepository.delete(niveauScolaireExistant);
//
//	    return ResponseEntity.ok().build();
//	}

}
