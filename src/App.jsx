import { useEffect, useState } from "react";
import "./App.css";
import ByeWorld from "./components/ByeWorld";

function App() {
  const [count, setCount] = useState(0);
  const [textHead, setTextHead] = useState("Bye World!");
  const [color, setColor] = useState("white");

  useEffect(() => {
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }, [count]);

  useEffect(() => {
    if (textHead == "Bye World!") {
      setTextHead("Hello World!");
    }
    if (textHead == "Hello World!") {
      setTextHead("Bye World!");
    }
  }, [count]);

  return (
    <>
      <div className="card">
        <ByeWorld text={textHead} color={color} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p style={{ opacity: "50%" }}>made by Nursultan Asan uulu COM-20</p>
      </div>
    </>
  );
}

export default App;
