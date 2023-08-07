import { useEffect, useState } from "react";
import "./App.css";
import tachyons from "tachyons";

function App() {
  // state
  const [bottomDisplay, setBottomDisplay] = useState("0");
  const [topDisplay, setTopDisplay] = useState("0");
  const [equalCount, setEqualCount] = useState(0);
  const [resetCalc, setResetCalc] = useState(0);
  const [memory, setMemory] = useState("0");
  const [disableDec, setDisableDec] = useState(false);
  const [disableOp, setDisableOp] = useState(false);
  // const [operatorState, setOperatorState] = useState(false);

  // array of operators
  const operators = ["*", "/", "+", "-"];

  // const operatorCheck = () => {
  //   let test = topDisplay.split("");
  //   operators.map((item) => {
  //     if (item === test[test.length - 2]) {
  //       return test.splice(test.legnth - 2, 1);
  //     }
  //     setTopDisplay(test);
  //   });
  // };

  // useEffect(() => {
  //   operatorCheck();
  // }, [topDisplay]);

  // clear button handler
  const handleClear = () => {
    setBottomDisplay("0");
    setTopDisplay("0");
    setMemory("0");
    setEqualCount(0);
    setResetCalc(0);
    setDisableDec(false);
    setDisableOp(false);
    console.log(topDisplay)
  };

  const handleOp = (symbol) => {
    if (
      topDisplay.charAt(topDisplay.length - 1) === "*" ||
      topDisplay.charAt(topDisplay.length - 1) === "+" ||
      topDisplay.charAt(topDisplay.length - 1) === "/"
      // ||
      //  disableOp === true
    ) {
      setDisableOp(true);
    } else {
      setTopDisplay((prev) => prev + symbol);
      setDisableDec(false);
    }
  };

  // decimal handler
  const handleDec = (symbol) => {
    if (
      topDisplay.charAt(topDisplay.length - 1) === "." ||
      disableDec === true
    ) {
      return;
    } else {
      setTopDisplay((prev) => prev + symbol);
      setDisableDec(true);
    }
  };

  // number handler
  const handleNum = (symbol) => {
    // * fixed octal literal error by removing the leading 0
    if (topDisplay.length > 1 && topDisplay.charAt(0) === "0") {
      setTopDisplay(topDisplay.slice(1));
    }
    if (symbol === "*" || symbol === "-" || symbol === "+" || symbol === "/") {
      setDisableDec(false);
    }

    if (bottomDisplay === "0") {
      setBottomDisplay(symbol);
      setTopDisplay(symbol);
      setMemory(symbol);
    }
    //  else if (topDisplay.charAt(topDisplay.length - 1) === ".") {

    // }
    else {
      setBottomDisplay((prev) => prev + symbol);
      setTopDisplay((prev) => prev + symbol);
      setMemory((prev) => prev + symbol);
    }

    // this resets the calculator if you press a number
    // before an operator

    if (
      equalCount > 0 &&
      (memory.charAt(memory.length - 1) === "*" ||
        memory.charAt(memory.length - 1) === "+" ||
        memory.charAt(memory.length - 1) === "-" ||
        memory.charAt(memory.length - 1) === "/")
    ) {
      console.log("pressed an operator");
      setMemory((prev) => prev + symbol);
    }

    // else if (disableOp === true) {
    //   setTopDisplay(symbol);
    // }
    else if (
      equalCount > 0 &&
      resetCalc !== 0 &&
      // operatorState === true
      (symbol === "0" ||
        symbol === "1" ||
        symbol === "2" ||
        symbol === "3" ||
        symbol === "4" ||
        symbol === "5" ||
        symbol === "6" ||
        symbol === "7" ||
        symbol === "8" ||
        symbol === "9")
    ) {
      console.log("pressed a #");
      setMemory(symbol);
      setBottomDisplay(symbol);
      setTopDisplay(symbol);
      setResetCalc(1);
    }
  };

  // symbol handler
  // const handleSym = (symbol) => {
  //   setBottomDisplay(symbol);
  //   setTopDisplay((prev) => prev + symbol);
  // };

  // answer logic
  const answer = () => {
    setEqualCount((prev) => prev + 1);
    setTopDisplay(eval(topDisplay).toString());
    setBottomDisplay(eval(topDisplay).toString());
    setResetCalc(0);
  };

  /*
  * when i press =, i need the state to be saved until I press another number or clear
  I need to be able to remember past entries UNTIL i clear or start with a new number
  - how can I track?
  - state?
  - maintain the str
  
  */

  return (
    <>
      <div className="App">
        <div className="main-container">
          <div id="display" className="topNum ma1 mr3">
            {topDisplay}
          </div>
          <div className="baseNum white ma1 mr3"> {topDisplay}</div>
          {/* <ButtonDisplay/> */}
          <div className="grid center">
            <button id="clear" onClick={handleClear} className="longer-btn ac">
              AC
            </button>
            <button
              id="divide"
              onClick={() => handleOp("/")}
              className="normal-btn"
            >
              /
            </button>
            <button
              id="multiply"
              onClick={() => handleOp("*")}
              className="normal-btn"
            >
              X
            </button>
            <button
              id="seven"
              onClick={() => handleNum("7")}
              className="normal-btn dark-btn"
            >
              7
            </button>
            <button
              onClick={() => handleNum("8")}
              id="eight"
              className="normal-btn dark-btn"
            >
              8
            </button>
            <button
              onClick={() => handleNum("9")}
              id="nine"
              className="normal-btn dark-btn"
            >
              9
            </button>
            <button
              id="subtract"
              onClick={() => handleNum("-")}
              className="normal-btn "
            >
              -
            </button>
            <button
              onClick={() => handleNum("4")}
              id="four"
              className="normal-btn dark-btn"
            >
              4
            </button>
            <button
              onClick={() => handleNum("5")}
              id="five"
              className="normal-btn dark-btn"
            >
              5
            </button>
            <button
              onClick={() => handleNum("6")}
              id="six"
              className="normal-btn dark-btn"
            >
              6
            </button>
            <button
              id="add"
              onClick={() => handleOp("+")}
              className="normal-btn "
            >
              +
            </button>
            <button
              onClick={() => handleNum("1")}
              id="one"
              className="normal-btn dark-btn"
            >
              1
            </button>
            <button
              onClick={() => handleNum("2")}
              id="two"
              className="normal-btn dark-btn"
            >
              2
            </button>
            <button
              onClick={() => handleNum("3")}
              id="three"
              className="normal-btn dark-btn"
            >
              3
            </button>
            <button
              onClick={() => handleNum("0")}
              id="zero"
              className="longer-btn dark-btn"
            >
              0
            </button>

            <button
              id="decimal"
              onClick={() => handleDec(".")}
              className="normal-btn dark-btn"
            >
              .
            </button>

            {equalCount === 0 ? (
              <button
                id="equals"
                onClick={() => answer()}
                className="taller-btn equal"
              >
                =
              </button>
            ) : (
              <button
                style={{ backgroundColor: "green" }}
                id="equals"
                onClick={() => answer()}
                className="taller-btn equal"
              >
                =
              </button>
            )}
          </div>
        </div>
      </div>
      {resetCalc > 0 ? (
        <div className="ma2 resetCalc tc pa5">resetCal active</div>
      ) : null}
      {/* {operatorState > 0 ? (
        <div className="ma2 operator tc pa5">operator state active</div>
      ) : null} */}
    </>
  );
}

export default App;
