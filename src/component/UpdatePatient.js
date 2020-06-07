import React, { Component } from 'react'
import {  Formik,Field,Form,ErrorMessage,fieldset} from 'formik';
import getPatentdata  from "./api/getPatentdata";
import  history from'./history'
 class UpdatePatient extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             id: '',
             age:'',
             name:'',
             address:''
            
              
         }
    
          /*  this.validate=this.validate.bind(this) */
           this.callsubmit =this.callsubmit.bind(this)
           
     }
     



     componentDidMount()
     {
    
        getPatentdata.findPatientbyId(this.props.match.params.id).then(response=>
            {
               
              
                this.setState(
                    {       id:response.data.id,
                            name:response.data.name,
                            age:response.data.age,
                            address:response.data.address
    
    
                    })
            }
           
            )
            
     }
     validate(values)
     {
         let errors={}
         if(!values.name)
         {
             errors.name="Enter your Name "
         }
         else if(values.name.length <5 ) 
         {
         errors.name="Your Name should Greater than two character"
         }


         if(!values.age)
         {
             errors.age="Enter your Age "
         }
         else if(values.age <=0) 
         {
         errors.age="Age should be greater than 0"
         }
         
         if(!values.address)
         {
             errors.address="Enter Street Detail "
         }
         return errors
        }

     callsubmit(values)
     {  
        const params ={
                
            id:this.state.id,
            name:values.name,
            age:values.age,
            address:values.address
        }
        if(this.state.id===1)
        {
            getPatentdata.updatePatient(this.state.id,params).then(
                
           
                history.push(`/patdet`))
              
         }
       
        else
        {
          getPatentdata.addPatient(params).then(history.push('/patdet'))


        }
    }

     
    render() {
      let {name,address,age}=this.state
   

        return (
            <div className="container">
            <Formik   initialValues ={{  name,address,age  }}
            onSubmit={this.callsubmit}
            validateOnChange={false}
            validateOnBlur={false}
         
            validate={this.validate} 
            enableReinitialize={true}
            
            >
         
                      
                      
                      {  props =>  { return(
                    
                        <Form>
                            <ErrorMessage name="name" component="div" className="alert alert-warning"></ErrorMessage>
                            <ErrorMessage name="age" component="div" className="alert alert-warning"></ErrorMessage>
                            <ErrorMessage name="address" component="div" className="alert alert-warning"></ErrorMessage>
                            <fieldset className="form-group" >
                            <label>Name</label>
                             <Field className="form-control"  type="text" name="name"/>
                            </fieldset>
                            <fieldset className="form-group" >
                            <label>Age</label>
                             <Field className="form-control"  type="text" name="age"/>
                            </fieldset>
                            <fieldset className="form-group">
                            <label> Street</label>
                             <Field className="form-control"   name="address"/>     </fieldset>
                            <button type="submit" className="btn btn-success">save</button>
   </Form>
 )}}
                     
                  </Formik>

            </div>
        )
    }
}

export default UpdatePatient
