// if-else method

// function getMiddleCharacter(str) {
//   let strLength = str.length;
//   if (strLength % 2 == 0) {
//     let index = str.length / 2;
//     return str[index - 1] + str[index];
//   } else {
//     let index = Math.floor(strLength / 2);
//     return str[index];
//   }
// }

// ternary method

function getMiddleCharacter(str) {
  let strLength = str.length;
  return strLength % 2 === 0
    ? str[strLength / 2 - 1] + str[strLength / 2]
    : str[Math.floor(strLength / 2)];
}

console.log(getMiddleCharacter("ac"));
console.log(getMiddleCharacter("abcd"));
console.log(getMiddleCharacter("abcdef"));
console.log(getMiddleCharacter("abc"));
console.log(getMiddleCharacter("abcde"));
console.log(getMiddleCharacter("abcdefg"));
