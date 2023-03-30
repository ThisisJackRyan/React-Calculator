import React from "react";
const CalculatorButtons = ({num}) => {
    const log = (i) =>{
        console.log(i + " This is the number you clicked.")
    }
    
    
    return (
        <div className="">
            <button onClick={log(num)} className="btn" >{num}</button>
        </div>
    )
}

export default CalculatorButtons;