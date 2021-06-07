import { Button, TextField } from "@material-ui/core";
import { useRef } from "react";
import { useForm } from "react-hook-form";

const AddTodo = (props) => {
    const refTodo = useRef(null);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        props.addTodoItem(data.todoTitle);
        refTodo.current.value = "";
        refTodo.current.focus();
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-sm-8 mb-2">
                    <TextField
                        error={errors.todoTitle?.type === 'required' || errors.todoTitle?.type === 'maxLength'}
                        label="Whats needs to be done? 🤔"
                        helperText={
                            errors.todoTitle?.type === 'required' && "Its required 😟" ||
                            errors.todoTitle?.type === 'maxLength' && "You've exceeds the max limits. Should not be more then 50 letter 🙄"
                        }
                        variant="filled"
                        fullWidth
                        inputRef={refTodo}
                        {...register("todoTitle", {
                            required: {
                                value: true,
                                message: "Please write what is in your mind? 🤔"
                            }, maxLength: 50
                        })}
                    />
                </div>

                <div className="col-sm-2 mb-2">
                    <Button type="submit" variant="contained" color="primary" fullWidth
                    >Add</Button>
                </div>
            </div>
        </form>
    )
}

export default AddTodo;