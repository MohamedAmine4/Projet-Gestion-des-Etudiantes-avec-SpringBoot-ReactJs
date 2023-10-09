package applicationWeb.GestionDateInscreption;
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
@RequestMapping("/api/dateinscreption/")
public class DateInscreptionController {

	@Autowired
	private DateInscreptionRepository dateRepository;
	
	
	// Get all dateRepository
	@GetMapping("")
	public List<DateInscreptionModel> getAllDate(){
		return dateRepository.findAll();
	}
	
	// Create dateRepository
	@PostMapping("")
	public DateInscreptionModel createDate(@RequestBody DateInscreptionModel date) {
		return dateRepository.save(date);
	}
	
	// Get dateRepository by ID
	@GetMapping("{id}")
	public ResponseEntity<DateInscreptionModel> getDateIById(@PathVariable int id) {
	 DateInscreptionModel date = dateRepository.findDateById(id);
				 if (date == null) {
				        throw new ResourceNotFoundException("date d'inscription de id : " + id + " n'existe pas");
				    }
				    return ResponseEntity.ok(date);
	}

	// Update date d'inscription
	@PutMapping("{id}")
	public ResponseEntity<DateInscreptionModel> modifierDate(@PathVariable int id, @RequestBody DateInscreptionModel date){
		DateInscreptionModel dateExistant = dateRepository.findDateById(id);
				if (dateExistant == null) {
			        throw new ResourceNotFoundException("date d'inscription de id : " + id + " n'existe pas");
			    }
			
				dateExistant.setDateInscreption(date.getDateInscreption());
				
		DateInscreptionModel modifierDate = dateRepository.save(dateExistant);
		return ResponseEntity.ok(modifierDate);
	}
		

// Supprimer date d'inscription :	
	@DeleteMapping("{id}")
	public ResponseEntity<DateInscreptionModel> supprimerDateInscription(@PathVariable int id) {
		DateInscreptionModel dateInscripExistant = dateRepository.findDateById(id);
		if (dateInscripExistant == null) {
			throw new ResourceNotFoundException("date Inscription de id: " + id + " n'existe pas");
		}
        
		dateRepository.delete(dateInscripExistant);
		 
		return ResponseEntity.ok().build();
	}
		



}
