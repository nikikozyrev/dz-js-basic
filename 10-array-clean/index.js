const arr = [3, 6, 9, 2, 1, 8, 7, 2];

const deleteMoreFive = (num) => num > 5;

function reverseFilter(arr, deleteFn) {
  for (let i = 0; i < arr.length; i++) {
    if (deleteFn(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(reverseFilter(arr, deleteMoreFive));
