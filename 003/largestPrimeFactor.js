function largestPrimeFactor(n) {
  let maxPrime = -1;

  while (n % 2 == 0) {
    maxPrime = 2;
    n = n / 2;
  }

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
