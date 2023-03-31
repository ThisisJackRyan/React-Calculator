import React, { useState } from 'react';
import './App.css';
import CalcButtons from './CalculatorButtons';



function App() {

  const [number, setNumber] = useState();

  return (
    <div className="App">
        <div className="flex center">
          <div>Output: { number ? (number) : ("no Number")}</div>
        </div>
        <div>
          <div className="flex center">
            <CalcButtons num={8} />
            <CalcButtons num={8} />
            <CalcButtons num={9} />
            <CalcButtons num={"/"} />
          </div>
          <div className="flex center">
            <CalcButtons num={4} />
            <CalcButtons num={5} />
            <CalcButtons num={6} />
            <CalcButtons num={"*"} />
          </div>
          <div className="flex center">
            <CalcButtons num={1} />
            <CalcButtons num={2} />
            <CalcButtons num={3} />
            <CalcButtons num={"-"} />
          </div>
          <div className="flex center">
            <CalcButtons num={0} />
            <CalcButtons num={"ente"} />
            <CalcButtons num={"+"} />
            
          </div>
        </div>


    </div>
  )
}


export default App;


