
// //item at 1st index should be 10
// test("filter() should return the only item in an array", () => {
//   const result = filter([10], () => true);
//   equal(result[0], 10);
// });


// test("filter() test to return items that pass the callback fn", () => {
//   const result = filter([0, 1, 2, 3, 4, 5, 6], (i) =>  i > 5);
//   equal(result[0], 6);
// });




// test("every() returns true if every item meets condition", () => {
//   const result = every([2, 4, 6], (i) => i%2 == 0);
//   equal(result, true);
// })


// test("every() returns false if one item does not meet condition", () => {
//   const result = every(['2', 4, 6], (i) => i%2 == 0);
//   equal(result, true);
// })


test("reduce() should return a number, not an array", () => {
    const result = reduce([1, 2, 3], (total, x) => total + x, 0);
  console.log(result)
    return Number.isInteger(result);
  });
  