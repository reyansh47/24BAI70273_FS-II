import { useState } from 'react'




function App() {
  const [counter,setCounter]=useState(10);

  const AddButton=()=>{
   setCounter(counter+1);//setCounter is a function that updates the counter state
  }
  const RemoveButton=()=>{
  setCounter(counter-1);
  }
  const ResetButton=()=>{
    setCounter(10);
  }
  return (
   <>
   <h1>Hello, Vite!</h1>
   <button onClick={AddButton}>Add {counter}</button>
   <button onClick={RemoveButton}>Remove {counter}</button>
   <button onClick={ResetButton}>Reset {counter}</button>
   
   
   
   </>

  )
}

export default App
