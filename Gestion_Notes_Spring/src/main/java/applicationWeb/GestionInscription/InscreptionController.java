package applicationWeb.GestionInscription;
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
import applicationWeb.GestionNiveaux.NiveauModel;
import applicationWeb.GestionNiveaux.NiveauRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/inscreption/")
public class InscreptionController {
	
	

		@Autowired
		private InscreptionRepository inscreptionRepository;
		@Autowired
		private NiveauRepository niveauRepository;
		@Autowired
		private FiliereRepository filierRepository;
		// Get all inscreption
		@GetMapping("")
		public List<InscreptionModel> getAllInscreption(){
			return inscreptionRepository.findAll();
		}
		
		// Create inscreption
		@PostMapping("")
		public InscreptionModel createInscreption(@RequestBody InscreptionModel inscreption) {
			return inscreptionRepository.save(inscreption);
		}
		
		// Get Etudiant by ID
		@GetMapping("{CIN}")
		public InscreptionModel getInscreptionById(@PathVariable String CIN) {
			return  inscreptionRepository.findInscreptionByCin(CIN);
		}

		// Update Etudiant
		@PutMapping("{CIN}")
		public ResponseEntity<InscreptionModel> modifierInscreption(@PathVariable String CIN, @RequestBody InscreptionModel etudiant){
			InscreptionModel inscreptionExistant = inscreptionRepository.findInscreptionByCin(CIN);
					if (inscreptionExistant == null) {
				        throw new ResourceNotFoundException("Etudiant de CIN: " + CIN + " n'existe pas");
				    }
			
//					 NiveauModel niv=niveauRepository.findNiveauByCodeNiv(etudiant.getNiveau().getCodeNiv());
//					    inscreptionExistant.setNiveau(niv);
					    
					    FiliereModel fil=filierRepository.findFilierByCodeFil(etudiant.getFilier().getCodeFil());
					    inscreptionExistant.setFilier(fil); 
					inscreptionExistant.setDateNaissance(etudiant.getDateNaissance());
				   
					inscreptionExistant.setNom(etudiant.getNom());
					inscreptionExistant.setPrenom(etudiant.getPrenom());
					
			
					InscreptionModel modifierInscreption = inscreptionRepository.save(inscreptionExistant);
			return ResponseEntity.ok(modifierInscreption);
		}
		//delete professeur rest api
			@DeleteMapping("{CIN}")
			public ResponseEntity<Map<String, Boolean>> deleteEtudiant(@PathVariable String CIN){
				InscreptionModel inscreption = inscreptionRepository.findInscreptionByCin(CIN);
				 if (inscreption == null) {
				        throw new ResourceNotFoundException("Etudiant de CIN: " + CIN + " n'existe pas");
				    }
				//etudiantRepository.delete(etudiant);
				// inscreption.setStatut("Terminer"); // Modification du statut de l'étudiant

				 inscreptionRepository.save(inscreption); // Enregistrer les modifications
				Map<String, Boolean> reponse = new HashMap<>();
				reponse.put("deleted", Boolean.TRUE);
				
				  return ResponseEntity.ok(reponse);
				
			}
			
			
}
