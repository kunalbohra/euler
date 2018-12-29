function largestPrimeFactor(n) {
  let maxPrime = -1;

  while (n % 2 == 0) {
    //if n is even, keep dividing by n
    maxPrime = 2;
    n = n / 2;
  }
  //increment by 2 starting at 3, since we are left with an odd number at this point
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i == 0) {
      maxPrime = i;
      n = n / i;
    }
  }

  if (n > 2) {
    maxPrime = n;
  }

  return maxPrime;
}

module.exports = largestPrimeFactor;
