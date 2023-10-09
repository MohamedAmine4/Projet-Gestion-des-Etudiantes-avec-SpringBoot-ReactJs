package applicationWeb.GestionDetailsProfsMods;

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
import applicationWeb.GestionProfesseurs.ProfesseurModel;
import applicationWeb.GestionProfesseurs.ProfesseurRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/detailsProfsModules/")
public class DetailProfModController {

	
	@Autowired
	private DetailProfModRepository detailProfModRepository;
	@Autowired
	private ProfesseurRepository professeurRepository;
	@Autowired
	private ModuleRepository moduleRepository;

//get all details professeurs modules
    @GetMapping("")
    public List<DetailProfModModel> getAllDetailsProfsModules() {
         return detailProfModRepository.findAll();    
    // http://localhost:8080/api/detailsProfsModules/
    }

 //ajouter detail professeur module rest api  // @RequestParam
	@PostMapping("")
	public DetailProfModModel ajouterProfesseurModule(@RequestBody DetailProfModModel professeurModule) {
		return detailProfModRepository.save(professeurModule);
	}



//get detail professeur module by cinProf et codeModule rest api
	@GetMapping("{cin}/{codeMod}")
	public DetailProfModModel getProfModuleByCin(@PathVariable String cin, @PathVariable String codeMod) {
        return detailProfModRepository.findDetailProfModModelByProfesseur_CinAndModule_codeMod(cin,codeMod);
	}
	
//get detail professeur module by cinProf rest api
	@GetMapping("{cin}")
	public List<DetailProfModModel> getDetailsProfModuleByCin(@PathVariable String cin) {
        return detailProfModRepository.findDetailProfModModelByProfesseur_Cin(cin);
	}
	
//    existingDetail.getProfesseur().setCin(detailProfModule.getProfesseur().getCin());
//    existingDetail.getModule().setCodeMod(detailProfModule.getModule().getCodeMod());
	
// update details professeur module rest api
	@PutMapping("/{identProf}/{codeModURL}")
	public ResponseEntity<String> updateDetailsProfModule(@PathVariable String identProf, @PathVariable String codeModURL, @RequestBody DetailProfModModel detailProfModule) {
	    DetailProfModModel existingDetail = detailProfModRepository.findDetailProfModModelByProfesseur_CinAndModule_codeMod(identProf, codeModURL);
	    
	    if (existingDetail != null) {
	        // Mettre à jour les détails existants avec les nouvelles valeurs
	        existingDetail.setStatut(detailProfModule.getStatut());
	        
/*	        // Charger l'objet ProfesseurModel correspondant à la nouvelle clé étrangère "cin"
	        ProfesseurModel newProfesseur = professeurRepository.findProfesseurByCin(detailProfModule.getProfesseur().getCin());
	        existingDetail.setProfesseur(newProfesseur);
	        
	        // Charger l'objet ModuleModel correspondant à la nouvelle clé étrangère "codeMod"
	        ModuleModel newModule = moduleRepository.findModuleByCodeMod(detailProfModule.getModule().getCodeMod());
	        existingDetail.setModule(newModule);
*/	
	        // Enregistrer les modifications dans la base de données
	        detailProfModRepository.save(existingDetail);
	
	        return ResponseEntity.ok("Détails du module du professeur mis à jour avec succès.");
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

	
	@DeleteMapping("{cinProf}/{codeModul}")
	public ResponseEntity<Void> deleteDetailsProfModule(@PathVariable String cinProf, @PathVariable String codeModul) {
	    Optional<DetailProfModModel> detailProfMod = Optional.ofNullable(detailProfModRepository.findDetailProfModModelByProfesseur_CinAndModule_codeMod(cinProf, codeModul));

	    if (detailProfMod.isPresent()) {
	        detailProfModRepository.delete(detailProfMod.get());
	        return ResponseEntity.noContent().build();
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

	
	
	


}
