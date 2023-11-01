import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // let counter = 5;

  const addValue = () => {
    //counter += 1;
    if (counter < 20) {
      setCounter(counter + 1);
    }
    return;
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    return;
  };
  return (
    <>
      <h1>Chai aur react </h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add value{counter} </button>
      <br />
      <button onClick={removeValue}>Remove value{counter} </button>
      <p>Footer:</p>
    </>
  );
}

export default App;
