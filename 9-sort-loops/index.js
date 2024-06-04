const arr = [10, 40, 72, -5, 10, 0, -50, 7, 8, 2, 3];
const increase = "increase"; // возрастание
const decrease = "decrease"; // убывание

function sort(arr, sortType) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (sortType === "increase") {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
      if (sortType === "decrease") {
        if (arr[j] < arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }
  return arr;
}

console.log(sort(arr, increase));
console.log(sort(arr, decrease));
