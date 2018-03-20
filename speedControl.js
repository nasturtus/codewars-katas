function gps(s, x) {
  if (x.length > 1) {
    let arrOfSpeeds = [];
    x.forEach((element, index, arr) => {
      if (index <= arr.length - 2) {
        let avgSpeed = 3600 * (arr[index + 1] - element) / s;
        arrOfSpeeds.push(avgSpeed);
      }
    });
    return Math.floor(Math.max(...arrOfSpeeds));
  } else {
    return 0;
  }
}

x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];
s = 15;
console.log(gps(s, x));
