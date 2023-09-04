import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(-1);
  var word = "piece";
  const ele = 1;

  async function getAdvice(){
    // Fetching the advice using API
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    // State changes
    setAdvice(data.slip.advice);
    setCount(count=>count+1);
    if(count>1){
      word = "pieces";
    }
  }

  useEffect(function(){
    getAdvice();        // function to be executed at the beginning
  },[ele]);                // dependency array

  return (
    <div class="app">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get more advice</button>
      <Message count = {count} word = {word} />          
    </div>
  );

  function Message(props){
    return(
      <p>
        You have read <strong>{props.count}</strong> {props.word} of advice.
      </p>
    );
  }
}

export default App;
