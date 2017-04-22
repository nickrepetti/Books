const arr1 = [1, 1, 1, 1];
const arr2 = [1, 3, 1, 2];

function eqNum(num) {
  return (val) => {
    return val === num;
  }
}

const eq1 = eqNum(1);
const eq2 = eqNum(2);

console.log(arr1);
console.log(every(arr1, eq1));
console.log(arr1.every(eq1));
console.log("-----------");
console.log(every(arr1, eq2));
console.log(arr1.every(eq2));
console.log("-----------");
console.log("-----------");
console.log(arr2);
console.log(every(arr2, eq1));
console.log(arr2.every(eq1));
console.log("-----------");
console.log(every(arr2, eq2));
console.log(arr2.every(eq2));

function every(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) {
      return false;
    }
  }
  return true;
}
