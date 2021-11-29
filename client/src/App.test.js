import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("headerTest renders with correct text", () => {
  const { getByTestId } = render(<App />);
  const headerTest = getByTestId("headerTest");

  expect(headerTest.textContent).toBe("Welcome! Sign in with Zendesk");
});
