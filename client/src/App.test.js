import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CustomButton from "./components/CustomButton";
import Header from "./components/Header";

// First test for checking is the header typed correctly.
test("headerTest renders with correct text", () => {
  const { getByTestId } = render(<App />);
  const headerTest = getByTestId("headerTest");

  expect(headerTest.textContent).toBe("Welcome! Sign in with Zendesk");
});

// Second test for making sure we are guiding to the user correctly.
test("guideLabelTest renders with correct for guiding the user.", () => {
  const { getByTestId } = render(<App />);
  const guideLabelTest = getByTestId("guideLabelTest");

  expect(guideLabelTest.textContent).toBe(
    "- Please press the button below for sign in -"
  );
});

// Third test for making sure we are displaying our logo
describe("We want to sure it is displaying logo of zendesk for sign in section ", () => {
  it("Logo of Zendesk", () => {
    const { getByAltText } = render(<App />);
    getByAltText("Zendesk"); // throws an expception if the element cannot be found
  });
});

// Fourth test for being a sure our button component is on right track.
describe("Making sure that the button function is working as button ", () => {
  it("Component customButton", () => {
    render(<CustomButton />);
    const dialogContainer = screen.getByRole("button");
  });
});

// Fifth test for the component header gave a right role and placed.
describe("Making sure that role of header component is right ", () => {
  it("Component Header", () => {
    render(<Header />);
    const dialogContainer = screen.getByRole("header");
  });
});
