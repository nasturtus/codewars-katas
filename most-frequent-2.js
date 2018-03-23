// https://www.codewars.com/kata/56582133c932d8239900002e/

function getElementSet(arr) {
  let count;
  let elementSet = {};
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }
    elementSet[arr[i]] = count;
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
}

function mostFrequentItemCount(arr) {
  return getElementSet(arr);
}

console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
);
