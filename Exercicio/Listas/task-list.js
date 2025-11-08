import LinkedList from "./remover-elemento-de-uma-posicao-especifica-PARTE-1.js";

export default class TaskList {

    constructor() {

        this.tasks = new LinkedList();
    }

    getTasks = () => {

        return this.tasks.toArray();
    }

    addTask = (task, index = null) => {

        if (index === null) {
            this.tasks.addAtEnd(task);
            return;
        }

        if (!this.tasks.get(index)) {
            return;
        }

        this.tasks.addAtPosition(index, task);
    };
}