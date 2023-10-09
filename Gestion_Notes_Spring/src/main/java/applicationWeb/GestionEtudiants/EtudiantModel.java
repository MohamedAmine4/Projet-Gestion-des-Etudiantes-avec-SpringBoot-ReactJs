package applicationWeb.GestionEtudiants;
import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import applicationWeb.GestionFilieres.FiliereModel;
import applicationWeb.GestionNiveaux.NiveauModel;
import applicationWeb.GestionNotesNormale.NoteNormaleModel;

@Entity
@Table(name = "Etudiant")
public class EtudiantModel {
	
    @Id
    private String cin;
    private String nom;
    private String prenom;
    private Date dateNaissance;
    private String telephone;
    private String email;
    private String nationalite;
    private String ville;
    private String sexe;
    private String statut;
    private String login;
    private String password;
    private String section;
    
//    @OneToMany(mappedBy = "etudiant")
//    private List<NoteNormaleModel> notes;
    
	@ManyToOne
    @JoinColumn(name = "codeFil", referencedColumnName = "codeFil")
    private FiliereModel filiere;

    // Constructeurs, getters et setters

    public EtudiantModel() {
    }

    public EtudiantModel(String cin, String nom, String prenom) {
        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
    }

    // Getter et Setter pour cin

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }

    // Getter et Setter pour nom

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    // Getter et Setter pour prenom

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

	public FiliereModel getFiliere() {
		return filiere;
	}

	public void setFiliere(FiliereModel filiere) {
		this.filiere = filiere;
	}

	public Date getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNationalite() {
		return nationalite;
	}

	public void setNationalite(String nationalite) {
		this.nationalite = nationalite;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public String getSexe() {
		return sexe;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

	public String getStatut() {
		return statut;
	}

	public void setStatut(String statut) {
		this.statut = statut;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSection() {
		return section;
	}

	public void setSection(String section) {
		this.section = section;
	}

     
    
}

