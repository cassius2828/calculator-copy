import {useState} from "react";
import "./App.css";
import tachyons from "tachyons";

function App({num}) {
  const [mainDisplay, setMainDisplay] = useState('0');
  const [grandDisplay, setGrandDisplay] = useState('')
  // clear button handler
  const handleClear = () => {
    setMainDisplay('0')
  }
  const handleNum = () => {
    setMainDisplay(mainDisplay.concat(num))
  }

  return (
    <div className="App">
      <div className="main-container">
        <div className="grandNum ma1 mr3">{grandDisplay}</div>
        <div className="baseNum white ma1 mr3"> {mainDisplay}</div>
        <div className="grid center">
          <button
          onClick={handleClear}
          className="longer-btn ac">AC</button>
          <button className="normal-btn">/</button>
          <button className="normal-btn">X</button>
          <button 
          num='7'
          onClick={handleNum}
          className="normal-btn dark-btn">7</button>
          <button num='8' className="normal-btn dark-btn">8</button>
          <button num='9' className="normal-btn dark-btn">9</button>
          <button className="normal-btn ">-</button>
          <button num='4' className="normal-btn dark-btn">4</button>
          <button num='5' className="normal-btn dark-btn">5</button>
          <button num='6' className="normal-btn dark-btn">6</button>
          <button  className="normal-btn ">+</button>
          <button num='1' className="normal-btn dark-btn">1</button>
          <button num='2' className="normal-btn dark-btn">2</button>
          <button num='3' className="normal-btn dark-btn">3</button>
          <button num='0' className="longer-btn dark-btn">0</button>
          <button className="normal-btn dark-btn">.</button>
          <button className="taller-btn equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
