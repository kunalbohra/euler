const largest = require('./largestPalindrome_004');

describe('largest 3 digit palindrome', () => {
  test('that largest 3 digit palindrome is 906609', () => {
    expect(largest()).toBe(906609);
  });
});
