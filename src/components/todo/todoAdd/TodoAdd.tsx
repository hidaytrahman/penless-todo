// import { Button, TextField } from "@material-ui/core";
import { Button, TextField } from "@mui/material";
import useFireStore from "hooks/useFireStore";
import { useForm } from "react-hook-form";

type TodoType = {
  todoTitle: string;
};

const TodoAdd = ({ addTodoItem }: { addTodoItem: (title: string) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoType>();

  const {addTodoInDb} = useFireStore();

  const onSubmit = (data: TodoType) => {
    // addTodoItem(data.todoTitle);
    addTodoInDb( data.todoTitle);
    
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-sm-8 mb-2">
          <TextField
            error={
              errors.todoTitle?.type === "required" ||
              errors.todoTitle?.type === "maxLength"
            }
            label="Whats needs to be done? 🤔"
            helperText={
              (errors.todoTitle?.type === "required" && "Its required 😟") ||
              (errors.todoTitle?.type === "maxLength" &&
                "You've exceeds the max limits. Should not be more then 50 letter 🙄")
            }
            variant="filled"
            fullWidth
            data-testid="todo-text"
            {...register("todoTitle", {
              required: {
                value: true,
                message: "Please write what is in your mind? 🤔",
              },
              maxLength: 50,
            })}
          />
        </div>

        <div className="col-sm-4 mb-2">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            data-testid="todo-addBtn"
          >
            Add
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TodoAdd;
