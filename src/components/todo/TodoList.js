import { Button, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Radio } from "@material-ui/core";
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import { useRef, useState } from "react";
import { useStores } from "store";
import { observer } from 'mobx-react-lite';

const TodoList = () => {
    // get from store
    const {todoStore} = useStores();
    const {todos, editTodo, markCompleted, deleteTodo} = todoStore;

    const [editFormStatus, setEditFormStatus] = useState(false);
    const [selectedListIndex, setSelectedListIndex] = useState(0);
    const editTodoInput = useRef(null);

    const handlerEditFormSubmit = (e) => {
        e.preventDefault();
        editTodo(selectedListIndex, { title: editTodoInput.current.value, completed: false });
        setSelectedListIndex(0);
        setEditFormStatus(false);
    }


    // create dynamic form for edit todo item
    const createEditFrom = () => {
        return (
            <div className="editFormWrapper">
                <form onSubmit={(e) => handlerEditFormSubmit(e)}>
                    <input type="text" defaultValue={todos[selectedListIndex].title} className="custom-input" ref={editTodoInput} />
                    <Button type="submit" variant="contained" color="primary"
                    >Update</Button>
                </form>
            </div >
        )
    }

    return (
        <div>
            <List className="todo-list-wrapper">

                {
                    todos &&
                    todos.map((todo, index) => {
                        return (
                            <ListItem role={undefined} dense button key={index}
                                onDoubleClick={() => {
                                    setEditFormStatus(true);
                                    setSelectedListIndex(index)
                                }}

                                className={todo.completed && "todo-completed"}
                            >

                                {
                                    editFormStatus && index === selectedListIndex &&
                                    createEditFrom()
                                }

                                <ListItemIcon>
                                    <Radio
                                        color="primary"
                                        checked={todo.completed}
                                        disabled={todo.completed}
                                        onChange={() => markCompleted(index)}
                                        value={true}
                                        variant="secondary"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': 'A' }}
                                    />
                                </ListItemIcon>
                                <ListItemText style={{ textDecoration: todo.completed && "line-through" }}>{todo.title}</ListItemText>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="comments" onClick={() => deleteTodo(index)}>
                                        <DeleteSharpIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })
                }
            </List>

            <small>Double click to edit</small>
        </div>


    )
}

export default observer(TodoList);