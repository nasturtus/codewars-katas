function getElementSet(arr) {
  let elementSet = {};
  let count;
  for (let i = 0; i < arr.length; i++) {
    count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count += 1;
        let typeOfElement = typeof arr[i];
        elementSet[arr[i]] = { count, typeOfElement };
      }
    }
  }
  return elementSet;
}

function getValues(elementSet) {
  let values = [];
  for (key in elementSet) {
    if (elementSet[key].typeOfElement === "string") {
      values.push(key);
    } else {
      values.push(parseInt(key));
    }
  }
  return values;
}

function findMostFrequent(arr) {
  let elementSet = getElementSet(arr);
  let values = getValues(elementSet);
  return values;
}

console.log(findMostFrequent([1, 1, 2, 3]));
console.log(findMostFrequent([1, 1, 2, 2, 3]));
console.log(findMostFrequent([1, 1, "2", "2", 3]));
