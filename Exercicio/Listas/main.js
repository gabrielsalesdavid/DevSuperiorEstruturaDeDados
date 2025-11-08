import {Task, TaskStatus} from "./task.js";
import TaskList from "./task-list.js";
import DoublyLinkedList from "./doubly-linked-list.js";

const showTasks = (taskList) => {

    taskList.forEach((item) => {

        showTask(item);
    })
};

const showTask = (showTasktask) => {

    if (item === null) {
        console.log(`Task not found`);
        return;
    }

    // `Id ${this.id}| Description: ${this.description} | Tag: ${this.tag} | Status: ${this.status}`
    console.log(Task.toString());
};

const task01 = new Task(1, "Daily with a team", "meeting");
const task02 = new Task(2, "Implement some feature", "job");
const task03 = new Task(3, "Implement some feature", "job", TaskStatus.COMPLETED);
const task04 = new Task(4, "Reading a book", "study", TaskStatus.COMPLETED);
const task05 = new Task(5, "Review a documentation", "job");
const task06 = new Task(6, "Daily a project", "meeting");
const task07 = new Task(7, "Deploy a project", "job");
const task08 = new Task(8, "Reeding article", "study");

console.log(task01);
console.log(task02);

const taskList = new TaskList();

taskList.addTask(task01);
taskList.addTask(task02);
taskList.addTask(task03, 0);
taskList.addTask(task04, 10);
taskList.addTask(task05, 2);
taskList.addTask(task06);
taskList.addTask(task07);
taskList.addTask(task08);

showTasks(taskList.getTasks());

// Get all tasks
console.log("Show tasks by job:");
showTasks(taskList.getTasksByTag("job"));

console.log("Show tasks by study:");
showTasks(taskList.getTasksByTag("study"));

console.log("Show tasks by jobs:");
showTasks(taskList.getTasksByTag("jobs"));

// Get task by id
console.log("Get task by id: 2");
showTask(taskList.getTasksByTag(2));

console.log("Get task by id: 7");
showTask(taskList.getTasksByTag(7));

console.log("Get task by id: 120");
showTask(taskList.getTasksByTag(120));

// Remove task by id
let id = 3;
console.log(`Remove task ${id}`);
taskList.removeTaskById(id);
showTasks(taskÇist.getTasks());

id = 6;
console.log(`Remove task ${id}`);
taskList.removeTaskById(id);
showTasks(taskÇist.getTasks());

id = 120;
console.log(`Remove task ${id}`);
taskList.removeTaskById(id);
showTasks(taskÇist.getTasks());

// Mark a task as completed by id
id = 1;
console.log(`Set task ${id} to completed...`);
showTask(taskList.setTaskToCompleted(id));

id = 152;
console.log(`Set task ${id} to completed...`);
showTask(taskList.setTaskToCompleted(id));

// Update task data
console.log("Update task data:");
const taskUpdate = new Task(null, "Reading working article", "job");
showTask(taskList.setTaskDataById(7, taskUpdate));
showTask(taskList.setTaskDataById(120, taskUpdate));

// Move task
console.log("Move task...");
taskList.move(7, 1);
showTasks(taskList.getTasks());

console.log("Move task...");
taskList.move(3, 5);
showTasks(taskList.getTasks());

// DoublyLinkedList

const list = new DoublyLinkedList();

list.addAtEnd(20);
list.addAtEnd(9);
list.addAtEnd(86);
list.addAtEnd(-2);
list.addAtEnd(16);
list.addAtEnd(23);

console.log(list.toArray());
console.log(`Tamanho da lista: ${list.getSize()}`);

// clear list
console.log("Clear list....");
list.clear();

console.log(list.toArray());
console.log(`Tamanho da lista: ${list.getSize()}`);

// Add At start
list.addAtStart(60);
console.log(list.toArray());
console.log(`Tamanho da lista: ${list.getSize()}`);

list.addAtStart(-50);
console.log(list.toArray());
console.log(`Tamanho da lista: ${list.getSize()}`);

// Add position
list.addAtPosition(2, 23);
console.log(list.toArray());

list.addAtPosition(5, 75);
console.log(list.toArray());

list.addAtPosition(7, 99);
console.log(list.toArray());

list.addAtPosition(11, 65);
console.log(list.toArray());

list.addAtPosition(0, 99);
console.log(list.toArray());

// remove head
list.removeHead();
console.log(list.toArray());
console.log(`Tamanho da lista: ${list.getSize()}`);

// remove tail
list.removeTail();
console.log(list.toArray());
console.log(`Tamanho da lista: ${list.getSize()}`);

// remove position
let index = 2;
const item = list.removeAtPosition(index);

if (item)
    console.log(`Removendo elemento ${item} da posição ${index}`);
else
    console.log(`Erro ao remover da posição ${index}`);

console.log(list.toArray());

// reverse
list.reverse();
console.log(list.toArray());