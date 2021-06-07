import { Chip } from '@material-ui/core';
import { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';


const Todo = () => {

    // get data from browser if already exists and set to initial state
    const todosOnStorage = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

    const [todos, setTodos] = useState([...todosOnStorage]);

    const addTodoItem = (todoValue) => {
        setTodos([...todos, { title: todoValue, completed: false }]);
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    const deleteTodoItem = (index) => {
        todos.splice(index, 1);
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

    // get completed todos
    const todosCompleted = (todos && todos.length > 0) ? todos.filter((todo) => todo.completed === true) : []

    return (
        <section className="container todo-wrapper">
            <AddTodo
                addTodoItem={addTodoItem}

            />

            <div className="row">
                <div className="col-md-8">

                    {
                        todos && todos.length > 0 ?
                        <TodoList
                            todos={todos}
                            deleteTodoItem={deleteTodoItem}
                            markTodoAsCompleted={markTodoAsCompleted}
                        />
                        : <div className="alert alert-info">What are you thinking, Add your first todo? 😉</div>
                    }

                </div>

                {
                    todos && todos.length > 0 &&
                    <div className="col-md-4">
                        <section className="todo-board">
                            <h3>Todo Board 📝</h3>
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

export default Todo;