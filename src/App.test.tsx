import { render, screen } from "@testing-library/react";
import App from "./App";

// A simple test case using Jest
test("renders learn react link", () => {
  // Render the App component
  render(<App />);

  // Attempt to find an element with the text "learn react" (case insensitive)
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the element is present in the document
  expect(linkElement).toBeInTheDocument();
});
