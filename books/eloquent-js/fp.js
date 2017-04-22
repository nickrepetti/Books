const myArr1 = [3, 9, 4, 6, 5];
console.log(myArr1);
// forEach(myArr1, console.log);

function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

console.log(filter(myArr1, function(val) {
  return val % 2 === 0;
}));

console.log(myArr1.filter(function(val) {
  return val % 2 === 0;
}));

console.log(map(myArr1, function(val) {
  return val * 2;
}));

console.log(myArr1.map(function(val) {
  return val * 2;
}));

console.log(map(filter(myArr1, 
  function(val) {
    return val % 2 === 0;
  }
),function(val) {
  return val * 3;
}));

console.log(myArr1.filter(function(val) {
  return val % 2 === 0;
}).map(function(val) {
  return val * 3;
}));

console.log(reduce(myArr1, function(a, b) {
  return a + b;
}, 6));

console.log(myArr1.reduce(function(a, b) {
  return a + b;
}, 6));

function filter(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (fn(val)) {
      newArr.push(val);
    }
  }
  return newArr;
}

function map(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

function reduce(arr, fn, startVal) {
  let cur = startVal
  for (let i = 0; i < arr.length; i++) {
    cur = fn(cur, arr[i]);
  }
  return cur;
}

