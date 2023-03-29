import React from 'react';
import './App.css';
import CalcButtons from './CalculatorButtons';
import _ from 'lodash';


function App() {
  let buttons = [];
    _.times(8, (i) => {
      buttons.push(<CalcButtons num={i} />);
    });
  return (
    <div className="App">
      <div>Output</div>
      <div>
        <div>{buttons}</div>
      </div>
    </div>
  )
}

export default App;


