import "@testing-library/jest-dom";
import React from "react";
import MaterialButton from "../src/MaterialButton/MaterialButton";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
test("Validate css styles from fixed stylesheet", () => {
  const { getByTestId } = render(
    <MaterialButton> style css test</MaterialButton>,
  );
  expect(screen.getByText("style css test")).toBeInTheDocument();
});

describe("Validate css styles from props", () => {
  it("check 'style props test' to be on the document", () => {
    const { getByTestId } = render(
      <MaterialButton>style props test</MaterialButton>,
    );
    expect(screen.getByText("style props test")).toBeInTheDocument();
  });

  it("check color prop on default variant='contained'", () => {
    const { getByTestId } = render(
      <MaterialButton color="crimson">style props test</MaterialButton>,
    );
    const clickButton = getByTestId("material-button");
    expect(clickButton).toBeInTheDocument();
    expect(clickButton).toHaveStyle("background-color: rgb(220, 20, 60)");
  });
  it("check variant prop outlined", () => {
    const { getByTestId } = render(
      <MaterialButton color="crimson" variant="outlined">style props test</MaterialButton>,
    );
    const clickButton = getByTestId("material-button");
    expect(clickButton).toBeInTheDocument();
    expect(clickButton).toHaveStyle("background-color: transparent");
    expect(clickButton.className).toEqual("material-button-root material-button outlined outlined-4 uppercase");
  });
  it("check variant prop text", () => {
    const { getByTestId } = render(
      <MaterialButton color="crimson" variant="text">style props test</MaterialButton>,
    );
    const clickButton = getByTestId("material-button");
    expect(clickButton).toBeInTheDocument();
    expect(clickButton).toHaveStyle("background-color: transparent");
  });
  it("check variant prop that is not considered (default again)", () => {
    const { getByTestId } = render(
      <MaterialButton color="crimson" variant="text">style props test</MaterialButton>,
    );
    const clickButton = getByTestId("material-button");
    expect(clickButton).toBeInTheDocument();
    expect(clickButton).toHaveStyle("background-color: transparent");
  });
});
describe("validate click function,", () => {
  it("check onCLick function to be called", () => {
    const onClickButton = jest.fn();
    const { getByTestId } = render(
      <MaterialButton onClick={onClickButton}>style props test</MaterialButton>,
    );

    const clickButton = getByTestId("material-button");
    fireEvent.click(clickButton);
    expect(onClickButton).toBeCalled();
    expect(onClickButton).toBeCalledTimes(1);
  });
  it("check ripple to be called", () => {
    const onClickButton = jest.fn();
    const { getByTestId } = render(
      <MaterialButton onClick={onClickButton}>style props test</MaterialButton>,
    );

    const clickButton = getByTestId("material-button");
    fireEvent.click(clickButton);
    expect(onClickButton).toBeCalled();
    expect(onClickButton).toBeCalledTimes(1);
  });
});
