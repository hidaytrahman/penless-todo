import { firebaseApp } from "config/firebase.config";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import useFireStore from "hooks/useFireStore";
import { makeAutoObservable, runInAction } from "mobx";

class todoStore {
    todos = [] // localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    data = useFireStore();

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this, {}, { autoBind: true })
        this.fetchTodos()
    }

    addTodo(todoData) {
        this.todos.push(todoData)
        localStorage.setItem("todos", JSON.stringify(this.todos))

    }

    initializeTodo(todoData) {
        console.log({ todoData })
        // this.todos.push([...todoData])
       
    }

    async fetchTodos() {
        this.todos = []
        this.state = "pending"
        try {
            const db = getFirestore(firebaseApp);
            const querySnapshot = await getDocs(collection(db, "todos"));
            const todos = [];

            // iterate all data in the object format for the array and transform with the expected format for frontend
            querySnapshot.forEach((doc) => {
                todos.push({
                    id: doc.id,
                    ...doc.data()
                })

            });

    
            runInAction(() => {
                this.todos = todos

            })
        } catch (e) {
            runInAction(() => {
                this.state = "error"
            })
        }
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