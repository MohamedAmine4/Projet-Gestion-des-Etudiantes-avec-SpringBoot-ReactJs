package applicationWeb.GestionNiveaux;

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
import applicationWeb.GestionEtudiants.EtudiantModel;
import applicationWeb.GestionFilieres.FiliereModel;
import applicationWeb.GestionFilieres.FiliereRepository;
import applicationWeb.GestionModules.ModuleModel;
import applicationWeb.GestionModules.ModuleRepository;
import applicationWeb.GestionNiveauxScolaires.NiveauScolaireModel;
import applicationWeb.GestionNiveauxScolaires.NiveauScolaireRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/niveaux/")
public class NiveauController {

	
	@Autowired
	private NiveauRepository niveauRepository;
	@Autowired
	private FiliereRepository filiereRepository;
	@Autowired
	private NiveauScolaireRepository niveauScolaireRepository;
	@Autowired
	private ModuleRepository moduleRepository;

//get all niveaux
    @GetMapping("")
    public List<NiveauModel> getAllNiveaux() {
         return niveauRepository.findAll();    
    //http://localhost:8080/api/niveaux/
    }

 //create niveau rest api  // @RequestParam
	@PostMapping("")
	public NiveauModel createNiveau(@RequestBody NiveauModel niveau) {
		return niveauRepository.save(niveau);
	}
	
	
//get Niveau by id rest api
  	@GetMapping("{codeNiv}")
  	public NiveauModel getNiveauById(@PathVariable String codeNiv) {
          return niveauRepository.findNiveauByCodeNiv(codeNiv);
  	}

// Update Niveau
	@PutMapping("{codeNiv}")
	public ResponseEntity<NiveauModel> modifierNiveau(@PathVariable String codeNiv, @RequestBody NiveauModel niveau) {
	    NiveauModel niveauExistant = niveauRepository.findNiveauByCodeNiv(codeNiv);
	    if (niveauExistant == null) {
	        throw new ResourceNotFoundException("Niveau de codeNiv: " + codeNiv + " n'existe pas");
	    }

	 //   niveauExistant.setCodeNiv(niveau.getCodeNiv());
	    niveauExistant.setDesignation(niveau.getDesignation());
	    niveauExistant.setStatut(niveau.getStatut());
	    NiveauModel modifierNiveau = niveauRepository.save(niveauExistant);
	    return ResponseEntity.ok(modifierNiveau);
	}

	
// Supprimer un niveau :
	@DeleteMapping("{codeNiv}")
	public ResponseEntity<NiveauModel> supprimerNiveau(@PathVariable String codeNiv) {
	    NiveauModel niveauExistant = niveauRepository.findNiveauByCodeNiv(codeNiv);
	    if (niveauExistant == null) {
	        throw new ResourceNotFoundException("niveau de codeNiv : " + codeNiv + " n'existe pas");
	    }
	    
	    List<FiliereModel> filieres = filiereRepository.findFilieresByCodeNiveau(codeNiv);
	    
	    for (FiliereModel filiere : filieres) {
		    List<NiveauScolaireModel> niveauxScolaires = niveauScolaireRepository.findNiveauxScolairesByCodeFiliere(filiere.getCodeFil());
		    
		    for (NiveauScolaireModel niveauScolaire : niveauxScolaires) {
		        List<ModuleModel> modules = moduleRepository.findModulesByCodeNiveauScolaire(niveauScolaire.getCodeNivSco());
		        
		        for (ModuleModel module : modules) {
		            moduleRepository.delete(module);
		        }
		        niveauScolaireRepository.delete(niveauScolaire);
		    }
		    filiereRepository.delete(filiere);
	   }
	    niveauRepository.delete(niveauExistant);

	    return ResponseEntity.ok().build();
	}
	
}
