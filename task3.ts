// 3. Напишите код функции reversePrint(), которая выведет значения переданного ей односвязного списка в обратном порядке (4, 3, 2, 1). Для вывода значений используйте функцию console.log().

var someList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function reversePrint(linkedList) {
  let res = [linkedList.value];
  let nextNode = linkedList.next;

  while (nextNode) {
    res.push(nextNode.value);

    nextNode = nextNode.next;
  }

  console.log(res.reverse().join(', '));
}

console.log(reversePrint(someList));
