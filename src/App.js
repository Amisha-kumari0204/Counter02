import {useState} from 'react';
function App() {
  let[counter,setcounter]=useState(14);
 
  const addvalu=()=>{
    console.log("value added",counter);
    if(counter==20)
      counter=19;
    setcounter(counter+1);

  }
 const removvalue=()=>{
  console.log("value removed",counter);
  if(counter<1)
    counter=0;
  
  setcounter(counter-1);
  
    
 }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addvalu}>Add value</button>
    <br/>
    <button onClick={removvalue}>remove value</button>
     

        
    </>
  
  );
}

export default App;
