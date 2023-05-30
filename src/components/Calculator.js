import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        <div className="row">
          <button type="button" className="button">AC</button>
          <button type="button" className="button">+/-</button>
          <button type="button" className="button">%</button>
          <button type="button" className="button-operator">÷</button>
        </div>
        <div className="row">
          <button type="button" className="button">7</button>
          <button type="button" className="button">8</button>
          <button type="button" className="button">9</button>
          <button type="button" className="button-operator">×</button>
        </div>
        <div className="row">
          <button type="button" className="button">4</button>
          <button type="button" className="button">5</button>
          <button type="button" className="button">6</button>
          <button type="button" className="button-operator">-</button>
        </div>
        <div className="row">
          <button type="button" className="button">1</button>
          <button type="button" className="button">2</button>
          <button type="button" className="button">3</button>
          <button type="button" className="button-operator">+</button>
        </div>
        <div className="row">
          <button type="button" className="zero">0</button>
          <button type="button" className="button">.</button>
          <button type="button" className="button-operator">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
