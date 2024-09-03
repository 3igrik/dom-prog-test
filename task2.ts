// 2. В последовательности записаны целые числа от 1 до N в произвольном порядке, но одно из чисел пропущено, остальные встречаются ровно по одному разу.  N заранее неизвестно. Определить пропущенное число.

{
  const array = [ 2, 1, 3, 5 ];

  function findMissing(arr) {
    const sortedArr = arr.sort((a, b) => a - b);

    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] !== i + 1) {
        return sortedArr[i] - 1;
      }
    }

    return sortedArr[sortedArr.length - 1] + 1;
  }

  console.log(findMissing(array));
}