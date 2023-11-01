import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let myObj = { username: "tanmay", age: "26" };
  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        tailwind test
      </h1>
      <Card username="chaiOrCode" btnTxt="click me" />
      <Card username="Tanmay" btnTxt="visit me " />
    </>
  );
}

export default App;
