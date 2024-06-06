const arr = [10, 40, 72, -5, 10, 0, -50, 7, 8, 2, 3];

function sort(arr, increase = false) {
  let sortArr = [...arr];
  for (let i = 0; i < sortArr.length; i++) {
    for (let j = 0; j < sortArr.length - i; j++) {
      if (
        increase ? sortArr[j] > sortArr[j + 1] : sortArr[j] < sortArr[j + 1]
      ) {
        [sortArr[j], sortArr[j + 1]] = [sortArr[j + 1], sortArr[j]];
      }
    }
  }
  return sortArr;
}

console.log(sort(arr));
console.log(sort(arr, true));

console.log(arr);
