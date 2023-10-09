import axios from "axios";

const NOTENormale_API_BASE_URL="http://localhost:8080/api/notesNormale/";
const NOTERattrapage_API_BASE_URL="http://localhost:8080/api/notesRattrapage/";
const Absence_API_BASE_URL="http://localhost:8080/api/absences/";

class NoteService {

    getNotesNormale(){
        return axios.get(NOTENormale_API_BASE_URL);
    }

    getNotesNormaleByCinEtu(cinEtu){
        return axios.get(NOTENormale_API_BASE_URL + '/' + cinEtu );
    }

    getNotesRattrapage(){
        return axios.get(NOTERattrapage_API_BASE_URL);
    }

    addEtudiantToNoteRattrapage(cinEtu,codeModule) {
        return axios.post(NOTERattrapage_API_BASE_URL + '/' + cinEtu + '/' +codeModule);
    }

    deleteEtudiantToNoteRattrapage(cinEtu,codeModule){
        return axios.delete(NOTERattrapage_API_BASE_URL + '/' + cinEtu + '/' +codeModule);
    }
    
    getNotesNormaleByCinAndCodeMod(cin, codeM){
        return axios.get(NOTENormale_API_BASE_URL + '/' + cin + '/' +codeM);
    }

    updateNoteNormaleValue(cinEtu, codMod, noteUpdate) {
        return axios.put(`http://localhost:8080/api/notesNormale/${cinEtu}/${codMod}`, noteUpdate);
      }

    getNotesRattrapageByCinAndCodeMod(cin, codeM){
        return axios.get(NOTERattrapage_API_BASE_URL+ '/' + cin + '/' +codeM);
    }

    updateNoteRattrapageValue(cinEtu, codMod, noteUpdate) {
        return axios.put(`http://localhost:8080/api/notesRattrapage/${cinEtu}/${codMod}`, noteUpdate);
      }
    
    createNoteRattrapage(cinEtu, codMod){
        return axios.post(`http://localhost:8080/api/notes/${cinEtu}/${codMod}`);
    }

    updateNoteNormaleMoyenne(cinEtu, codMod, moyen, resultat) {
        return axios.put(`http://localhost:8080/api/notesNormale/moyenne/${cinEtu}/${codMod}/?moyEtudiant=${moyen}&resultat=${resultat}`);
    }

    updateNoteRattrapageMoyenne(cinEtu, codMod, moyen, resultat) {
        return axios.put(`http://localhost:8080/api/notesRattrapage/moyenne/${cinEtu}/${codMod}/?moyEtudiant=${moyen}&resultat=${resultat}`);
    }

//-------------------------------------------------------------------------------
    getAllAbsences(){
        return axios.get(Absence_API_BASE_URL);
    }

    getAbsencesByCinAndCodeMod(cin, codeM){
        return axios.get(Absence_API_BASE_URL+ '/' + cin + '/' +codeM);
    }

    updateAbsenceValue(cinEtu, codMod, absenceUpdate) {
        return axios.put(`http://localhost:8080/api/absences/${cinEtu}/${codMod}`, absenceUpdate);
      }

//------------------------------------------------------------------
removeNonRattrapageStudentsDansNoteRattrapage(){
        return axios.delete(`http://localhost:8080/api/notesRattrapage/remove-non-rattrapage-students/`);
    }

}
const noteService = new NoteService();
export default noteService;