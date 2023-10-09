package applicationWeb.GestionFilieres;

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
import applicationWeb.GestionNiveauxScolaires.NiveauScolaireModel;
import applicationWeb.GestionNiveauxScolaires.NiveauScolaireRepository;
import applicationWeb.GestionProfesseurs.ProfesseurModel;
import applicationWeb.GestionResponsables.ResponsableModel;
import applicationWeb.GestionResponsables.ResponsableRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/filieres/")
public class FiliereController {

	
	@Autowired
	private FiliereRepository filiereRepository;
	@Autowired
	private ResponsableRepository responsableRepository;
	@Autowired
	private NiveauScolaireRepository niveauScolaireRepository;
	@Autowired
	private ModuleRepository moduleRepository;
	
//get all filieres
    @GetMapping("")
    public List<FiliereModel> getAllFilieres() {
         return filiereRepository.findAll();    
    // http://localhost:8080/api/filieres/
    }
    

 //create filiere rest api  // @RequestParam


//get filieres by code niveau rest api
	@GetMapping("{codeNiv}")
	public List<FiliereModel> getFilieresByCodeNiveau(@PathVariable String codeNiv) {
        return filiereRepository.findFilieresByCodeNiveau(codeNiv);
	}
	


//create filiere rest api  // @RequestParam
	@PostMapping("")
	public FiliereModel createFilier(@RequestBody FiliereModel filier) {
		
	// La valeur par défaut "CN47852".	
	    ResponsableModel newResponsable = responsableRepository.findResponsableByCin("CN47852");
	    filier.setResponsable(newResponsable);
		
		return filiereRepository.save(filier);
	}

//get Filiere by id rest api
  	@GetMapping("codeFiliere/{codeFil}")
  	public FiliereModel getFilierById(@PathVariable String codeFil) {
          return filiereRepository.findFilierByCodeFil(codeFil);
  	}
	
	@GetMapping("niveau/{codeNiv}")
	public List<FiliereModel> getFilierNiveau(@PathVariable String codeNiv){
		return filiereRepository.findFilieresByCodeNiveau(codeNiv);
	}
	
	@GetMapping("responsable/{cin}")
	public List<FiliereModel> getAllFiliereByCinRespo(@PathVariable String cin){
		return filiereRepository.findFilieresByCINResponsable(cin);
	}
	
	// Update Filier
	@PutMapping("{codeFil}")
	public ResponseEntity<FiliereModel> modifierFilier(@PathVariable String codeFil, @RequestBody FiliereModel filier) {
	    FiliereModel filierExistant = filiereRepository.findFilierByCodeFil(codeFil);
	    if (filierExistant == null) {
	        throw new ResourceNotFoundException("Filier de codeFil: " + codeFil + " n'existe pas");
	    }
	
	  //  Niveau niv=niveauRepository.findNiveauByCodeNiv(filier.getNiveau().getCodeNiv());
	    //filierExistant.setNiveau(niv);
	    
//	    filierExistant.setCodeFil(filier.getCodeFil());
	    
//	 ResponsableModel niv=responsableRepository.findResponsableByCin(filier.getResponsable().getCin());
//	  filierExistant.setResponsable(niv);
	   // filierExistant.setCin(filier.getCin());
	    
        ResponsableModel newRespo = responsableRepository.findResponsableByCin(filier.getResponsable().getCin());
        filierExistant.setResponsable(newRespo);
	    
	    filierExistant.setDesignation(filier.getDesignation());
	    filierExistant.setStatut(filier.getStatut());
	   
	   // filierExistant.setCodeNiv(filier.getCodeNiv());
	   
	    FiliereModel modifierFilier = filiereRepository.save(filierExistant);
	    return ResponseEntity.ok(modifierFilier);
	}
	
	
// Supprimer une filière :
	@DeleteMapping("{codeFil}")
	public ResponseEntity<FiliereModel> supprimerFiliere(@PathVariable String codeFil) {
	    FiliereModel filiereExistant = filiereRepository.findFilierByCodeFil(codeFil);
	    if (filiereExistant == null) {
	        throw new ResourceNotFoundException("filiere de codeFil: " + codeFil + " n'existe pas");
	    }

	    List<NiveauScolaireModel> niveauxScolaires = niveauScolaireRepository.findNiveauxScolairesByCodeFiliere(codeFil);
	    for (NiveauScolaireModel niveauScolaire : niveauxScolaires) {
	        List<ModuleModel> modules = moduleRepository.findModulesByCodeNiveauScolaire(niveauScolaire.getCodeNivSco());
	        for (ModuleModel module : modules) {
	            moduleRepository.delete(module);
	        }
	        niveauScolaireRepository.delete(niveauScolaire);
	    }

	    filiereRepository.delete(filiereExistant);

	    return ResponseEntity.ok().build();
	}

}
