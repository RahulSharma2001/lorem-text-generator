import "./App.css";
import { useRef, useState } from "react";
import dataJson from "./data.json";

function App() {
  const numRef = useRef(null);
  const [generatedData, setGeneratedData] = useState([]);

  function generate() {
    let currentData = [];
    if (numRef.current.value > 10) {
      alert(
        " Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀 "
      );
      return;
    }
    for (let i = 0; i < numRef.current.value; i++) {
      currentData.push(dataJson.data[i]);
    }
    console.log(currentData);
    setGeneratedData(currentData);
  }

  return (
    <div className="App">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <div>
        <p>Paragraphs</p>
        <input
          ref={numRef}
          type="number"
          placeholder="Number of paragraphs"
        ></input>
        <button onClick={generate}>Generate</button>
      </div>
      <div className="data">
        {generatedData.map((para) => (
          <p key={para.id}>
            {para.id} ) {para.para}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
