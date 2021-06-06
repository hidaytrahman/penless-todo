import { Chip } from '@material-ui/core';
import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';


const Todo = () => {

    const [todos, setTodos] = useState([{
        title: "I will create todo on painless todo app",
        completed: true
    }]);

    const addTodoItem = (todoValue) => {
        setTodos([...todos, { title: todoValue, completed: false }])
    }

    const deleteTodoItem = (index) => {
        todos.splice(index, 1);
        setTodos([...todos]);
    }

    const markTodoAsCompleted = (index, title) => {
        // basic modification
        todos.splice(index, 1, {
            completed: true,
            title
        });

        // and setting to the main states with spread
        setTodos([...todos]);
    }

    const todosCompleted = todos.filter((todo) => todo.completed === true)

    return (
        <section className="container">
            <AddTodo
                addTodoItem={addTodoItem}

            />

            <div className="row">
                <div className="col-md-8">
                    <TodoList
                        todos={todos}
                        deleteTodoItem={deleteTodoItem}
                        markTodoAsCompleted={markTodoAsCompleted}
                    />
                </div>

                <div className="col-md-4">
                    <section className="todo-board">
                        <h3>Todo Board 📝</h3>
                        <hr />
                        <small>
                            ( <span>List</span> <span> {todosCompleted.length} / {todos.length}</span> )
                        </small>
                        <hr />

                        <div>

                            <div>
                                <strong>All : </strong> <Chip color="primary" label={todos.length} />
                            </div>

                            <div>
                                <strong>Completed : </strong> <Chip color="secondary" label={todosCompleted.length} />
                            </div>
                        </div>
                    </section>
                </div>

            </div>

        </section>
    )
}

export default Todo;