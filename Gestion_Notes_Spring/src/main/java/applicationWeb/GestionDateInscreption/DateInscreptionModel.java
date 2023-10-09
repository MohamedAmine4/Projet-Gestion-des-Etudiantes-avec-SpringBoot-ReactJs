package applicationWeb.GestionDateInscreption;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "DateInscreption")
public class DateInscreptionModel {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private Date dateInscreption;
	
	public DateInscreptionModel() {}

	public DateInscreptionModel(int id, Date dateInscreption) {
		super();
		this.id = id;
		this.dateInscreption = dateInscreption;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDateInscreption() {
		return dateInscreption;
	}

	public void setDateInscreption(Date dateInscreption) {
		this.dateInscreption = dateInscreption;
	}
	
}
