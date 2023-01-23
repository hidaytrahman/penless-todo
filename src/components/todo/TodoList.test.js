import { screen, render } from "@testing-library/react";
import TodoList from "./TodoList";

describe("todo list", () => {
  test("should have delete button", () => {
    const todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];

    render(<TodoList />);

    todos.length > 0 &&
      expect(screen.getByTestId("todo-deleteBtn")).toBeInTheDocument();
  });
});
