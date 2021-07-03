import { makeAutoObservable } from "mobx";

class noteStore {

    constructor(rootStore) {
        this.rootStore = rootStore;

        makeAutoObservable(this)
    }
    

}

export default noteStore;