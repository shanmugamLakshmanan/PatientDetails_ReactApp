import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
           count:0  
        }
    }

    render() {
        return (
            <div className="Counter">
              <CounterButton by={2}   incrementmeth={this.implemecount}></CounterButton>
              <CounterButton by={5}  incrementmeth={this.implemecount} ></CounterButton>
              <CounterButton by={10}  incrementmeth={this.implemecount}></CounterButton>
              <span>{this.state.count}</span>
            </div>
          );
    }


  
    implemecount = (by) => {
        console.log('caaaling from parent')
        this.setState(
            {
            count:this.state.count+ by
        
            }
        )
      }
  

}





class CounterButton extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
           count:0  
        }
     
    }
    
    implemecount = () => {
      this.setState(
          {
          count:this.state.count +this.props.by
          }
      )
      this.props.incrementmeth(this.props.by)
    }

    
    
    render() {
   
        return (
            
            <div>
                <button onClick={this.implemecount}>{this.props.by}</button>
               
            </div>
      
        )
    }
}

 

export default Counter
 