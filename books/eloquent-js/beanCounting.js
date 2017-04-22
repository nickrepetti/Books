function countChar(character) {
  let c = character;

  return function(str) {
    let cnt = 0;

    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == c) {
        cnt++;
      }
    }

    return cnt;
  }
}

let countBs = countChar("B");

console.log(countBs("Beeee"));
console.log(countBs("BbBb"));
console.log(countBs("CBcefBWEOICOBEervijB"));
