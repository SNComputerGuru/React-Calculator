import React, { useState } from 'react';
import './App.css';
import { add, subtract } from './calculator';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Invalid input');
      return;
    }

    const res = operator === '+' ? add(a, b) : subtract(a, b);
    setResult(res);
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <div className="inputs">
        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <button onClick={calculate}>Calculate</button>
      {result !== null && <div className="result">Result: {result}</div>}
    </div>
  );
}

export default App;
