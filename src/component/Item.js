import React,{useState} from 'react'

function Item() {
    const [Items, setitem] = useState([])


   const addItem=() =>
    {
        setitem([
  ...Items,{

    id:Items.length,
    value:Math.floor(Math.random()*10)+1
  }

        ])
    }
 return (
        <div>
            <button onClick={addItem}>AddItem</button>
            
            {
                Items.map(i=><li key={i.id}>{i.id}{i.value}</li>)
            }

        
        </div>
    )
}

export default Item

