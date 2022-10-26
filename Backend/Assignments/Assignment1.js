// ------------------------------- Oct 24 2022 Monday --------------------------------------

// 1) we have an array with some indexes
var lonely = [4, 7, 9, 3, 9, 4, 7, 19];

// 2) remove the duplicates values including the original one
// 3) use the filter method for this
var lonelyNumber = lonely.filter((lonelyNumberPicker) => {
  return lonely.filter((n) => n === lonelyNumberPicker).length === 1;
});
// 4) print the unique / single values in the console by also putting {} besides it
console.log({ lonelyNumber });
// that will give us the more detailed result

// test data
// 4,7,9,3,9,4,7,19
