// https://www.codewars.com/kata/56582133c932d8239900002e/

function findCount(item, index, arr) {
  let count = 0;
  arr.forEach(num => {
    if (num === item) {
      count += 1;
    }
  });
  return count;
}
function mostFrequentItemCount(arr) {
  if (arr.length === 0) return 0;
  return Math.max(...arr.map(findCount));
}

console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
);
console.log(mostFrequentItemCount([10])); //should return empty array
