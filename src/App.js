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
       </div>
       <div><a target='blank' href='https://github.com/saadusufzai/React-Redux'>GITHUB REPO</a></div>
        
      </div>
  
  );
}

export default App;
