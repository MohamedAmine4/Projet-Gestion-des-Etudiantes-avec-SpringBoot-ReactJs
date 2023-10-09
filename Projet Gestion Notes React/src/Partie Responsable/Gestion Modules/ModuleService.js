import axios from "axios"
const MODULE_API_URL ="http://localhost:8080/api/modules/";

class ModuleService {

getModule(){
  return axios.get(MODULE_API_URL);
}
createModule(module){
  return axios.post(MODULE_API_URL,module);
}
getModuleById(moduleId){
  return axios.get(MODULE_API_URL + 'codeModule/' + moduleId);

}
updateModule(module, moduleId){
  return axios.put(MODULE_API_URL + moduleId ,module);
}

deleteModule(codModule){
  return axios.delete(MODULE_API_URL + '/' + codModule);
}

}

const moduleService = new ModuleService();
export default moduleService;
