// https://www.codewars.com/kata/5641275f07335295f10000d0/solutions/javascript

var group = {
  A: 20,
  B: 15,
  C: 10
};

function splitTheBill(group) {
  let totalBill = 0;
  let peopleCount = 0
  for (key in group) {
    totalBill += group[key];
    peopleCount++
  }
  console.log(totalBill)
  
  let splits = {}
  for (key in group) {
      console.log(group[key])
      splits[key] = parseFloat((group[key] - totalBill/peopleCount).toFixed(2))
  }
  console.log(splits)
}

splitTheBill(group);