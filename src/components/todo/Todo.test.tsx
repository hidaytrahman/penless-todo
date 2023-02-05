import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";

describe("Todo", () => {
  test("renders correctly", () => {
    render(<Todo />);

    expect(
      screen.getByText("What are you thinking, Add your first todo? 😉")
    ).toBeInTheDocument();
  });

  test("text is required for new todo", async () => {
    userEvent.setup();
    render(<Todo />);
    const addButton = screen.getByTestId("todo-addBtn");
    await userEvent.click(addButton);
    expect(screen.getByText(/its required 😟/i)).toBeInTheDocument();
  });

  test("adds new todo", async () => {
    userEvent.setup();
    render(<Todo />);
    const addButton = screen.getByTestId("todo-addBtn");
    // type and verify the input
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "World!");
    expect(input).toHaveValue("World!");
    // click to add the new todo
    await userEvent.click(addButton);
    const listItems = await screen.findAllByTestId("todoListItem");
    // check if the new todo has added
    expect(listItems).toHaveLength(1);
  });
});
