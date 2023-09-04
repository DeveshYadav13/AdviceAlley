import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice(){
    // Fetching the advice using API
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    // State changes
    setAdvice(data.slip.advice);
    setCount(count=>count+1);
  }

  useEffect(function(){
    getAdvice();        // function to be executed at the beginning
  },[]);                // dependency array

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get more advice</button>
      <p>
        You have read <strong>{count}</strong> pieces of advice.
      </p>
    </div>
  );
}

export default App;
