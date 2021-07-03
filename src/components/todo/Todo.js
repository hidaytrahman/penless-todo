import { Box, Chip, CircularProgress, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
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
    
    const { todoStore } = useStores();

    // get data from browser if already exists and set to initial state
    const todosOnStorage = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

    const [todos, setTodos] = useState([...todosOnStorage]);

    // get completed todos
    const todosCompleted = (todos && todos.length > 0) ? todos.filter((todo) => todo.completed === true) : []

    const progress = useProgress(todosCompleted.length, todos.length)

    const addTodoItem = (todoValue) => {
        setTodos([...todos, { title: todoValue, completed: false }]);

        todoStore.addTodo({ title: todoValue, completed: false });

        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const deleteTodoItem = (index) => {
        todos.splice(index, 1);
        setTodos([...todos]);
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const editTodoItem = (index, title) => {
        todos.splice(index, 1, { title: title, completed: false });
        setTodos([...todos]);
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const markTodoAsCompleted = (index, title) => {
        // basic modification
        todos.splice(index, 1, {
            completed: true,
            title
        });

        // and setting to the main states with spread
        setTodos([...todos]);
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    
    useEffect(() => {
        console.log('  noteStore  ', todoStore)
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


    return (
        <section className="container todo-wrapper">

            {
                todoStore.todos.map((a) => <b>{a.title}</b>)
            }
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
                            <TodoList
                                deleteTodoItem={deleteTodoItem}
                                markTodoAsCompleted={markTodoAsCompleted}
                                editTodoItem={editTodoItem}
                            />

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