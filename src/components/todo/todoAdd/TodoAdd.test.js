import { render, screen } from "@testing-library/react";
import TodoAdd from "./TodoAdd";

describe("Todo functionality coverage", () => {
  test("input text and add button controls should exists", () => {
    render(<TodoAdd />);

    expect(screen.getByTestId("todo-text")).toBeInTheDocument();
    expect(screen.getByTestId("todo-addBtn")).toBeInTheDocument();
  });

  test("should have `Add` as button text", () => {
    render(<TodoAdd />);
    expect(screen.getByTestId("todo-addBtn").textContent).toEqual("Add");
  });
});
