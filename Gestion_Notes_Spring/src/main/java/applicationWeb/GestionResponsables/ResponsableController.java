package applicationWeb.GestionResponsables;

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
import applicationWeb.GestionEtudiants.EtudiantModel;

//@CrossOrigin(origins = "*")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/responsables/")
public class ResponsableController {
	@Autowired
	private ResponsableRepository responsableRepository;
	
	//get All Responsable
	@GetMapping("")
	public List<ResponsableModel> getAllResponsable(){
		
		return responsableRepository.findAll();
	}
	
	// Create responsable
		@PostMapping("")
		public ResponsableModel createResposable(@RequestBody ResponsableModel responsable) {
			return responsableRepository.save(responsable);
		}
		
//get responsable by id rest api
  	@GetMapping("{cin}")
  	public ResponsableModel getResponsableById(@PathVariable String cin) {
          return responsableRepository.findResponsableByCin(cin);
  	}		

		// Update responsable
		@PutMapping("{CIN}")
		public ResponseEntity<ResponsableModel> modifierResponsable(@PathVariable String CIN, @RequestBody ResponsableModel responsable){
			ResponsableModel responsableExistant = responsableRepository.findResponsableByCin(CIN);
					if (responsableExistant == null) {
				        throw new ResourceNotFoundException("Etudiant de CIN: " + CIN + " n'existe pas");
				    }
			
					responsableExistant.setEmail(responsable.getEmail());
					responsableExistant.setDateNaissance(responsable.getDateNaissance());
					responsableExistant.setLogin(responsable.getLogin());
					responsableExistant.setNationalite(responsable.getNationalite());
					responsableExistant.setNom(responsable.getNom());
					responsableExistant.setPrenom(responsable.getPrenom());
					responsableExistant.setPassword(responsable.getPassword());
					responsableExistant.setStatut(responsable.getStatut());
					responsableExistant.setTelephone(responsable.getTelephone());
					responsableExistant.setVille(responsable.getVille());
			
			ResponsableModel modifierResponsable = responsableRepository.save(responsableExistant);
			return ResponseEntity.ok(modifierResponsable);
		}
		//delete responsable rest api
//			@DeleteMapping("{CIN}")
//			public ResponseEntity<Map<String, Boolean>> deleteResponsable(@PathVariable String CIN){
//				ResponsableModel responsable = responsableRepository.findResponsableByCin(CIN);
//				 if (responsable == null) {
//				        throw new ResourceNotFoundException("responsable de CIN: " + CIN + " n'existe pas");
//				    }
//				 
//				 responsableRepository.delete(responsable);
//			//	 responsable.setStatut("Terminer"); // Modification du statut de l'étudiant
//
//				 responsableRepository.save(responsable); // Enregistrer les modifications
//				Map<String, Boolean> reponse = new HashMap<>();
//				reponse.put("deleted", Boolean.TRUE);
//				
//				  return ResponseEntity.ok(reponse);
//				
//			}

		
// Supprimer Responsable :	
	@DeleteMapping("{cin}")
	public ResponseEntity<ResponsableModel> supprimerResponsable(@PathVariable String cin) {
		ResponsableModel responsableExistant = responsableRepository.findResponsableByCin(cin);
		if (responsableExistant == null) {
			throw new ResourceNotFoundException("Responsable de cin : " + cin + " n'existe pas");
		}
        
		responsableRepository.delete(responsableExistant);
		 
		return ResponseEntity.ok().build();
	}

}
