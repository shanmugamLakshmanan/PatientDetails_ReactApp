import axios from 'axios'
 
class getPatentdata
 {
  
    greetpath(name)
 {
                
     return axios.get(`http://localhost:8080/greeting/${name}`)
    

}
    findAllPatient()
   {  
       return axios.get(`http://localhost:8080/findAllPatient/`)
   }


   findPatientbyId(id)
   {
    return axios.get(`http://localhost:8080/findsinglePatient/${id}`)
   }

   deletePatient(id)
   {
    return axios.delete(`http://localhost:8080/deletePateint/${id}`)
   }

   updatePatient(id,Patient)
   {

    return axios.put(`http://localhost:8080/updatePatient`,Patient)
   }

   addPatient(Patient)
   {
      
    return axios.post(`http://localhost:8080/addnewpatient`,Patient)
   }


}  

export default new getPatentdata()
