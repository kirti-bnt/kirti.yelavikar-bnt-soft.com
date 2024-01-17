import './App.css';
import React, { useState } from 'react';


const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    switch (value) {
      case '=':
        calculateResult();
        break;
      case 'C':
        clearInput();
        break;
      default:
        setInput((prevInput) => prevInput + value);
        break;
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const renderButton = (value) => (
    <button className='btn' key={value} onClick={() => handleButtonClick(value)}>
      {value}
    </button>
  );

  const renderRow = (values) => (
    <div key={values.join('')} className="button-row">
      {values.map(renderButton)}
    </div>
  );

  return (
    <div className="calculatorBase">
      <div className='calculatorWindow'>
        <div className="head"> Calculator</div>
        <input className='input-box' type="text" value={input} readOnly />
        <div className="buttonSection">
          {[
            ['1', '2', '3', '+'],
            ['4', '5', '6', '-'],
            ['7', '8', '9', '*'],
            ['0', '/', '=', 'C']].map(renderRow)}
        </div>

        <div>
          <p className='text-result'>Result: {result}</p>
        </div>
      </div>
    </div>

  );
};

export default Calculator;
