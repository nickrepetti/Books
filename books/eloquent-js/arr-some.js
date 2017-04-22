const arr1 = [1, 1, 2, 3, 5];
const arr2 = [4, 1, 9, 6, 4];

console.log(arr1);
console.log(some(arr1, v => v === 3));
console.log(arr1.some(v => v === 3));
console.log(some(arr1, v => v === 7));
console.log(arr1.some(v => v === 7));
console.log("--------");
console.log(arr2);
console.log(some(arr2, v => v === 3));
console.log(arr2.some(v => v === 3));
console.log(some(arr2, v => v === 7));
console.log(arr2.some(v => v === 7));
console.log("--------");

function some(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return true;
    }
  }
  return false;
}

