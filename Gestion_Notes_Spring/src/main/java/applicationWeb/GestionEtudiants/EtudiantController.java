package applicationWeb.GestionEtudiants;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import applicationWeb.ResourceNotFoundException;
import applicationWeb.GestionAbsences.AbsenceModel;
import applicationWeb.GestionAbsences.AbsenceRepository;
import applicationWeb.GestionFilieres.FiliereModel;
import applicationWeb.GestionFilieres.FiliereRepository;
import applicationWeb.GestionModules.ModuleModel;
import applicationWeb.GestionModules.ModuleRepository;
import applicationWeb.GestionNiveaux.NiveauModel;
import applicationWeb.GestionNiveaux.NiveauRepository;
import applicationWeb.GestionNotesNormale.NoteNormaleModel;
import applicationWeb.GestionNotesNormale.NoteNormaleRepository;
import applicationWeb.GestionNotesRattrapage.NoteRattrapageModel;
import applicationWeb.GestionNotesRattrapage.NoteRattrapageRepository;
import applicationWeb.GestionProfesseurs.ProfesseurModel;

//@CrossOrigin(origins = "*")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/etudiants/")
public class EtudiantController {

    @Autowired
    private EtudiantRepository etudiantRepository;
    
    @Autowired
    private ModuleRepository moduleRepository;
    @Autowired
    private NoteNormaleRepository noteNormaleRepository;
    @Autowired
    private NoteRattrapageRepository noteRattrapageRepository;
	@Autowired
	private NiveauRepository niveauRepository;
	@Autowired
	private FiliereRepository filierRepository;
	@Autowired
	private AbsenceRepository absenceRepository;

    // Endpoint pour récupérer tous les étudiants
    @GetMapping("")
    public List<EtudiantModel> getAllEtudiants() {
        return etudiantRepository.findAll();
      //  http://localhost:8080/api/etudiants/
    } 

    
  //get Etudiant by id rest api
  	@GetMapping("{cin}")
  	public EtudiantModel getEtudiantById(@PathVariable String cin) {
          return etudiantRepository.findEtudiantByCin(cin);
  	}

	// Update Etudiant
	@PutMapping("{CIN}")
	public ResponseEntity<EtudiantModel> modifierEtudiant(@PathVariable String CIN, @RequestBody EtudiantModel etudiant){
		EtudiantModel etudiantExistant = etudiantRepository.findEtudiantByCin(CIN);
				if (etudiantExistant == null) {
			        throw new ResourceNotFoundException("Etudiant de CIN: " + CIN + " n'existe pas");
			    }
		
				
			  NiveauModel niv=niveauRepository.findNiveauByCodeNiv(etudiant.getFiliere().getNiveau().getCodeNiv());
			    etudiantExistant.getFiliere().setNiveau(niv);
			    
			    FiliereModel fil=filierRepository.findFilierByCodeFil(etudiant.getFiliere().getCodeFil());
			    etudiantExistant.setFiliere(fil);  
				
		etudiantExistant.setEmail(etudiant.getEmail());
		etudiantExistant.setDateNaissance(etudiant.getDateNaissance());
		etudiantExistant.setLogin(etudiant.getLogin());
		etudiantExistant.setNationalite(etudiant.getNationalite());
		etudiantExistant.setNom(etudiant.getNom());
		etudiantExistant.setPrenom(etudiant.getPrenom());
		etudiantExistant.setPassword(etudiant.getPassword());
		etudiantExistant.setStatut(etudiant.getStatut());
		etudiantExistant.setTelephone(etudiant.getTelephone());
		etudiantExistant.setVille(etudiant.getVille());
		etudiantExistant.setSection(etudiant.getSection());
		EtudiantModel modifierEtudiant = etudiantRepository.save(etudiantExistant);
		return ResponseEntity.ok(modifierEtudiant);
	}
	//delete etudiant rest api
//		@DeleteMapping("{CIN}")
//		public ResponseEntity<Map<String, Boolean>> deleteEtudiant(@PathVariable String CIN){
//			EtudiantModel etudiant = etudiantRepository.findEtudiantByCin(CIN);
//			 if (etudiant == null) {
//			        throw new ResourceNotFoundException("Etudiant de CIN: " + CIN + " n'existe pas");
//			    }
//			//etudiantRepository.delete(etudiant);
//			 etudiant.setStatut("Terminer"); // Modification du statut de l'étudiant
//
//			    etudiantRepository.save(etudiant); // Enregistrer les modifications
//			Map<String, Boolean> reponse = new HashMap<>();
//			reponse.put("deleted", Boolean.TRUE);
//			
//			  return ResponseEntity.ok(reponse);
//			
//		}
	
// Supprimer etudiant :	
	@DeleteMapping("{cin}")
	public ResponseEntity<EtudiantModel> supprimerEtudiant(@PathVariable String cin) {
		EtudiantModel etudiantExistant = etudiantRepository.findEtudiantByCin(cin);
		if (etudiantExistant == null) {
			throw new ResourceNotFoundException("Etudiant de cin : " + cin + " n'existe pas");
		}  
		
	    List<NoteNormaleModel> notes = noteNormaleRepository.findByEtudiant_Cin(cin);
	    for (NoteNormaleModel note : notes) {
	        noteNormaleRepository.delete(note);
	    }
	    
	    List<NoteRattrapageModel> notesRatt = noteRattrapageRepository.findByEtudiant_Cin(cin);
	    for (NoteRattrapageModel noteR : notesRatt) {
	    	noteRattrapageRepository.delete(noteR);
	    }
	    
	    List<AbsenceModel> absences = absenceRepository.findAbsenceModelByEtudiant_Cin(cin);
	    for (AbsenceModel absence : absences) {
	    	absenceRepository.delete(absence);
	    }
        
		etudiantRepository.delete(etudiantExistant);
		 
		return ResponseEntity.ok().build();
	}
   
   
//lorsque vous appelez la méthode "ajouterEtudiant" avec un objet "Etudiant", cela créera automatiquement les notes pour tous les modules associés à la filière de l'étudiant.
// et aussi pour la table "Presence"
 @PostMapping("")
   public void ajouterEtudiant(@RequestBody EtudiantModel etudiant) {
        etudiantRepository.save(etudiant);

        List<ModuleModel> modules = moduleRepository.getAllByNiveauScolaire_Filiere_CodeFil(etudiant.getFiliere().getCodeFil());

        for (ModuleModel module : modules) {
            NoteNormaleModel note = new NoteNormaleModel();
            note.setEtudiant(etudiant);
            note.setModule(module);
            
            AbsenceModel absence = new AbsenceModel();
            absence.setEtudiant(etudiant);
            absence.setModule(module);

            noteNormaleRepository.save(note);
            absenceRepository.save(absence);
        }
        
    }

 // Récupérer tous les étudiants qui ont la même filière :
 @GetMapping("filiere/{codeFil}")
 public List<EtudiantModel> getEtudiantsByFiliere(@PathVariable String codeFil) {
     return etudiantRepository.findEtudiantByCodeFil(codeFil);
 }

}

