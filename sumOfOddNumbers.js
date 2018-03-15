// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

// function makeRowOf(rowNumber) {
//   for (let i = 0; i < rowNumber; i++) {

//   }
// }

function getOddNumberCount(n) {
  for (i = n, oddNumberCount = 0; i >= 1; i--) {
    oddNumberCount += i;
  }
  return oddNumberCount;
}

function populateArrayWith(count) {
  let arr = [];
  for (let i = 0, start = 1; i < count; i++, start += 2) {
    arr.push(start);
  }
  return arr;
}

function getSumOfLast(arr, n) {
  return arr.slice(arr.length - n).reduce((accumulator, prev) => accumulator + prev) 
}

function sumOfOddNumbers(n) {
  let count = getOddNumberCount(n);
  let arr = populateArrayWith(count);
  return getSumOfLast(arr, n);
}

console.log(sumOfOddNumbers(1));
console.log(sumOfOddNumbers(2));
console.log(sumOfOddNumbers(3));
console.log(sumOfOddNumbers(4));
console.log(sumOfOddNumbers(5));
