import {useState} from 'react'
import './App.css';

function App() {
  const [number, setNumber] = useState({
    inputA:0,
    inputB:0,
    result:0
  })

  function method(param){
    let {inputA, inputB} = number
    if (param == "+") setNumber({...number, result:inputA + inputB})
    else if (param == "-") setNumber({...number, result: inputA - inputB})
    else if (param == "/") setNumber({...number, result: inputA / inputB})
    else if (param == "*") setNumber({...number, result: inputA * inputB})
  }
  return (
   <>
    <div className = "container">
      <div className = "card">
        <div className = "header">
          My Calculator
        </div>
        <div className = "body">
          <div className = "inputWrapper">
            <input type="number" placeholder = "inputA" onInput = {(e)=>setNumber({...number,  inputA: parseInt(e.target.value) })}/>
            <input type="number" placeholder = "inputB" onInput = {(e)=>setNumber({...number, inputB: parseInt(e.target.value)})}/>
            <input type="text" placeholder = "result" value = {number.result}/>
          </div>
          <div className = "inputWrapper">
            <button onClick = {()=>method("+")}>+</button>
            <button onClick = {()=>method("-")}>-</button>
            <button onClick = {()=>method("/")}>/</button>
            <button onClick = {()=>method("*")}>*</button>
          </div>
          

        </div>
        <div className = "footer">
          
        </div>
      </div>
    </div>
   </>
  );
}

export default App;
