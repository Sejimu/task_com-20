import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Bye World!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p style={{ opacity: "50%" }}>made by Nursultan Asan uulu COM-20</p>
      </div>
    </>
  );
}

export default App;
