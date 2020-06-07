import  history  from "./history";
import axios from 'axios'
class AuthenticationService 
    {
        /* registersuccesfulllogin(username,password)
        {
        sessionStorage.setItem("username",username);
       
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
        }
 */
      
              /* basicAuthent(username, password) {
           
                return axios.get(`http://localhost:8080/basicauth`,
                    { 
                        headers: { 
                            authorization: this.createBasicAuthToken(username, password),
                          'Access-Control-Allow-Origin': '*',       
                          'Access-Control-Request-Method':'OPTIONS',
                          'Access-Control-Request-Headers': 'Special-Request-Header',
           
                        
                             crossdomain:true 
                        }
                    
                    })
            }
             */
            
           
          
            executejwtAuthentication(username, password) {
              
                    return axios.post(`http://localhost:8080/authenticate`,
                        {             
                            username,
                            password,
                       
                           
                        })
                        }



                        
                        registerjwtsuccesfulllogin(username,token)
                        {
                           sessionStorage.setItem("username",username);
       
                            this.setupAxiosInterceptors(this.createJwtAuthToken(token))
                        }
    
          

        logout()
            {
                let user=sessionStorage.getItem('username')
                if(user!==null)
              {
               sessionStorage.removeItem('username')
               history.push('/Logout')
              }

            }

            Isuerloggedin()
            {
                let user=sessionStorage.getItem('username')
                
                if(user===null) 
                {return false}
                else
                  return true
            }



            getusername()
            {
           
                let user= sessionStorage.getItem('username')
                return user
             
            }
 
               /* createBasicAuthToken(username, password) {
                return 'Basic ' + window.btoa(username + ":" + password)
            } */




            createJwtAuthToken(token)
                {
                    return 'Bearer ' + token
                }
           






            setupAxiosInterceptors(token) {
                axios.interceptors.request.use(
                    (config) => {
                        if (this.Isuerloggedin()) {
                        
                            config.headers.authorization = token
                             
                            
                            
                        }
                        return config
                    }
                )
            }
        

}

export default new AuthenticationService()
