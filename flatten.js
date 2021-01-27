const flatten = function (originalArray) {
  let flatArray = [];
  for (let x = 0; x < originalArray.length; x++) {
    if (!Array.isArray(originalArray[x])) {
      flatArray.push(originalArray[x]);
    } else {
      for (let y = 0; y < originalArray[x].length; y++) {
        flatArray.push(originalArray[x][y]);
      }
    }
  }
  console.log(flatArray);
}

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
flatten([23, 22, 21, [20, 19, 18], [17, 16], [15], 14, [13, 12, 11, 10]]);