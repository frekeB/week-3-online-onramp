function transpose(arr) {
  return arr[0].map((col, c) => arr.map((row, r) => arr[r][c]));
}

module.exports = transpose;
