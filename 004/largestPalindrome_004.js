function isPalindrome(n) {
  return (
    String(n)
      .split('')
      .reverse()
      .join('') == String(n)
  );
}

function largestThreeDigitPalindromeProduct() {
  let maxProd = 100;
  for (let i = 999; i >= 100; i--) {
    for (let j = 100; j < 1000; j++) {
      if (i * j > maxProd && isPalindrome(i * j)) {
        maxProd = i * j;
      }
    }
  }

  return maxProd;
}

module.exports = largestThreeDigitPalindromeProduct;
