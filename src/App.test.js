import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change color to blue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  expect(colorButton.textContent).toBe("Change color to red");
});
