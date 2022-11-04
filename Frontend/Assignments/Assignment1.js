// --------------- October 31 - 2022 Monday ---------------
// declaring variables
var number = 9;
var symbol = "";

for (let row = number / 9; row < number; row += 2) {
  // starting spaces
  for (let col = 0; col < number - row; col += 2) {
    symbol += " ";
  }
  // 1st side stars
  for (let col = 1; col < row + 1; col++) {
    symbol += "*";
  }
  // ending spaces
  for (let col = 0; col < number - row; col++) {
    symbol += " ";
  }
  // 2nd side stars
  for (let col = 0; col < row + 1; col++) {
    symbol += "*";
  }
  // after a row/new row
  symbol += "\n";
}

for (let row = number; row > 0; row--) {
  for (let col = 0; col < number - row; col++) {
    symbol += " ";
  }
  for (let col = 1; col < row * 2; col++) {
    symbol += "*";
  }
  symbol += "\n";
}
console.log(symbol);
