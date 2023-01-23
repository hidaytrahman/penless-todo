import { render, screen } from "@testing-library/react";
import AddTodo from "./AddTodo";

describe("Todo functionality coverage", () => {
  test("input text and add button controls should exists", () => {
    render(<AddTodo />);

    expect(screen.getByTestId("todo-text")).toBeInTheDocument();
    expect(screen.getByTestId("todo-addBtn")).toBeInTheDocument();
  });

  test("should have `Add` as button text", () => {
    render(<AddTodo />);
    expect(screen.getByTestId("todo-addBtn").textContent).toEqual("Add");
  });
});
