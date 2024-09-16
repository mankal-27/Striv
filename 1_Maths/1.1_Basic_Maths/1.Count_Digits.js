
function countDigits(N) {
  let count = 0;
  while (N > 0) {
          N = Math.floor(N / 10);
          count++;
  }
  return count;
}

module.exports = countDigits;