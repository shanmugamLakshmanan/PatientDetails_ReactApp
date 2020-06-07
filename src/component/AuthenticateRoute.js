import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService';
import { Route, Redirect } from 'react-router-dom'


 class AuthenticateRoute extends Component {
    render() {
        
        if(AuthenticationService.Isuerloggedin())
        

         return   <Route{...this.props}></Route> 
    else
    
        return <Redirect to="/welcome"></Redirect>
    
}
 }

export default AuthenticateRoute
