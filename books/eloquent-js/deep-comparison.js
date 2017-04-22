const a = {
  test: 6,
  taco: "TEST"
};
const b = {
  test: 5,
  taco: "TEST"
};
console.log(deepCompare(a, b));

function deepCompare(a, b) {
  if (typeof a == "object" && typeof b == "object") {
    if (a !== null && b !== null) {
      // Loop through properties of a, compare with properties of b
      let aProps = [];
      for (let prop in a) {
        if (a.hasOwnProperty(prop)) {
          aProps.push(prop);
        }
      }
      for (let propIndex = 0; propIndex < aProps.lenth; propIndex++) {
        if (!deepCompare(a[propIndex], b[propIndex])) {
          return false;
        }
      }
      let bProps = [];
      for (let prop in b) {
        if (b.hasOwnProperty(prop)) {
          bProps.push(prop);
        }
      }
      for (let propIndex = 0; propIndex < bProps.lenth; propIndex++) {
        if (!deepCompare(a[propIndex], b[propIndex])) {
          return false;
        }
      }
      return true;
    } else if (a === null && b === null) {
      return true;
    }
    return false;
  } else {
    return a === b;
  }
}

