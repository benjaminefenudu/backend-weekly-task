// METHOD 1
function dropElements(arr, func) {
  let found = false;
  return arr.filter((item) => {
    if (found) return true;
    if (func(item)) {
      found = true;
      return true;
    }
  });
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
);

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);

// // METHOD 2
// function dropElements(arr, func) {
//   const startAtIndex = arr.findIndex(func);
//   return startAtIndex === -1 ? [] : arr.slice(startAtIndex);
// }

// console.log(
//   dropElements([1, 2, 3, 4], function (n) {
//     return n >= 3;
//   })
// );

// console.log(
//   dropElements([1, 2, 3, 4], function (n) {
//     return n > 5;
//   })
// );
