import LinkedList from "./remover-elemento-de-uma-posicao-especifica-PARTE-1.js";
import { Task, TaskStatus } from "./task.js";

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

    getTaskByTag = (tag) => {

        let current = this.tasks.head;
        const tasksByTag = [];

        while (current) {

            if (current.value.tag === tag)
                tasksByTag.push(current.value);

            current = current.next;
        }

        return tasksByTag;
    };

    getTaskById = (id) => {

        let current = this.tasks.head;

        while (current) {

            if (current.value.id === id)
                return current.value;

            current = current.next;
        }

        return null;
    };

    removeTaskById = (id) => {

        const taskItem = this.getTaskById(id);

        if (taskItem)
            return this.tasks.remove(taskItem);

        return null;
    };

    setTaskToCompleted = (id) => {

        const taskItem = this.getTaskById(id);

        if (taskItem)
            taskItem.setStatus(TaskStatus.COMPLETED);

        return taskItem;
    };

    setTaskDataById = (id, task) => {

        const taskItem = this.getTaskById(id);

        if (taskItem)
            taskItem.setDescription(task.getDescription());
            taskItem.setStatus(task.getStatus());
            taskItem.setTag(task.getTag());

        return taskItem;
    };

    move = (id, targetIndex) => {

        if (targetIndex < 0 || targetIndex > this.task.getSize())
            return null;

        const taskItem = this.getTaskById(id);
        const sourceIndex = this.taks.indexOf(taskItem);

        if (taskItem && sourceIndex != targetIndex) {
            this.tasks.removeAtPosition(sourceIndex);
            this.tasks.addAtPosition(targetIndex, taskItem);
            return;
        }

        return null;
    };
}