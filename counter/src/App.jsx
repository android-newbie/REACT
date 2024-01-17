import { useState } from "react"

function App() {
  let [counter,setcounter]=useState(10)
 // let counter=15
 function addValue(){
    // alert(`my counter value is${counter}`)
    if(counter<100)
    counter+=10
    setcounter(counter)
  }

  function removeValue(){
    
    if(counter>0){
    counter-=10
    setcounter(counter)
    }
  }

  return (
    <div>
      <h1>Chai aur react</h1>
      <h2>Conter value:{counter}</h2>
      <button onClick={addValue}>add value</button>
      <br/>
      <button onClick={removeValue}>remove value</button>
    </div>
  )
}

export default App
