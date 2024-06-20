import "./App.css";
import { useState } from "react";

function App() {
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [operator, setOperator] = useState("+");
  const [total, setTotal] = useState(0);
  const [storeNumber, setStoreNumber] = useState(0);

  //This function deals with the inputted values from the left-hand key-pad. The values are assigned to numOne.
  function inputNumOne(event) {
    if (event.target.innerText === "Clear") {
      setNumOne(0);
    } else if (numOne > 0) {
      setNumOne(numOne + event.target.innerText);
    } else {
      setNumOne(event.target.innerText);
    }
  }

  //This function deals with the inputted values from the right-hand key-pad. The values are assigned to numTwo.
  function inputNumTwo(event) {
    if (event.target.innerText === "Clear") {
      setNumTwo(0);
    } else if (numTwo > 0) {
      setNumTwo(numTwo + event.target.innerText);
    } else {
      setNumTwo(event.target.innerText);
    }
  }

  //This function stores the inputted operator into the operator variable:
  function inputOperator(event) {
    setOperator(event.target.innerText);
  }

  //This function calculates the answer of the inputted values.
  function handleOperation() {
    if (operator === "+" || operator === "-" || operator === "*") {
      setTotal(eval(numOne + operator + numTwo));
    } else {
      setTotal(numOne / numTwo);
    }
  }

  //This function stores the total number in the storeNumber variable.
  function handleStoreNumber() {
    setStoreNumber(total);
  }

  //This function recalls the stored number and inputs it into the NumOne variable (its also diplayed on screen):
  function handleRecallOne() {
    setNumOne(storeNumber);
  }

  //This function recalls the stored number and inputs it into the NumTwo variable (its also diplayed on screen):
  function handleRecallTwo() {
    setNumTwo(storeNumber);
  }

  console.log("NumOne:", numOne);
  console.log("NumTwo:", numTwo);
  console.log("Operator:", operator);
  console.log("Stored Number:", storeNumber);

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <button onClick={handleRecallOne}>Recall</button>
        <div className="numbers">
          <button onClick={inputNumOne}>1</button>
          <button onClick={inputNumOne}>2</button>
          <button onClick={inputNumOne}>3</button>
          <button onClick={inputNumOne}>4</button>
          <button onClick={inputNumOne}>5</button>
          <button onClick={inputNumOne}>6</button>
          <button onClick={inputNumOne}>7</button>
          <button onClick={inputNumOne}>8</button>
          <button onClick={inputNumOne}>9</button>
          <button onClick={inputNumOne}>0</button>
          <button onClick={inputNumOne}>.</button>
          <button onClick={inputNumOne}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={inputOperator}>+</button>
          <button onClick={inputOperator}>-</button>
          <button onClick={inputOperator}>*</button>
          <button onClick={inputOperator}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numTwo}</p>
        <button onClick={handleRecallTwo}>Recall</button>
        <div className="numbers">
          <button onClick={inputNumTwo}>1</button>
          <button onClick={inputNumTwo}>2</button>
          <button onClick={inputNumTwo}>3</button>
          <button onClick={inputNumTwo}>4</button>
          <button onClick={inputNumTwo}>5</button>
          <button onClick={inputNumTwo}>6</button>
          <button onClick={inputNumTwo}>7</button>
          <button onClick={inputNumTwo}>8</button>
          <button onClick={inputNumTwo}>9</button>
          <button onClick={inputNumTwo}>0</button>
          <button onClick={inputNumTwo}>.</button>
          <button onClick={inputNumTwo}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{total}</p>
        <div>
          <button onClick={handleOperation}>=</button>
          <button onClick={handleStoreNumber}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
