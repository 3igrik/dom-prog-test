// 1. Написать код функции 'findUnique', которая за один проход вернет все уникальные числа (Не использовать Set).

const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];

function findUnique (arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true);
    } else {
      map.set(arr[i], false);
    }
  }

  return Array.from(map.keys()).filter(key => map.get(key));
}

console.log(findUnique(array));
