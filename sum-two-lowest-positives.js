// https://www.codewars.com/kata/sum-of-two-lowest-positive-integers/train/javascript

function sumTwoSmallestNumbers(numbers) {
  const sortedArr = numbers.sort((a, b) => a > b);
  return sortedArr[0] + sortedArr[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
