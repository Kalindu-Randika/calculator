import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Calculator() {

  const [calc, setCalc] = useState({
    current: '0',
    total: '0', 
    isInitial: true
  }); 

function handleNumber(value) {
  let newValue = value;
  if(!calc.isInitial) {
    newValue = calc.current + value; 
  }
  
  
  setCalc({current: newValue, total: calc.total , isInitial:false}); 
} 

function handleOperator(value) {
  const total = doCalculation(); 

  setCalc({current: total.toString(),  total: total.toString(), isInitial:true})


}

function doCalculation(){

}

function renderDisplay() {
  return calc.current; 
}


  return (
    <> 
    <div className='display'> {renderDisplay()} </div>
    <div className='app-container'>
      <CalcButton value="7" onClick={handleNumber} /> 
      <CalcButton value="8" onClick={handleNumber} /> 
      <CalcButton value="9" onClick={handleNumber} /> 
      <CalcButton className="operator" value="/" onClick={handleOperator} /> 
      <CalcButton value="4" onClick={handleNumber} /> 
      <CalcButton value="5" onClick={handleNumber} /> 
      <CalcButton value="6" onClick={handleNumber} /> 
      <CalcButton className="operator" value="*" onClick={handleOperator} /> 
      <CalcButton value="1" onClick={handleNumber} /> 
      <CalcButton value="2" onClick={handleNumber} /> 
      <CalcButton value="3" onClick={handleNumber} /> 
      <CalcButton className="operator" value="-"/> 
      <CalcButton value="C" onClick={handleNumber} /> 
      <CalcButton value="0"onClick={handleNumber} /> 
      <CalcButton value="=" onClick={handleNumber} /> 
      <CalcButton className="operator" value="+" onClick={handleOperator} /> 
    </div>
    </>
  );
}

function CalcButton(props) {
  return(
    <div className='calc-func'>
    <button className={props.className} onClick={ () => props.onClick(props.value) } > {props.value}  </button>
   
    
    </div>
  ); 
}

export default Calculator;
