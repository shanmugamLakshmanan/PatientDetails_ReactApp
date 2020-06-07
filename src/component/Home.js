import React, { Component } from 'react'
import AuthenticationService from "./AuthenticationService";
import  getPatentdata  from "./api/getPatentdata";
class Home extends Component {
constructor(props) {
    super(props)
  
    this.state = {
         
        Greetingmess:''
    }


    this.handlesucces=this.handlesucces.bind(this)
    this.handleerror=this.handleerror.bind(this)

}




componentDidMount()
{
    let name=AuthenticationService.getusername()
       getPatentdata.greetpath(name).then(resp=>
        this.handlesucces(resp)
    

        ).catch((error)=>this.handleerror(error))
    
}

 handlesucces(resp)
{  
 
    this.setState({Greetingmess:resp.data.message}) 
}

handleerror(error)
{
    console.log(error.resp)
    let errorm ='';

    if(error.message)
    {  
        errorm+=error.message
        console.log(errorm);
        
    }
    
    
    if(error.resp && error.resp.data)
    {
        errorm+= error.resp.data.message;

    } 
    
    this.setState({Greetingmess:errorm}) 
} 

    render() {
        return (
            
               <div>
                Welcome to Page!!{/* {this.props.match.params.name}  */}{this.state.Greetingmess}
              {/*  <button  className="btn btn-success" onClick={this.greetpath}>GetWelocme</button>  */}
           {/*      <button  className="btn btn-success" onClick={this.getwelcome}>GetWelocme</button> */}
                </div>
                
            


               
               

        )
    }
}

export default Home