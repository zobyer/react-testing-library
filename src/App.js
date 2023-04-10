import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function App() {
  const [buttonColor, setButtonColor] = useState("blue");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const newButtonColor = buttonColor === "blue" ? "red" : "blue";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isButtonDisabled}
      >
        Change color to {buttonColor}
      </button>

      <input
        type="checkbox"
        onClick={(e) => setIsButtonDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
