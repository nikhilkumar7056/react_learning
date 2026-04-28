import { useState } from "react";
import './App.css';



function App() {
  let [counter,setCounter] = useState(5);

  
  const AddValue = () => {
    if (counter < 20) {
      setCounter(counter + 1); 
    }
   
  }
  const RemoveValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);

    }
  }

  return (
    <>
      <h1>learning react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={AddValue}>Add Value { counter}</button>
      <button onClick={RemoveValue}>remove Value{counter}</button>
    </>
  )
}

export default App
