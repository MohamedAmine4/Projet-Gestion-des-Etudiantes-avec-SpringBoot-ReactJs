package applicationWeb.GestionProfesseurs;

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
import applicationWeb.GestionDetailsProfsMods.DetailProfModModel;
import applicationWeb.GestionDetailsProfsMods.DetailProfModRepository;
import applicationWeb.GestionNotesNormale.NoteNormaleModel;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/professeurs/")
//@Table(name = "Professeur")
public class ProfesseurController {

	
	@Autowired
	private ProfesseurRepository professeurRepository;
	
	@Autowired
	private DetailProfModRepository detailProfModRepository;

//get all professeurs
    @GetMapping("")
    public List<ProfesseurModel> getAllProfesseurs() {
         return professeurRepository.findAll();    
    //http://localhost:8080/api/employees/
    }

 //create professeur rest api  // @RequestParam
	@PostMapping("")
	public ProfesseurModel createProfesseur(@RequestBody ProfesseurModel professeur) {
//		professeur.setCIN(id);
		return professeurRepository.save(professeur);
	}
	
//get professeur by id rest api
	@GetMapping("{cin}")
	public ProfesseurModel getProfesseurById(@PathVariable String cin) {
        return professeurRepository.findProfesseurByCin(cin);
	}
	
//update professeur rest api
	@PutMapping("{cin}")
	public ResponseEntity<ProfesseurModel> updateProfesseur(@PathVariable String cin , @RequestBody ProfesseurModel professeurDetails){
		ProfesseurModel professeur=professeurRepository.findProfesseurByCin(cin);
		
//				.orElseThrow(() -> new ResourceNotFoundException("Professeur not exist with CIN : "+cin));
		
		professeur.setCin(professeurDetails.getCin());
		professeur.setNom(professeurDetails.getNom());
		professeur.setPrenom(professeurDetails.getPrenom());
		professeur.setDateNaissance(professeurDetails.getDateNaissance());
		professeur.setTelephone(professeurDetails.getTelephone());
		professeur.setEmail(professeurDetails.getEmail());
		professeur.setNationalite(professeurDetails.getNationalite());
		professeur.setVille(professeurDetails.getVille());
		professeur.setSexe(professeurDetails.getSexe());
		professeur.setStatut(professeurDetails.getStatut());
		professeur.setLogin(professeurDetails.getLogin());
		professeur.setPassword(professeurDetails.getPassword());
		
		ProfesseurModel updateProf=professeurRepository.save(professeur);
		   
		    return ResponseEntity.ok(updateProf);
	}
	
//delete professeur rest api
	@DeleteMapping("{cin}")
	public void deleteProfesseur(@PathVariable String cin){
		ProfesseurModel professeur=professeurRepository.findProfesseurByCin(cin);
		if (professeur == null) {
			throw new ResourceNotFoundException("Professeur de cin : " + cin + " n'existe pas");
		}  
		
	    List<DetailProfModModel> profModules = detailProfModRepository.findDetailProfModModelByProfesseur_Cin(cin);
	    for (DetailProfModModel profModule : profModules) {
	    	detailProfModRepository.delete(profModule);
	    }
		
		professeurRepository.delete(professeur);
		

		
	}
	
	
	


}
