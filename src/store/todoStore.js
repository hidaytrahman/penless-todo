import { makeAutoObservable } from "mobx";

class todoStore {
    todos = [];

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todoData) {
        this.todos.push(todoData)
    }

    deleteTodo(index) {
        //console.log('  this.todos  ' );
        console.log('  this.todos  ', this.todos );
        this.todos = this.todos.filter((item, i) => i !== index);
    }
}

export default todoStore;