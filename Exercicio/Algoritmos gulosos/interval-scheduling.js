/**
 * @param {number} n
 * @param {number[]} tasks
 */

var moskTasks = function (n, tasks) {

    tasks.sort((a, b) => a.end - b.start); // ordena as tarefas pelo tempo de término

    let count = 0;
    let lastEndTime = 0;

    for (let i = 0; i < n; i++) {

        if (tasks[i].start >= lastEndTime) { // se a tarefa atual começar após o término da última tarefa selecionada

            count++; // incrementa o contador de tarefas selecionadas
            lastEndTime = tasks[i].end; // atualiza o tempo de término da última tarefa selecionada
        }
    }

    return count; // retorna o número máximo de tarefas que podem ser realizadas
}

console.log(moskTasks(3, [{ start: 1, end: 3 },
{ start: 2, end: 5 },
{ start: 4, end: 6 }])); // Output: 2

console.log(moskTasks(4, [{ start: 0, end: 6 },
{ start: 1, end: 4 },
{ start: 3, end: 5 },
{ start: 5, end: 7 }])); // Output: 3

console.log(moskTasks(5, [{ start: 3, end: 9 },
{ start: 2, end: 5 }, { start: 6, end: 8 },
{ start: 1, end: 4 },
{ start: 5, end: 7 }])); // Output: 3
console.log(moskTasks(4, [{ start: 1, end: 2 },
{ start: 2, end: 3 },
{ start: 3, end: 4 },
{ start: 4, end: 5 }])); // Output: 4