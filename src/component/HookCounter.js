import React ,{useState}from 'react'

 function HookCounter() {

  const [count, setcount] = useState(5)
  return (
        <div>
      <button  onClick={() =>setcount(count+1)}>count value is {count}</button>         
        </div>
    ) 
}


export default HookCounter
