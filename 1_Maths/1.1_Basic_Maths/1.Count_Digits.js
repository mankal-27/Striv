function reverseDigits(N) {
  let rev = 0;
  while (N > 0) {
      rev = rev * 10 + (N % 10);
      N = Math.floor(N / 10);
  }
  return rev;
}

// Export the function so it can be imported in the test file
module.exports = reverseDigits;
