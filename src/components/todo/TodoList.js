import { IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Radio } from "@material-ui/core";
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
const TodoList = (props) => {
    const { todos, deleteTodoItem, markTodoAsCompleted } = props;

    return (
        <List className="todo-list-wrapper">

            {
            todos && 
                todos.map((todo, index) => {
                    return (
                        <ListItem role={undefined} dense button key={index}
                            style={{ background: todo.completed && "#c9eecb" }}>
                            <ListItemIcon>
                                <Radio
                                    color="primary"
                                    checked={todo.completed}
                                    disabled={todo.completed}
                                    onChange={() => markTodoAsCompleted(index, todo.title)}
                                    value={true}
                                    variant="secondary"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                            </ListItemIcon>
                            <ListItemText style={{ textDecoration: todo.completed && "line-through" }}>{todo.title}</ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="comments" onClick={() => deleteTodoItem(index)}>
                                    <DeleteSharpIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                })
            }

        </List>
    )
}

export default TodoList;