import React,{Component} from 'react'
import {Link} from'react-router-dom'
import  history  from "./history";
import AuthenticationService from './AuthenticationService';




 
class Login extends Component
{
constructor(props) {
    super(props)

    this.state = {
         userId:'',
         password:'',
         loginfailed:false,
         loginSucces:false,
         defaultlogin:""
        
        
    }

    this.onChange=this.onChange.bind(this)
    this.loginhandler=this.loginhandler.bind(this)
}


 




/* loginhandler() {

    AuthenticationService.basicAuthent(this.state.userId,this.state.password).then( ()=>
    {
        AuthenticationService.registersuccesfulllogin(this.state.userId,this.state.password)
        this.setState({defaultlogin:'success'}) 
        history.push('/home')
       
      
 
    }
).catch(
    ()=>  
    { this.setState({loginfailed:true})
    this.setState({defaultlogin:'failed'})
}
)
} */

loginhandler() {

        AuthenticationService.executejwtAuthentication(this.state.userId,this.state.password).then( (response)=>
            {
                 
                AuthenticationService.registerjwtsuccesfulllogin(this.state.userId,response.data.token)
                this.setState({defaultlogin:'success'}) 
                history.push('/home')  
            }
        ).catch(
            ()=>  
            { this.setState({loginfailed:true})
            this.setState({defaultlogin:'failed'})
        }
        )
    }

/* 
    if(this.state.userId === 'shan' && this.state.password === 'dummy')
    {    
        AuthenticationService.registersuccesfulllogin(this.state.userId,this.state.password)
       /*   this.setState({loginSucces:!this.state.loginSucces})  */
       
       
         
      
       
   /*      
    }else 
    {
        this.setState({loginfailed:true})
        this.setState({defaultlogin:'failed'})
        console.log("sucvsssscs" + this.state.log)
        
        
    } */

    


 



onChange=(e)=>
{
 this.setState
    (
        {
            [e.target.name]:e.target.value
            
        }
    )

}

render()
{   
    
    const {userId,password,loginfailed,loginSucces,defaultlogin} =this.state
    
     return(
       <div className="loginc"style={{ position: 'absolute'}}>
      <ShowInfo loginSucces={loginSucces}/>
      <ShowInfo loginfailed={loginfailed}/>
      <ShowInfo defaultlogin={defaultlogin}/>
      
   

     <form>
        <div className='formg'>  
       <label> UserId</label>
       < input id=" text" name="userId" placeholder="UserId"  value={userId} onChange={this.onChange}></input>
        </div>
        <div className='formg'>
       <label>Password</label>
       <input id="password" type="password" name="password" value={password} placeholder="Password" onChange={this.onChange}></input>
        </div>
        <h6 style={{color:'blue'}}>are you a new user? <Link to="/Sighnup">Click here</Link></h6>

        <div className="">
        <button type ="reset" className="btns" >Reset</button>
        <button type="button"  className="btns" onClick={this.loginhandler}>Login</button>
        </div>
      

     
        </form> 
        </div>
        
        
     )

}


}


function ShowInfo(props) {

    if( props.defaultlogin ==='')
    {
       return null
    }
else {


if( props.loginfailed === true)
        {
            return <div  style={{color:'red'}}>Login Failed. </div>
        } 
    }
    

  return null
    }
    
    

 
/* function Showsucces(props)
{

    if(props.loginSucces===true){
     
        return <div style={{color:'green'}}>success</div>


}
return null

} */
 export default Login