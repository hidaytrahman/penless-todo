import { makeAutoObservable } from "mobx";

class todoStore {
    todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this, {}, { autoBind: true })
    }

    addTodo(todoData) {
        this.todos.push(todoData)
        localStorage.setItem("todos", JSON.stringify(this.todos))
    }

    deleteTodo(index) {
        this.todos = this.todos.filter((item, i) => i !== index);
        localStorage.setItem("todos", JSON.stringify(this.todos))
    }

    editTodo(index, newvalue) {
        this.todos.splice(index, 1, newvalue);
        localStorage.setItem("todos", JSON.stringify(this.todos))
    }

    markCompleted(index) {
        this.todos.splice(index, 1, {
            completed: true,
            title: this.todos[index].title
        });
        localStorage.setItem("todos", JSON.stringify(this.todos))
    }
}

export default todoStore;