// Create a list of the form:
// var list = {
//   value: 7,
//   rest: {
//     value: 22,
//     rest: {
//       value: 19,
//       rest: null
//     }
//   }
// }
//
// arrayToList()
// Takes an array, and returns a list object version of the array
// [6, 1, 4]
//
// Go to first index
// Value: val
// If there is another index
//   rest = { }
// Else
//   Rest = null

const myArr1 = [1, 45, 9, 6];
console.log(arrayToList(myArr1));
console.log(listToArray(arrayToList(myArr1)));

function arrayToList(arr, pos) { 
  if (arr !== undefined && arr !== null) {
    let list = {};
    pos = pos || 0;

    list.value = arr[pos];

    if (++pos <= arr.length - 1) {
      list.rest = arrayToList(arr, pos);
    } else {
      return null;
    }
    return list;
  }
}

function listToArray(list) {
  if (list !== undefined && list !== null) {
    let arr = [];
    do {
      arr.push(list.value);
      list = list.rest;
    } while (list.rest !== null);
    return arr;
  }
}










