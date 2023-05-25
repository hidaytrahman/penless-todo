import { render, screen } from "@testing-library/react";
import TodoAdd from "./TodoAdd";

describe("Todo functionality coverage", () => {
  const addTodoItem = jest.fn();

  test("renders correctly", () => {
    render(<TodoAdd addTodoItem={addTodoItem} />);
    screen.getByTestId("todoInput");
    expect(screen.getByTestId("todoInput")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Add",
      })
    ).toBeInTheDocument();
  });
});
