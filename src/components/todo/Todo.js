import { Box, Chip, CircularProgress, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import "./Todo.css";
import "../../theme.css";
import useProgress from 'hooks/useProgress';
import { useStores } from 'store';


function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
        </Box>
    );
}

function CircularProgressWithLabel(props) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

const Todo = () => {
    const { todoStore, todoStore : {todos} } = useStores();

    // get completed todos
    const todosCompleted = (todos && todos.length > 0) ? todos.filter((todo) => todo.completed === true) : []

    const progress = useProgress(todosCompleted.length, todos.length)

    const addTodoItem = (todoValue) => {
        todoStore.addTodo({ title: todoValue, completed: false });
    }


    return (
        <section className="container todo-wrapper">
            <div className="custom-progressbar">
                <LinearProgressWithLabel value={progress} color="secondary" />
            </div>

            <AddTodo
                addTodoItem={addTodoItem}

            />

            <div className="row">
                <div className="col-lg-8">

                    {
                        todos && todos.length > 0 ?
                            <TodoList />
                            : <div className="alert alert-info">What are you thinking, Add your first todo? 😉</div>
                    }

                </div>

                {
                    todos && todos.length > 0 &&
                    <div className="col-lg-4">
                        <section className="todo-board">
                            <h3 className="d-flex"> 📝 <div style={{marginRight: "5px"}}>Todo Board</div>  <CircularProgressWithLabel color="secondary" value={progress} /></h3>

                            <hr />
                            <small>
                                ( <span>List</span> <span> {todosCompleted.length} / {todos.length}</span> )
                            </small>
                            <hr />

                            <div className="row">

                                <div className="col-6">
                                    <strong>All : </strong> <Chip color="primary" label={todos.length} />
                                </div>

                                <div className="col-6">
                                    <strong>Done : </strong> <Chip color="secondary" label={todosCompleted.length} />
                                </div>
                            </div>

                            <hr />

                            <div>
                                <p>We don't store data on server. 🙂</p>
                            </div>
                        </section>
                    </div>
                }

            </div>

        </section>
    )
}

export default observer(Todo);