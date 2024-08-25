// import {
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemSecondaryAction,
//   ListItemText,
//   Radio,
// } from "@material-ui/core";
// import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import { FormEvent, useRef, useState } from "react";

import { TodoType } from "../todo.types";
import { Button, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Radio } from "@mui/material";
import { DeleteSharp } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const {todos, editTodo} = useSelector((state: any) => state.todos);
  const dispatch = useDispatch()
  // const { todos, editTodo, markCompleted, deleteTodo } = todoStore;

  const [editFormStatus, setEditFormStatus] = useState(false);
  const [selectedListIndex, setSelectedListIndex] = useState(0);
  const editTodoInput = useRef<any>(null);

  const handlerEditFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    editTodo(selectedListIndex, {
      title: editTodoInput.current?.value,
      completed: false,
    });
    setSelectedListIndex(0);
    setEditFormStatus(false);
  };

  // create dynamic form for edit todo item
  const createEditFrom = () => {
    return (
      <div className="editFormWrapper">
        <form onSubmit={(e) => handlerEditFormSubmit(e)}>
          <input
            type="text"
            defaultValue={todos[selectedListIndex].title}
            className="custom-input"
            ref={editTodoInput}
          />
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <List className="todo-list-wrapper">
        {todos &&
          todos.map((todo: TodoType, index: number) => {
            return (
              <ListItem
                role="listitem"
                dense
                // button
                key={index}
                onDoubleClick={() => {
                  setEditFormStatus(true);
                  setSelectedListIndex(index);
                }}
                // @ts-ignore
                className={todo.completed && "todo-completed"}
                data-testid="todo-listItem"
              >
                {editFormStatus &&
                  index === selectedListIndex &&
                  createEditFrom()}

                <ListItemIcon>
                  <Radio
                    color="primary"
                    checked={todo.completed}
                    disabled={todo.completed}
                    // onChange={() => markCompleted(index)}
                    value={true}
                    // @ts-ignore
                    variant="secondary"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "A" }}
                  />
                </ListItemIcon>
                <ListItemText
                  // @ts-ignore
                  style={{ textDecoration: todo.completed && "line-through" }}
                >
                  {todo.title}
                </ListItemText>
                <ListItemSecondaryAction data-testid="todo-deleteBtn">
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    // onClick={() => deleteTodo(index)}
                  >
                    <DeleteSharp />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
      </List>

      <small>Double click to edit</small>
    </div>
  );
};

export default TodoList;
