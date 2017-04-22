const arr = [[1, 3, 5], [2, 4, 6]];

console.log(arr);
console.log(flatten(arr));

// Flattens an array of arrays into a single array
function flatten(arr) {
  return arr.reduce(function(a, b) {
    return a.concat(b);
  });
}

