import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(-1);

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
    <div class="app">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get more advice</button>
      <Message count = {count} />          
    </div>
  );

  function Message(props){
    return(
      <p>
        You have read <strong>{props.count}</strong> pieces of advice.
      </p>
    );
  }
}

export default App;
