import React,{useState}from 'react'

 function HookCountertwo() {
  const [name, setname] = useState({firstName:'',lastName:''})
  return (
    
    <div>
      <form>
        <label>Enter firstName</label><input type ="text" value={name.firstName} onChange={e=> setname({...name,firstName:e.target.value})}  ></input>
        <label>Enter firstName</label><input type ="text" value={name.lastName} onChange={l=>setname({...name,lastName:l.target.value})}></input>
      </form>
      <h1>
        {name.firstName} {name.lastName}
      </h1>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default HookCountertwo
