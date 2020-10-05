import React from "react";
import "./App.css";
import CounterInput from "./components/CounterInput";
import CounterOutput from "./components/CounterOutput";


function App() {
  return (
    
      <div className="App">
        <h1>Counter App</h1>
        <p>Using React REDUX... </p>
        <div className='counter'>
        <CounterOutput/>
        <CounterInput/>
        <div><a href=''>GITHUB REPO</a></div>
        </div>

      </div>
  
  );
}

export default App;
