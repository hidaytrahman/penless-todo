import { makeAutoObservable } from "mobx";

class noteStore {
    notes = []

    constructor() {
        
        makeAutoObservable(this)
    }

    addNote(a) {
        this.notes.push(a)
    }
}

export default noteStore;