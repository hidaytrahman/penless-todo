import { createContext, useContext } from "react";
import noteStore from "./noteStore";
import todoStore from "./todoStore";

class RootStore {
    constructor() {
        this.noteStore = new noteStore(this);
        this.todoStore = new todoStore(this);
    }
}

const StoresContext = createContext(new RootStore());

export const useStores = () => useContext(StoresContext);