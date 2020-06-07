import React, { Component } from 'react'
import getPatentdata from './api/getPatentdata'
import AuthenticationService from "./AuthenticationService"; 
import history from './history'


export class PatientList extends Component {
   
constructor(props) {
    super(props)
   
    this.state = {

        Patientdet :[],
         message:null,
         filter:null

      /*   [{ id:1 ,Name:'shanmuga',Age:24,Street :'Northmadavilagam'},
        { id:2,Name:'shanmuga',Age:24,Street :'Northmadavilagam'},
        { id:3 ,Name:'shanmuga',Age:24,Street :'Northmadavilagam'}
          */
         
       
    
    }
    this.addpat=this.addpat.bind(this)
    this.deletepatient=this.deletepatient.bind(this)
    this.refreshpatientList=this.refreshpatientList.bind(this)
    this.myfilter=this.myfilter.bind(this)
}


deletepatient(id)
{
    getPatentdata.deletePatient(id).then(response => {
      
    this.setState({
        
        message:`Deleted Patient Details Successful ${id}`
               
              
           })
   })
    
}


updatepatient(id)
{
     history.push(`/update/${id}`)

     /* this.setState({
        message:'Patient Deatils Updated Successfully' 
     }) */

}

myfilter()
{
var d=document.getElementById("serach")
}
componentDidMount()
{

     this.refreshpatientList()
}

refreshpatientList()
{
    let name =AuthenticationService.getusername()

    getPatentdata.findAllPatient(name).then(response=>
      {
        
        this.setState({Patientdet:response.data }) 

        this.refreshpatientList() 
      }
  
  
  ) 
}

addpat()
{
    history.push(`/update/${-1}`)
    
   /*  this.setState({
        message:'Patient Added Successfully' 
     }) */
}



    render() {
        return (
            <div className="container">
             {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <table className="table table-dark ">
                <thead className="th">
<tr className="lk">
    <th>Id</th>
    <th>Name</th>
    <th>Age</th>
    <th>Street</th>
    <th>
    <div className="container" >
                            <label>search</label>
                             <input className="form-control" id="search" type="text" onKeyUp={this.myfilter()}
                              name="name"/>
                            </div>
    
    </th>
    <th>
    <button className="btn btn-success" onClick={()=>this.addpat()}>Add Patient</button>

    </th>
 
</tr>

                </thead>
                <tbody>
                    {this.state.Patientdet.map(
                        (pt)=> 
<tr>
<td> <div key={pt.id}></div>{pt.id}</td>
<td>{pt.name}</td>
<td>{pt.age}</td>
<td>{pt.address}</td>
<td><button className="btn btn-warning" onClick={()=>this.deletepatient(pt.id)}>Delete{/* {pt.id} */}</button></td>
<td><button className="btn btn-success" onClick={()=>this.updatepatient(pt.id)}>Update{/* {pt.id} */}</button></td>


</tr>
                    )}
                   



                </tbody>


                </table>
                
            </div>
        )
    }
}

export default PatientList
