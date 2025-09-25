function reverse(list) {

    if (list.length <= 1)
        return list;

    const head = list[0];
    const tail = list.slice(1);

    const newList = reverse(tail);
    newList.push(head);

    return newList;
}

const result = reverse(["azul", "verde", "preto", "rosa"]);
console.log(result);