import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("blue");
  const newButtonColor = buttonColor === "blue" ? "red" : "blue";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change color to {buttonColor}
      </button>
    </div>
  );
}

export default App;
