import  React,{Component} from 'react'
import Login from './Login'
import  './css/Login.css'
import history from './history'
import Home from './Home'
import { PatientList } from "./PatientList";
import {Router, Route,Switch} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Logout  from './Logout'
import  Sighnup from './Sighnup'
import AuthenticateRoute from './AuthenticateRoute'
import  UpdatePatient from './UpdatePatient'



 class PatientApp extends Component {
    render() {
      
        return (
       
        <Router history={history}>
             <Header></Header>
    <div >

     
      <Switch>
                        <Route exact path="/"  component={Login}></Route>  
                        <Route path="/welcome"   component={Login}></Route>  
                        <AuthenticateRoute path="/home"  component={Home}></AuthenticateRoute>                    
                        <AuthenticateRoute path="/patdet"  component={PatientList}></AuthenticateRoute>  
                        <AuthenticateRoute path="/Logout"  component={Logout}></AuthenticateRoute>  
                        <AuthenticateRoute path="/update/:id" component={UpdatePatient} ></AuthenticateRoute>
                        <Route  path="/Sighnup" component={Sighnup} ></Route>
                        <Route  component={ErrorComponenet}></Route>
                  </Switch>
                  <Footer></Footer>
      
    </div>

  </Router>
               
        )
    }
}
function ErrorComponenet()
{
    return(

        <div style={{color:'red'}}>oops Something went Wrong.Please Contact Help desk-1800000-4545-45454</div>
    )
}



 
 export default PatientApp

 


