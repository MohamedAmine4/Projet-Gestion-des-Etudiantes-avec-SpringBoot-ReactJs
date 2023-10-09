package applicationWeb.GestionModules;

import java.util.List;

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
import applicationWeb.GestionNiveaux.NiveauModel;
import applicationWeb.GestionNiveauxScolaires.NiveauScolaireModel;
import applicationWeb.GestionProfesseurs.ProfesseurModel;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/modules/")
public class ModuleController {

	@Autowired
	private ModuleRepository moduleRepository;

//get all modules
    @GetMapping("")
    public List<ModuleModel> getAllModules() {
         return moduleRepository.findAll();    
    //http://localhost:8080/api/modules/
    }

//get modules by code niveau scolaires rest api
	@GetMapping("{codeNivSco}")
	public List<ModuleModel> getModulesByCodeNiveauScolaire(@PathVariable String codeNivSco) {
        return moduleRepository.findModulesByCodeNiveauScolaire(codeNivSco);
	}

//get module by id rest api
  	@GetMapping("codeModule/{codeMod}")
  	public ModuleModel getModuleByCodeMod(@PathVariable String codeMod) {
          return moduleRepository.findModuleByCodeMod(codeMod);
  	}

    @GetMapping("{codeFil}/modules")
    public List<ModuleModel> getAllModulesByCodeFil(@PathVariable String codeFil) {
    	return moduleRepository.getAllByNiveauScolaire_Filiere_CodeFil(codeFil);
    }

    
//create module rest api  // @RequestParam
	@PostMapping("")
	public ModuleModel createModule(@RequestBody ModuleModel module) {
		return moduleRepository.save(module);
	}

//	@GetMapping("{codeMod}")
//	public ResponseEntity<ModuleModel> getModuleById(@PathVariable String codeMod) {
//		ModuleModel module = moduleRepository.findModuleByCodeMod(codeMod);
//		if (module == null) {
//			throw new ResourceNotFoundException("module de codeMod: " + codeMod + " n'existe pas");
//		}
//		return ResponseEntity.ok(module);
//	}

//Modifier module :
	@PutMapping("{codeMod}")
	public ResponseEntity<ModuleModel> modifierModule(@PathVariable String codeMod, @RequestBody ModuleModel module) {
		ModuleModel moduleExistant = moduleRepository.findModuleByCodeMod(codeMod);
		if (moduleExistant == null) {
			throw new ResourceNotFoundException("module  de codeMod: " + codeMod + " n'existe pas");
		}
        
		moduleExistant.setNomMod(module.getNomMod());
		moduleExistant.setNbTps(module.getNbTps());
       moduleExistant.setNbControles(module.getNbControles());
       moduleExistant.setNbExams(module.getNbExams());
       moduleExistant.setCoeffTps(module.getCoeffTps());
       moduleExistant.setCoeffControles(module.getCoeffControles());
       moduleExistant.setCoeffExams(module.getCoeffExams());
//       moduleExistant.getNiveauScolaire().getFiliere().setCodeFil(module.getNiveauScolaire().getFiliere().getCodeFil());

		ModuleModel modifierModule = moduleRepository.save(moduleExistant);
		return ResponseEntity.ok(modifierModule);
	}
	
// Supprimer module :	
	@DeleteMapping("{codeMod}")
	public ResponseEntity<ModuleModel> supprimerModule(@PathVariable String codeMod) {
		ModuleModel moduleExistant = moduleRepository.findModuleByCodeMod(codeMod);
		if (moduleExistant == null) {
			throw new ResourceNotFoundException("module  de codeMod: " + codeMod + " n'existe pas");
		}
        
		        moduleRepository.delete(moduleExistant);
		 
		return ResponseEntity.ok().build();
	}
	
	
    
    
}
